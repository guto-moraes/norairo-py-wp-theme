import Navbar from "@/components/Navbar";
import Container from "./Container";
import { useQueryMainMenu } from "@/queries/menus";
import { useQueryHeaderTheme } from "@/queries/theme-settings";
import useThemeMode from "@/hooks/useThemeMode";

const Header = () => {
  const [theme] = useThemeMode();
  const { data } = useQueryMainMenu();
  const { data: logoData } = useQueryHeaderTheme();

  const logoLink = logoData?.norairoTheme.norairoThemeSettings.logo.node.guid;
  const darkLogoLink =
    logoData?.norairoTheme.norairoThemeSettings.darkLogo.node.guid;
  return (
    <header className="shadow-md bg-white/85 dark:bg-slate-950 h-20 w-full max-w-screen">
      <Container className="h-full">
        {data && (
          <Navbar
            logo={theme === "light" ? logoLink : darkLogoLink}
            dataItems={data}
          />
        )}
      </Container>
    </header>
  );
};

export default Header;
