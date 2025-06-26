import { Link, NavLink } from "react-router";
import Container from "@/layouts/Container";
import type { FooterMenuItemTypes } from "@/types/menus";
import { useQueryFooterMenu } from "@/queries/menus";
import { useQueryFooterTheme } from "@/queries/theme-settings";

const Footer = () => {
  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  const copyYear =
    startYear === currentYear ? startYear : `${startYear}-${currentYear}`;

  const { data } = useQueryFooterMenu();

  const { data: footerLogo } = useQueryFooterTheme();

  return (
    <footer className="bg-primary-700 text-white w-full py-6 sm:py-0 h-auto md:h-[14.5rem]">
      <Container className="h-full flex flex-col justify-center space-y-8">
        <div className="flex justify-between items-center">
          {
            footerLogo && (
              <img
                src={
                  footerLogo?.norairoTheme.norairoThemeSettings.footerLogo.node.guid
                }
                alt="Logo do projeto Ofícios da Guerra"
                className="w-40 lg:w-48 mx-auto sm:mx-0"
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
                        className="text-white hover:text-lime-400 transition-colors duration-300"
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
        <hr className="w-full text-white h-0.5" />
        <div className="text-sm font-medium flex flex-col md:flex-row gap-4 justify-between items-center">
          <p className="text-center md:text-left">
            &copy;{copyYear} Ofícios da Guerra. Alguns direitos reservados.
          </p>
          <Link
            to="/politica-de-privacidade"
            title="Política de Privacidade"
            className="text-white hover:text-lime-500 transition-colors duration-300"
          >
            Política de Privacidade
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
