import { type MouseEvent, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useQueryState } from "nuqs";
import Title from "@/components/Title";
import Container from "@/layouts/Container";
import Main from "@/layouts/Main";
import AccordionTable from "@/components/AccordionTable";
import DataLoading from "@/components/DataLoading";
import Errors from "@/components/Errors";
import Button from "@/components/Button";
import Alert from "@/components/Alert";
import { TriangleAlert } from "lucide-react";
import Pagination from "@/components/Pagination";
import Modal from "@/components/Modal";
import { useListLetters } from "@/queries/allLettersQuery";
import cn from "@/utils/cn";

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;
const LIMIT = 2; // Number of letters to fetch per request

const Letters = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const [modal, setModal] = useState<string>("");
  const [isModal, setIsModal] = useState<string | null>(null);
  const [offset, setOffset] = useQueryState("offset");
  const search = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery: string = searchParams?.get("s") ?? "";

  const { data, isLoading, isError, error } = useListLetters(
    LIMIT,
    offset ? Number(offset) : 0,
    searchQuery
  );

  const pages = Math.ceil(
    (data?.oficios.pageInfo.offsetPagination.total ?? 0) / LIMIT
  );

  const handleOpenModal = (event: MouseEvent<HTMLButtonElement>) => {
    const modal = event.currentTarget.dataset.modal;
    const currentModal = event.currentTarget.dataset.open;
    if (currentModal && modal) {
      setIsModal(currentModal);
      setModal(modal);
    }
  };

  const handleSubmitSearchQuery = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const query = search?.current?.value;
    if (query) navigate(`?s=${query}`);
  };

  const handlePagination = (page: number) => {
    setOffset(String(Number((page - 1) * LIMIT)));
  };

  const handleShowDescription = (event: MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset.id;
    if (id && id !== isOpen) {
      setIsOpen(id);
    } else {
      setIsOpen(null);
    }
  };

  if (isLoading) return <DataLoading />;
  if (isError) return <Errors message={error.message} />;

  return (
    <>
      <Main className="py-10 xl:py-16">
        <Container>
          <Title title="Lista de Ofícios" className="uppercase" />

          <div className="rounded-xs bg-secondary-200/40 shadow-inner p-1.5 mb-5 w-full h-14 flex gap-3">
            <input
              type="search"
              name="query"
              placeholder="Digite um termo ou um ano para pesquisar"
              className={cn(
                "rounded-xs bg-white text-secondary-700 px-2 w-full h-full focus:outline-2 outline-primary-500 peer",
                "placeholder:text-base placeholder:text-secondary-600 placeholder:font-medium border-0",
                "focus:outline-priamry-500"
              )}
              autoFocus
              ref={search}
            />
            <Button
              type="button"
              title="Pesquisar"
              className={cn(
                "bg-primary-500 hover:bg-primary-600 text-white border-1 border-primary-500",
                "hover:border-primary-600 peer-focus:outline-2 peer-focus:outline-primary-500",
                "peer-focus:border-primary-500 focus:outline-2 focus:outline-primary-600",
                "font-bold transition-colors duration-300 rounded-xs grid place-content-center"
              )}
              onClick={handleSubmitSearchQuery}
            >
              Buscar
            </Button>
          </div>
          {data && pages >= 1 ? (
            <section className="rounded-md shadow-md bg-white p-4">
              <table className="rounded-sm w-full">
                <thead className="hidden md:block">
                  <tr
                    className={cn(
                      "rounded-t-sm bg-secondary-500 divide-x divide-white",
                      "text-white uppercase grid grid-cols-12 gap-1"
                    )}
                  >
                    <th className="col-span-1 py-1">Ano</th>
                    <th className="col-span-9 py-1">Título</th>
                    <th className="col-span-2 py-1">Ações</th>
                  </tr>
                </thead>
                <AccordionTable
                  letters={data}
                  handleModal={handleOpenModal}
                  handleShowDescription={handleShowDescription}
                  isOpen={isOpen}
                />
              </table>
            </section>
          ) : (
            <Alert className="border-lime-600">
              <TriangleAlert className="text-lime-600" size={32} />{" "}
              <p className="text-secondary-800">
                Infelizmente não encontramos nenhum ofício contendo o termo{" "}
                <strong className="text-primary-600 font-bold uppercase">
                  {searchQuery}
                </strong>
              </p>
            </Alert>
          )}
          {data && pages > 1 && (
            <Pagination
              hasPrevious={data.oficios.pageInfo.offsetPagination.hasPrevious}
              hasNext={data.oficios.pageInfo.offsetPagination.hasMore}
              offset={Number(offset)}
              total={data.oficios.pageInfo.offsetPagination.total}
              limit={LIMIT}
              maxItems={MAX_ITEMS}
              maxLeft={MAX_LEFT}
              handlePagination={handlePagination}
            />
          )}
        </Container>
      </Main>
      {isModal && (
        <Modal isModal={isModal} letterURL={modal} setIsModal={setIsModal} />
      )}
    </>
  );
};

export default Letters;
