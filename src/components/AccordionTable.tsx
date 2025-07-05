import { Fragment } from "react";
import Button from "@/components/Button";
import { Icons } from "@/components/icons";
import cn from "@/utils/cn";
import type { AllLettersTypes, letterTypes } from "@/types/letters";
import formatFileSize from "@/utils/formatFileSize";
import { letterCreatedAt } from "@/utils/formatDate";
import Tooltip from "./Tooltip";
import { Link } from "react-router";

const AccordionTable = ({
  letters,
  isOpen,
  handleShowDescription,
  handleModal,
}: {
  letters: AllLettersTypes;
  isOpen: string | null;
  handleShowDescription: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <tbody className="max-md:rounded-sm">
      {letters.oficios.nodes.map((item: letterTypes) => {
        return (
          <Fragment key={item.id}>
            <tr
              className={cn(
                "grid grid-rows-auto md:grid-cols-12 gap-2 md:gap-1 md:divide-x",
                "max-md:shadow-md max-md:rounded-sm max-md:mb-4 md:divide-secondary-200/15",
                "md:border-b md:border-secondary-200/15 dark:bg-[#16161c]/40",
                isOpen === String(item.id)
                  ? "md:bg-gray-300/60"
                  : "bg-secondary-200/15"
              )}
            >
              <td
                className={cn(
                  "md:col-span-1 rounded-t-md md:rounded-none bg-secondary-500",
                  "max-md:dark:bg-slate-950 md:bg-transparent",
                  "py-1 md:py-3.5 px-2 md:px-0 md:grid md:place-content-center"
                )}
              >
                <div className="flex max-md:justify-center gap-1.5">
                  <span className="md:hidden text-sm text-white font-bold uppercase">
                    Ano:
                  </span>
                  <span className="text-sm text-white md:text-primary-600 dark:text-white font-bold">
                    {letterCreatedAt(item.details.originalfilecreatedat)}
                  </span>
                </div>
              </td>
              <td className="md:col-span-9 py-1 md:py-3.5 px-2 md:px-0">
                <div className="flex flex-col gap-1 md:gap-0.5 md:px-2">
                  <Link
                    to={item.link}
                    className={cn(
                      "text-base text-gray-600 dark:text-[white] hover:text-secondary-400 max-w-full",
                      "transition-colors duration-300 font-bold leading-7 md:flex"
                    )}
                    title={item.title}
                  >
                    <Icons.PDFFile className="size-5 min-w-6 fill-red-600 dark:fill-rose-500 mr-1 mb-1 hidden md:inline-block" />
                    <p className="max-md:line-clamp-3 md:truncate leading-5">
                      {item.title}
                    </p>
                  </Link>
                  <p className="text-xs text-secondary-600 dark:text-secondary-400 flex items-center gap-x-1">
                    <span className="font-medium">Categoria:</span>{" "}
                    <Link
                      to={item.categories.nodes[0].link}
                      title={`Ver todos os arquivos da categoria`}
                      className={cn(
                        "text-sky-600 dark:text-amber-300 hover:text-secondary-400",
                        "tracking-wide font-semibold uppercase transiton-colors duration-300"
                      )}
                    >
                      {item.categories.nodes[0].name}
                    </Link>{" "}
                    <span className="hidden md:inline-block">-</span>
                    <span className="hidden md:inline-block font-medium">
                      Tamanho do Arquivo:
                    </span>{" "}
                    <span className="hidden md:inline-block font-bold">
                      {formatFileSize(
                        item.details.transcriptionFileLink.node.fileSize,
                        2
                      )}
                    </span>
                  </p>
                </div>
              </td>
              <td
                className={cn(
                  "md:col-span-2 rounded-b-sm md:rounded-b-none bg-secondary-500",
                  "max-md:dark:bg-slate-950 md:bg-transparent",
                  "py-1 md:py-3.5 px-2 md:px-0 grid place-content-center"
                )}
              >
                <div className="rounded-b-sm md:rounded-b-none flex justify-center items-center gap-1.5 md:gap-0.5">
                  <Link
                    to={item.link}
                    className={cn(
                      "relative group/view rounded-full hover:bg-primary-200 dark:hover:bg-lime-400",
                      "md:hover:bg-secondary-200/55 size-7 grid place-content-center",
                      "bg-secondary-300/50 md:bg-transparent dark:bg-transparent"
                    )}
                  >
                    <Icons.FileText
                      className={cn(
                        "size-5 fill-white dark:fill-lime-400 md:fill-primary-500",
                        "dark:group-hover/view:fill-primary-950 pointer-events-none"
                      )}
                    />
                    <Tooltip
                      text="Acessar este Ofício"
                      className="-top-5 py-1 group-hover/view:visible group-hover/view:scale-100"
                    />
                  </Link>
                  <Button
                    data-modal={
                      item.details.transcriptionFileLink.node.mediaDetails
                        .sizes[0].sourceUrl
                    }
                    data-open={String(item.id)}
                    onClick={handleModal}
                    className={cn(
                      "relative group/modal rounded-full hover:bg-primary-200 dark:hover:bg-lime-400",
                      "md:hover:bg-secondary-200/55 size-7 grid place-content-center",
                      "bg-secondary-300/50 md:bg-transparent dark:bg-transparent"
                    )}
                  >
                    <Icons.Eye
                      className={cn(
                        "size-5 fill-white dark:fill-lime-400 md:fill-primary-500",
                        "dark:group-hover/modal:fill-primary-950 pointer-events-none"
                      )}
                    />
                    <Tooltip
                      text="Pré-visualizar ofício"
                      className="-top-5 py-1 group-hover/modal:visible group-hover/modal:scale-100"
                    />
                  </Button>
                  <Link
                    to={item.details.transcriptionFileLink.node.guid}
                    title={`Baixar ofício`}
                    download
                    target="_blank"
                    className={cn(
                      "relative group/download rounded-full hover:bg-primary-200 dark:hover:bg-lime-400",
                      "md:hover:bg-secondary-200/55 size-7 grid place-content-center",
                      "bg-secondary-300/50 md:bg-transparent dark:bg-transparent"
                    )}
                  >
                    <Icons.Download
                      className={cn(
                        "size-5 fill-white dark:fill-lime-400 md:fill-primary-500",
                        "dark:group-hover/download:fill-primary-950 pointer-events-none"
                      )}
                    />
                    <Tooltip
                      text="Baixar este ofício"
                      className="-top-5 py-1 group-hover/download:visible group-hover/download:scale-100"
                    />
                  </Link>
                  <Button
                    data-id={item.id}
                    onClick={handleShowDescription}
                    className={cn(
                      "rounded-full hover:bg-primary-200 md:hover:bg-secondary-200/55 size-7 grid",
                      "dark:hover:bg-lime-400 relative group/show place-content-center group/show",
                      isOpen === item.id
                        ? "bg-secondary-600 md:bg-primary-400 dark:bg-lime-400"
                        : "bg-secondary-300/50 md:bg-transparent dark:bg-transparent"
                    )}
                  >
                    <Icons.ChevronDown
                      className={cn(
                        "size-5 transition-transform duration-300 group-hover/show:fill-secondary-600",
                        "dark:group-hover/show:fill-primary-950 pointer-events-none",
                        isOpen === item.id
                          ? "fill-white dark:fill-primary-950 rotate-180"
                          : "fill-white md:fill-primary-500 dark:fill-lime-400 rotate-0"
                      )}
                    />
                    <Tooltip
                      text="Ver descrição"
                      className="-top-5 py-1 group-hover/show:visible group-hover/show:scale-100"
                    />
                  </Button>
                </div>
              </td>
            </tr>
            <tr
              className={cn(
                "transtion-transform duration-300 ease-in-out max-md:space-b-4 max-md:px-1.5",
                isOpen === item.id
                  ? "scale-100 bg-gray-300 dark:dark:bg-[#1c1e26]"
                  : "scale-0 collapse"
              )}
            >
              <td
                colSpan={3}
                className="md:py-6 md:px-4 rounded-b-sm md:rounded-b-none"
              >
                <h3 className="text-base lg:text-lg text-primary-600 dark:text-primary-300 font-bold leading-5 md:mb-2">
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "max-md:rounded-sm text-sm text-gray-700 dark:text-white/80 font-medium max-md:p-2",
                    "max-md:mt-2 max-md:mb-4 [&_p:not(:last-of-type)]:mb-4 text-justify hyphens-auto"
                  )}
                  dangerouslySetInnerHTML={{
                    __html: item.details.briefDescription,
                  }}
                />
              </td>
            </tr>
          </Fragment>
        );
      })}
    </tbody>
  );
};

export default AccordionTable;
