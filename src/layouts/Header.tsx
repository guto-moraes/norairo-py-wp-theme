// import { useState } from "react";
// import { NavLink } from "react-router";
// import { useQueryHeaderTheme } from "@/queries/theme-settings";
// import Button from "@/components/Button";
// import { Icons } from "@/components/icons";
// import Navigation from "@/components/Navigation";
import Navbar from "@/components/Navbar";
import Container from "./Container";
import { useQueryMainMenu } from "@/queries/menus";
import { useQueryHeaderTheme } from "@/queries/theme-settings";

const Header = () => {
  // const [showMenu, setShowMenu] = useState(false);
  const { data } = useQueryMainMenu();
  const { data: logoData } = useQueryHeaderTheme();

  // const handleShowMenu = () => {
  //   setShowMenu(!showMenu);
  // }

  const logoLink = logoData?.norairoTheme.norairoThemeSettings.logo.node.guid

  return (
    <header className="shadow-md bg-white/85 h-20 w-full max-w-screen">
      <Container className="h-full">
        {data && <Navbar logo={logoLink} dataItems={data} />}
      </Container>
    </header>
  );
};

export default Header;
