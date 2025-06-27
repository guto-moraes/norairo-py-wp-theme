import { Link, NavLink } from "react-router";
import Container from "@/layouts/Container";
import type { FooterMenuItemTypes } from "@/types/menus";
import { useQueryFooterMenu } from "@/queries/menus";
import { useQueryFooterTheme } from "@/queries/theme-settings";
import ToggleThemeMode from "@/components/ToggleThemeMode";
import cn from "@/utils/cn";

const Footer = () => {
  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  const copyYear =
    startYear === currentYear ? startYear : `${startYear}-${currentYear}`;

  const { data } = useQueryFooterMenu();

  const { data: footerLogo } = useQueryFooterTheme();

  return (
    <footer className="bg-primary-700 dark:bg-slate-950 text-white w-full py-6 sm:py-0 h-auto md:h-[14.5rem]">
      <Container className="h-full flex flex-col justify-center space-y-8">
        <div className="flex justify-between items-center">
          {
            footerLogo && (
              <img
                src={
                  footerLogo?.norairoTheme.norairoThemeSettings.footerLogo.node.guid
                }
                alt="Logo do projeto Ofícios da Guerra"
                className="w-40 lg:w-48"
              />
            )
          }
          <nav className="hidden md:block">
            <ul className="text-sm font-medium uppercase flex justify-center items-center gap-x-4">
              {data &&
                data.menuItems.nodes.map((item: FooterMenuItemTypes) => {
                  return (
                    <li key={Math.random()}>
                      <NavLink
                        title={item.label}
                        to={item.uri}
                        className={cn(
                          "text-white hover:text-lime-400 transition-colors duration-300",
                          "dark:text-sky-400 dark:hover:text-white dark:hover:opacity-50"
                        )}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </nav>
          <ToggleThemeMode />
        </div>
        <hr className="w-full text-white dark:opacity-50 h-0.5" />
        <div className="text-sm font-medium flex flex-col md:flex-row gap-4 justify-between items-center">
          <p className="text-center md:text-left dark:text-white dark:opacity-50">
            &copy;{copyYear} Ofícios da Guerra. Alguns direitos reservados.
          </p>
          <Link
            to="/politica-de-privacidade"
            title="Política de Privacidade"
            className={cn(
              "text-white hover:text-lime-500 transition-colors duration-300",
              "dark:text-sky-400 dark:hover:text-white dark:hover:opacity-50"
            )}
          >
            Política de Privacidade
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
