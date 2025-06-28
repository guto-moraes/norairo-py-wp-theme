import cn from "@/utils/cn";
import Button from "./Button";

interface IPagination {
  hasPrevious: boolean;
  hasNext: boolean;
  offset: number;
  total: number;
  limit: number;
  maxItems: number;
  maxLeft: number;
  handlePagination: (page: number) => void;
}

const Pagination = ({
  hasPrevious,
  hasNext,
  offset,
  total,
  limit,
  maxItems,
  maxLeft,
  handlePagination,
}: IPagination) => {
  const currentPage = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil((total ?? 0) / limit);
  const maxFirst = Math.max(pages - (maxItems - 1), 1);
  const first = Math.min(Math.max(currentPage - maxLeft, 1), maxFirst);

  return (
    <ul className="w-full flex justify-end gap-1.5 mt-4">
      {hasPrevious && (
        <li>
          <Button
            className={cn(
              "rounded-xs bg-secondary-500 dark:bg-amber-300/75 hover:bg-primary-500",
              "dark:hover:bg-amber-300 py-1 text-white dark:text-primary-950",
              "text-xs font-medium transition-colors duration-300"
            )}
            onClick={() => handlePagination(currentPage - 1)}
          >
            Anterior
          </Button>
        </li>
      )}
      {Array.from({ length: Math.min(maxItems, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <Button
              className={cn(
                "rounded-xs bg-secondary-500 dark:bg-amber-300/75 hover:bg-primary-500 dark:hover:bg-amber-300",
                "py-1 text-white dark:text-slate-900 text-xs dark:disabled:bg-secondary-700",
                "dark:disabled:text-white transition-colors duration-300 disabled:cursor-not-allowed",
                "disabled:bg-secondary-100 disabled:text-secondary-700 font-medium w-7"
              )}
              disabled={page === currentPage ? true : false}
              onClick={() => handlePagination(page)}
            >
              {page}
            </Button>
          </li>
        ))}
      {hasNext && (
        <li>
          <Button
            className={cn(
              "rounded-xs bg-secondary-500 dark:bg-amber-300/75 hover:bg-primary-500",
              "dark:hover:bg-amber-300 py-1 text-white dark:text-primary-950",
              "text-xs font-medium transition-colors duration-300"
            )}
            onClick={() => handlePagination(currentPage + 1)}
          >
            Próximo
          </Button>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
