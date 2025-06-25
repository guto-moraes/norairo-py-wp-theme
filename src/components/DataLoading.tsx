import { Icons } from "@/components/icons";

const DataLoading = () => {
  return (
    <div className="h-full w-full grid place-content-center">
      <div className="flex flex-col justify-center items-center gap-y-4">
        <Icons.Loading className="mr-3 -ml-1 size-12 animate-spin text-tertiary-500 dark:text-lime-400" />
        <span className="text-xl text-primary-800 font-semibold">Carregando...</span>
      </div>
    </div>
  );
};

export default DataLoading;
