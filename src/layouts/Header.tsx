"use client";

import { Link } from "react-router";
import Navbar from "@/components/Navbar";
import Container from "./Container";
import { useQueryMainMenu } from "@/queries/menus";
import { useQueryHeaderTheme } from "@/queries/theme-settings";

const Header = () => {
  const { data } = useQueryMainMenu();
  const { data: logoData } = useQueryHeaderTheme();

  const logoLight = logoData?.norairoTheme.norairoThemeSettings.logo.node.guid;
  const logoDark = logoData?.norairoTheme.norairoThemeSettings.darkLogo.node.guid;

  return (
      <header className="shadow-md bg-white/85 dark:bg-[#1c1e26] h-20 w-full max-w-screen">
        <Container className="h-full">
          {logoData && data && (
            <Navbar dataItems={data}>
              <Link to="/" title="Logotipo do site Projeto Ofícios da Guerra">
                <img src={logoLight} className="object-cover w-40 lg:w-48 mx-auto sm:mx-0 dark:hidden" />
                <img src={logoDark} className="object-cover w-40 lg:w-48 mx-auto sm:mx-0 hidden dark:block" />
              </Link>
            </Navbar>
          )}
        </Container>
      </header>
  );
};

export default Header;
