import { useEffect } from "react";
import Main from "@/layouts/Main";
import BannerHome from "./partials/BannerHome";
import StatsHome from "./partials/StatsHome";
import BeyondHome from "./partials/BeyondHome";
import CNPqSectionHome from "./partials/CNPqSectionHome";
import { useQueryHomePageTheme } from "@/queries/theme-settings";
import DataLoading from "@/components/DataLoading";
import Errors from "@/components/Errors";
import Presentation from "./partials/Presentation";

const Home = () => {
  const heading =
    "Ofícios da Guerra | Transcrição de documentos da Guerra da Tríplice Aliança contra o Paraguai";

  useEffect(() => {
    document.title = heading;
  }, []);

  const { data, isLoading, isError, error } = useQueryHomePageTheme();

  if (isLoading) return <DataLoading />;
  if (isError) return <Errors message={error.message} />;

  const cnpqLogo = data
    ? data.norairoTheme.norairoThemeSettings.cpnqLogo.node.guid
    : "";

  return (
    <Main className="py-0 xl:py-0">
      {data && (
        <>
          <BannerHome banner={data} />
          <Presentation
            title={data.norairoTheme.norairoThemeSettings.presentationTitle}
            text={data.norairoTheme.norairoThemeSettings.presentationText}
          />
          <StatsHome stats={data} />
          <BeyondHome beyond={data} />
          <CNPqSectionHome cnpq={cnpqLogo} />
        </>
      )}
    </Main>
  );
};

export default Home;
