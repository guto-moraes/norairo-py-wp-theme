import { type MouseEvent, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import Button from "./Button";
import { Icons } from "./icons";
import cn from "@/utils/cn";
import type {
  FirstNodeMainMenuTypes,
  MainMenuTypes,
  SecondNodeMainMenuTypes,
  SubmenuMainMenuTypes,
} from "@/types/menus";

type NavbarTypes = {
  logo?: string;
  dataItems: MainMenuTypes;
};

const Navbar = ({ logo, dataItems }: NavbarTypes) => {
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdown = useRef<HTMLUListElement | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleOpenSubmenu = (event: MouseEvent<HTMLButtonElement>) => {
    const open = event.currentTarget.dataset.open;
    if (open && open === "true") {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    const handleEscCloseDropdown = (event: KeyboardEvent) => {
      if (event && open === true && event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscCloseDropdown);
    return () => {
      document.removeEventListener("keydown", handleEscCloseDropdown);
    };
  }, [open]);

  // close submenu on click outside
  useEffect(() => {
    const clickHandler = (event: Event) => {
      const target = event.target as Node;
      if (!dropdown.current) return;
      if (
        !open ||
        dropdown.current.contains(target) ||
        (trigger.current && trigger.current.contains(target))
      )
        return;
      setOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  return (
    <nav className="w-full max-w-screen h-full flex justify-between items-center">
      {logo && (
        <NavLink to="/" title="Página Inicial" className="max-w-48">
          <img
            src={logo}
            title="Logotipo do Projeto Ofícios da Guerra"
            className="w-40 lg:w-48 mx-auto sm:mx-0"
          />
        </NavLink>
      )}
      <ul
        className={cn(
          "bg-primary-700 md:bg-transparent py-3 px-6 md:px-0 flex flex-col gap-3.5",
          "md:flex-row justify-start md:justify-end items-start md:items-center",
          "md:gap-4 max-md:z-30 max-md:h-screen w-full max-w-72 min-w-max max-md:absolute",
          "max-md:top-20 max-md:right-0 max-md:pt-6 transition-transform duration-300",
          showMenu ? "max-md:translate-x-0" : "max-md:translate-x-200"
        )}
      >
        {dataItems &&
          dataItems.menus.nodes.map((item: FirstNodeMainMenuTypes) => {
            return item.menuItems.nodes.map(
              (subitem: SecondNodeMainMenuTypes) => {
                if (subitem.childItems.nodes.length > 0) {
                  return (
                    <li className="relative" key={subitem.databaseId}>
                      <Button
                        ref={trigger}
                        className={cn(
                          "text-white hover:text-lime-400 font-semibold group/submenu uppercase",
                          "md:text-primary-600 md:hover:text-secondary-600 p-0 flex items-center gap-0.5"
                        )}
                        title={subitem.label}
                        data-open={String(open)}
                        onClick={handleOpenSubmenu}
                      >
                        <span className="w-max">{subitem.label}</span>
                        <Icons.ChevronDown className="size-5 pointer-events-none" />
                      </Button>
                      <ul
                        ref={dropdown}
                        className={cn(
                          "bg-primary-800 md:bg-white/95 md:shadow-lg md:rounded-b-md w-full",
                          "transition-transform duration-300 md:absolute md:top-12 md:right-0 space-y-4",
                          "origin-top-left md:origin-top-right transform-gpu min-w-64 md:min-w-max",
                          open
                            ? "scale-100 p-4 mt-4 md:mt-0 mb-1.5 lg:mb-0 max-h-screen lg:max-h-max"
                            : "scale-0 max-h-0"
                        )}
                      >
                        {subitem.childItems.nodes.map(
                          (submenu: SubmenuMainMenuTypes) => (
                            <li key={submenu.databaseId}>
                              <NavLink
                                className={cn(
                                  "text-sm text-white hover:text-lime-400 md:text-primary-600",
                                  "md:hover:text-secondary-600 font-semibold uppercase"
                                )}
                                to={submenu.uri}
                                title={submenu.label}
                              >
                                {submenu.label}
                              </NavLink>
                            </li>
                          )
                        )}
                      </ul>
                    </li>
                  );
                } else if (subitem.parentDatabaseId === 0) {
                  return (
                    <li key={subitem.databaseId}>
                      <NavLink
                        className={cn(
                          "text-white hover:text-lime-400 font-semibold uppercase md:text-primary-600",
                          "md:hover:text-secondary-600 transition-colors duration-300"
                        )}
                        to={subitem.uri}
                        title={subitem.label}
                      >
                        {subitem.label}
                      </NavLink>
                    </li>
                  );
                }
              }
            );
          })}
      </ul>
      <Button title="Abri Menu" className="md:hidden" onClick={handleShowMenu}>
        {showMenu ? (
          <Icons.Close className="size-7 fill-secondary-800" />
        ) : (
          <Icons.MenuHamburger className="size-7 fill-secondary-800" />
        )}
      </Button>
    </nav>
  );
};

export default Navbar;
