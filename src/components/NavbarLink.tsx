import type { MouseEvent, Ref } from "react";
import { NavLink } from "react-router";
import { Icons } from "./icons";
import Button from "./Button";
import cn from "@/utils/cn";

type NavbarLinkProps = {
  url?: string | undefined;
  title?: string;
  label: string;
  isSubmenu: boolean;
  dropdown?: (event: MouseEvent<HTMLButtonElement>) => void;
  isOpen?: boolean;
  className?: string;
  ref?: Ref<HTMLButtonElement | null>;
};

const NavbarLink = ({
  url,
  title,
  label,
  isSubmenu,
  dropdown,
  isOpen,
  className
}: NavbarLinkProps) => {
  return (
    <>
      {!isSubmenu && (
        <NavLink
          to={url === undefined ? "/" : url}
          className={({ isActive }) => {
            return cn(
              "text-md uppercase transition-colors duration-300",
              isActive
                ? "text-white hover:text-lime-400  lg:text-secondary-700 lg:hover:text-primary-500 font-extrabold active"
                : "text-lime-400 hover:text-white lg:text-primary-600 lg:hover:text-tertiary-700 font-semibold",
              className
            );
          }}
          title={title}
          end
        >
          {label}
        </NavLink>
      )}
      {isSubmenu && (
        <Button          
          className="p-0 -mt-1 group/submenu flex items-center gap-0.5"
          onClick={dropdown}
        >
          <span
            className={cn(
              "text-md uppercase text-lime-400 lg:text-primary-700 font-semibold",
              "group-hover/submenu:text-white lg:group-hover/submenu:text-secondary-700",
              "transition-colors duration-300 pointer-events-none"
            )}
          >
            {label}
          </span>
          <Icons.ChevronDown
            className={cn(
              "size-5 fill-lime-400 group-hover/submenu:fill-white  lg:fill-primary-700",
              "lg:group-hover/submenu:fill-tertiary-700 transition-all duration-300 pointer-events-none",
              isOpen ? "rotate-180 fill-lime-400" : "rotate-0"
            )}
          />
        </Button>
      )}
    </>
  );
};

export default NavbarLink;
