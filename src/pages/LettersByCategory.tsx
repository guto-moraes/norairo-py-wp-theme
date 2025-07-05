import { type MouseEvent, useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router";
import Container from "@/layouts/Container";
import Main from "@/layouts/Main";
import Title from "@/components/Title";
import Button from "@/components/Button";
import AccordionTable from "@/components/AccordionTable";
import Alert from "@/components/Alert";
import Pagination from "@/components/Pagination";
import Modal from "@/components/Modal";
import DataLoading from "@/components/DataLoading";
import Errors from "@/components/Errors";
import { TriangleAlert } from "lucide-react";
import { useLettersByCategory } from "@/queries/letters";
import { useQueryState } from "nuqs";
import cn from "@/utils/cn";

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;
const LIMIT = 12; // Number of letters to fetch per request

const LettersByCategory = () => {
  const { category = "" } = useParams();
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const [modal, setModal] = useState<string>("");
  const [isModal, setIsModal] = useState<string | null>(null);
  const [offset, setOffset] = useQueryState("offset");
  const search = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery: string = searchParams?.get("s") ?? "";

  const { data, isLoading, isError, error } = useLettersByCategory(
    LIMIT,
    offset ? Number(offset) : 0,
    category
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
      <Main className="py-10 xl:py-16 h-full">
        <Container>
          {data && (
            <Title
              title="Ofícios da categoria"
              category={data?.oficios.nodes[0].categories.nodes[0].name}
              className="uppercase"
            />
          )}
          
          <div className="rounded-xs bg-secondary-200/40 dark:bg-[#1c1e26] shadow-inner p-1.5 mb-5 w-full h-14 flex gap-3">
            <input
              type="search"
              name="query"
              placeholder="Digite um termo ou um ano para pesquisar"
              className={cn(
                "rounded-xs bg-white dark:bg-[#16161c] px-2 w-full h-full focus:outline-2",
                "outline-rose-500 peer text-secondary-700 focus:outline-priamry-500",
                "dark:text-secondary-200 placeholder:text-base placeholder:text-secondary-600",
                "dark:placeholder:text-secondary-200 placeholder:font-medium border-0"                
              )}
              autoFocus
              ref={search}
            />
            <Button
              type="button"
              title="Pesquisar"
              className={cn(
                "bg-rose-500 hover:bg-rose-600 text-white border-1 border-rose-500",
                "hover:border-rose-600 peer-focus:outline-2 peer-focus:outline-rose-500",
                "peer-focus:border-rose-500 focus:outline-2 focus:outline-rose-600 dark:hover:text-white",
                "font-bold transition-colors duration-300 rounded-xs grid place-content-center dark:text-rose-950",
                "dark:bg-rose-500 dark:hover:bg-rose-500 dark:border-rose-500 dark:hover:border-rose-500",
                "dark:peer-focus:outline-rose-500 dark:peer-focus:border-rose-500 dark:focus:outline-rose-500"
              )}
              onClick={handleSubmitSearchQuery}
            >
              Buscar
            </Button>
          </div>
          {data && pages >= 1 ? (
            <section className="rounded-md shadow-md bg-white dark:bg-[#1c1e26] p-4">
              <table className="rounded-sm w-full">
                <thead className="hidden md:block">
                  <tr
                    className={cn(
                      "rounded-t-sm bg-secondary-500 dark:bg-[#16161c]/80 text-white divide-x",
                      "divide-white dark:divide-secondary-200/15 uppercase grid grid-cols-12 gap-1"
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

export default LettersByCategory;