// import { useState } from "react";
// import { NavLink } from "react-router";
// import { useQueryHeaderTheme } from "@/queries/theme-settings";
// import Button from "@/components/Button";
// import { Icons } from "@/components/icons";
// import Navigation from "@/components/Navigation";
import Container from "./Container";

const Header = () => {
  // const [showMenu, setShowMenu] = useState(false);

  // const { data } = useQueryHeaderTheme();

  // const handleShowMenu = () => {
  //   setShowMenu(!showMenu);
  // }

  return (
    <header className="shadow-md bg-white/85 h-20 w-full max-w-screen">
      <Container className="h-full">
        Menu
        {/* <nav
          className="h-full flex justify-between items-center"
          aria-label="primary navigation"
        >
          <NavLink to="/" title="Página inicial">
            <img
              src={data?.norairoTheme.norairoThemeSettings.logo.node.guid}
              alt={data?.norairoTheme.norairoThemeSettings.logo.node.altText}
              className="w-40 lg:w-48 xl:max-h-14"
            />
          </NavLink>
          <Navigation showMenu={showMenu} />
          <Button title="Abri Menu" className="lg:hidden" onClick={handleShowMenu}>
            {
              showMenu ? (
                <Icons.Close className="size-7 fill-secondary-800" />
              ) : (
                <Icons.MenuHamburger className="size-7 fill-secondary-800" />
              )
            }
          </Button>
        </nav> */}
      </Container>
    </header>
  );
};

export default Header;
