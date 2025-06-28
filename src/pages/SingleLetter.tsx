import { useParams } from "react-router";
import Title from "@/components/Title";
import Container from "@/layouts/Container";
import Main from "@/layouts/Main";
import DataLoading from "@/components/DataLoading";
import Errors from "@/components/Errors";
import { useSingleLetter } from "@/queries/letters";
import * as Sidebar from "@/components/SingleLetterSidebar";
import formatFileSize from "@/utils/formatFileSize";
import { brazilianFormatDate, dateTodayAbntFormat } from "@/utils/formatDate";
import TranscriberPhoto from "@/components/TranscriberPhoto";
import { formatAbntName } from "@/utils/formatAbntName";
import ClipboardArea from "@/components/ClipboardArea";
import PDFDocument from "@/components/PDFDocument";

const SingleLetter = () => {
  const { slug = "" } = useParams();

  const { data, isLoading, isError, error } = useSingleLetter(slug);

  if (isLoading) return <DataLoading />;
  if (isError) return <Errors message={error.message} />;

  if(data?.oficio === null){
    window.location.href = "https://oficiosdaguerra.com/404";
  }

  return (
    <Main className="py-10 xl:py-16 h-full">
      <Container>
        {data && (
          <>
            <Title title={data.oficio.title} />
            <div className="grid grid-rows-auto sm:grid-rows-1 sm:grid-cols-12 gap-8">
              <aside className="w-full flex flex-col gap-6 md:col-span-4 xl:col-span-3">
                <Sidebar.Title title="Informações do Arquivo" />
                <Sidebar.List>
                  <Sidebar.ListItem label="Categoria:">
                    <Sidebar.Link
                      url={data.oficio.categories.nodes[0].link}
                      title="Ver todos os arquivos da categoria Comando de Esquadra"
                      label={data.oficio.categories.nodes[0].name}
                      className="tracking-wide uppercase dark:text-amber-300/75"
                    />
                  </Sidebar.ListItem>
                  <Sidebar.ListItem
                    label="Tamanho do Arquivo:"
                    value={formatFileSize(
                      data.oficio.details.transcriptionFileLink.node.fileSize,
                      2
                    )}
                  />
                  <Sidebar.ListItem
                    label="Criado em:"
                    value={brazilianFormatDate(data.oficio.date)}
                  />
                  <TranscriberPhoto
                    transcriberId={data.oficio.details.transcriber}
                  />
                </Sidebar.List>
                <Sidebar.Title title="Arquivo-Fonte da Transcrição" />
                <Sidebar.List>
                  <Sidebar.ListItem
                    label="Autor:"
                    value={data.oficio.details.originalFileAuthor}
                  />
                  <Sidebar.ListItem
                    label="Data do documento:"
                    value={data.oficio.details.originalfilecreatedat}
                  />
                  <Sidebar.ListItem
                    label="Arquivo original digitalizado:"
                    className="flex gap-x-1"
                  >
                    <Sidebar.ExternalLink
                      url={data.oficio.details.originalFileLink}
                      title="Arquivo Digital do APMT"
                      label="APMT"
                    />
                  </Sidebar.ListItem>
                </Sidebar.List>
                <Sidebar.Title title="Descrição" />
                <Sidebar.BoxText>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data.oficio.details.briefDescription,
                    }}
                  />
                </Sidebar.BoxText>
                <Sidebar.Title title="Como citar - ABNT" />
                <ClipboardArea>
                  {formatAbntName(data.oficio.details.originalFileAuthor)}.{" "}
                  <strong>{data.oficio.title}</strong>.{" "}
                  {data.oficio.details.originalfilecreatedat}. Disponível em:{" "}
                  {data.oficio.details.transcriptionFileLink.node.guid}. Acesso
                  em: {dateTodayAbntFormat()}.
                </ClipboardArea>
              </aside>
              <div className="bg-secondary-100/75 dark:bg-[#1c1e26] p-4 rounded-md md:col-span-8 xl:col-span-9">
                <PDFDocument
                  fileName={data.oficio.title}
                  url={data.oficio.details.transcriptionFileLink.node.guid}
                />
              </div>
            </div>
          </>
        )}
      </Container>
    </Main>
  );
};

export default SingleLetter;