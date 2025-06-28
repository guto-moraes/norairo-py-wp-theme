"use client";

import { Link } from "react-router";
import Navbar from "@/components/Navbar";
import Container from "./Container";
import { useQueryMainMenu } from "@/queries/menus";
import { useQueryHeaderTheme } from "@/queries/theme-settings";
import useThemeMode from "@/hooks/useThemeMode";


const Header = () => {
  const [theme] = useThemeMode()[0];
  const { data } = useQueryMainMenu();
  const { data: logoData } = useQueryHeaderTheme();

  const logoLight = logoData?.norairoTheme.norairoThemeSettings.logo.node.guid
  const logoDark = logoData?.norairoTheme.norairoThemeSettings.logo.node.guid;
  
  return (
    <header className="shadow-md bg-white/85 dark:bg-slate-950 h-20 w-full max-w-screen">
      <Container className="h-full">
        {logoData && data && (
          <Navbar dataItems={data}>
            <Link to="/" title="Logotipo do site Projeto Ofícios da Guerra">
              <img
                src={theme === "light" ? logoLight : logoDark }
                className="object-cover h-10 lg:h-11 w-40 lg:w-48 mx-auto sm:mx-0"
              />
            </Link>
          </Navbar>
        )}
      </Container>
    </header>
  );
};

export default Header;
