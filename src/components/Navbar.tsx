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
  dataItems: MainMenuTypes;
  children: React.ReactNode;
};

const Navbar = ({ dataItems, children }: NavbarTypes) => {
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

  // Close submenu on click outside
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

  // If submenu or mobile menu is open, close them after 750ms
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }

    if (showMenu) {
      setTimeout(() => {
        setShowMenu(false);
      }, 5000);
    }
  }, [open, showMenu]);

  return (
    <nav className="w-full max-w-screen h-full flex justify-between items-center">
      {children}
      <ul
        className={cn(
          "max-md:bg-[#0B0C14] dark:max-md:bg-[#16161c] py-3 px-6 md:px-0",
          "flex flex-col gap-3.5 md:flex-row justify-start md:justify-end items-start md:items-center",
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
                          "text-white hover:text-amber-300/75 group/submenu uppercase font-semibold",
                          "md:hover:text-secondary-600 p-0 flex items-center gap-0.5",
                          open
                            ? "md:text-rose-500 dark:md:text-amber-300/75"
                            : "md:text-primary-600 dark:md:text-white"
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
                          "bg-primary-800 md:bg-white/95 dark:bg-[#1c1e26] md:shadow-lg md:rounded-b-md w-full",
                          "transition-transform duration-300 md:absolute md:top-12 md:right-0 space-y-4",
                          "origin-top-left md:origin-top-right transform-gpu min-w-64 md:min-w-max",
                          open
                            ? "scale-100 p-4 mt-4 md:mt-1 mb-1.5 lg:mb-0 max-h-screen lg:max-h-max"
                            : "scale-0 max-h-0"
                        )}
                      >
                        {subitem.childItems.nodes.map(
                          (submenu: SubmenuMainMenuTypes) => (
                            <li key={submenu.databaseId}>
                              <NavLink
                                className={({ isActive }) => {
                                  return cn(
                                    "text-sm text-white hover:text-amber-300/75 font-semibold",
                                    "md:hover:text-secondary-600 font-semibold uppercase",
                                    isActive
                                      ? "md:text-rose-500 dark:md:text-amber-300/75"
                                      : "md:text-primary-600 dark:md:text-white"
                                  );
                                }}
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
                        className={({ isActive }) => {
                          return cn(
                            "text-white hover:text-amber-300/75 uppercase font-semibold",
                            "md:hover:text-secondary-600 transition-colors duration-300",
                            isActive
                              ? "md:text-rose-500 dark:md:text-amber-300/75"
                              : "md:text-primary-600 dark:md:text-white"
                          );
                        }}
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
          <Icons.Close className="size-7 fill-secondary-800 dark:fill-lime-400" />
        ) : (
          <Icons.MenuHamburger className="size-7 fill-secondary-800 dark:fill-lime-400" />
        )}
      </Button>
    </nav>
  );
};

export default Navbar;
