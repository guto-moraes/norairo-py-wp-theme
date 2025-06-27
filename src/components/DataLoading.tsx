import Container from "@/layouts/Container";
import { Icons } from "@/components/icons";

const DataLoading = () => {
  return (
    <Container className="py-10 xl:py-16 h-full w-full grid place-content-center">
      <div className="flex flex-col justify-center items-center gap-y-4">
        <Icons.Loading className="mr-3 -ml-1 size-12 animate-spin text-tertiary-500 dark:text-lime-400" />
        <span className="text-xl text-primary-800 dark:text-white font-semibold">
          Carregando...
        </span>
      </div>
    </Container>
  );
};

export default DataLoading;
