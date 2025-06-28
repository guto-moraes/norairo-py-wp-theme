import { Link as Links } from "react-router";
import { Icons } from "./icons";
import cn from "@/utils/cn";

interface ISidebarList {
  className?: string;
  children: React.ReactNode;
}

export const List = ({ className, children }: ISidebarList) => (
  <ul
    className={cn(
      "text-xs text-secondary-700 dark:text-white/75 font-medium flex flex-col gap-y-2.5 max-w-full",
      className
    )}
  >
    {children}
  </ul>
);

interface ISidebarListItem {
  className?: string;
  label?: string;
  value?: string | number;
  children?: React.ReactNode;
}

export const ListItem = ({ className, label, value, children }: ISidebarListItem) => (
  <li
    className={cn(
      "rounded-sm shadow-sm bg-white dark:bg-[#1c1e26] py-1.5 px-2.5",
      className
    )}
  >
    {label && label} {value && <strong className="text-secondary-800 dark:text-white/75">{value}</strong>}{" "}
    {children && children}
  </li>
);

interface IExternalLink {
  className?: string;
  url: string;
  title: string;
  label: string;
}

export const ExternalLink = ({ className, url, title, label }: IExternalLink) => (
  <Links
    to={url}
    title={title}
    className={cn(
      "flex gap-x-1 text-sky-600 dark:text-amber-300/75 hover:text-priamry-400",
      "font-bold transition-colors duration-300",
      className
    )}
    target="_blank"
  >
    {label} <Icons.ExternalLink className="size-3.5" />
  </Links>
);

interface ISidebarLink {
  className?: string;
  url: string;
  title: string;
  label: string;
}

export const Link = ({ className, url, title, label }: ISidebarLink) => (
  <Links
    to={url}
    className={cn(
      "text-sky-600 hover:text-secondary-700 transition-colors duration-300",
      className
    )}
    title={title}
  >
    <strong>{label}</strong>
  </Links>
);

export const Title = ({ title }: { title: string }) => (
  <h2 className="text-lg text-primary-600 dark:text-primary-300 font-bold">{title}</h2>
);

export const BoxText = ({ children }: { children: React.ReactNode }) => (
  <div
    className={cn(
      "rounded-sm drop-shadow-sm bg-white p-2.5 text-sm text-secondary-800 text-justify",
      "hyphens-auto [&_p:not(:last-of-type)]:mb-2 max-h-70 overflow-y-auto dark:text-white/80",
      "scrollbar-thumb-secondary-300 scrollbar-track-secondary-200/70 scrollbar-thin",
      "scrollbar-thumb-rounded-full scrollbar-track-rounded-full dark:bg-[#1c1e26]"
    )}
  >
    {children}
  </div>
);