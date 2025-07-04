import { Link } from "react-router";
import Container from "@/layouts/Container";
import type { homePageThemeTypes } from "@/types/theme-settings";

type fundingAndPartnersTypes = {
  partners: homePageThemeTypes;
};

const FoundingAndPartners = ({ partners }: fundingAndPartnersTypes) => {
  return (
    <section className="bg-secondary-200/20 dark:bg-[#0B0C14]/25 py-8 sm:py-16 xl:py-24 w-full">
      <Container className="max-w-5xl grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-5 gap-8">
        <div className="h-full md:col-span-2 grid grid-rows-5 gap-4">
          <h2 className="row-span-1 text-secondary-800 dark:text-amber-300 font-bold">
            Apoio Financeiro
          </h2>
          <div className="row-span-4 ">
            <figure className="h-full grid place-content-start-safe content-center-safe">
              <Link
                to={partners?.norairoTheme.norairoThemeSettings.cpnqUrl}
                title={
                  partners?.norairoTheme.norairoThemeSettings.cpnqLogo.node
                    .altText
                }
              >
                <img
                  src={
                    partners?.norairoTheme.norairoThemeSettings.cpnqLogo.node
                      .guid
                  }
                  alt={
                    partners?.norairoTheme.norairoThemeSettings.cpnqLogo.node
                      .altText
                  }
                  className="w-72 max-w-full dark:hidden"
                />
                <img
                  src={
                    partners?.norairoTheme.norairoThemeSettings.darkLogoCpnq
                      .node.guid
                  }
                  alt={
                    partners?.norairoTheme.norairoThemeSettings.cpnqLogo.node
                      .altText
                  }
                  className="w-72 max-w-full hidden dark:block"
                />
              </Link>
            </figure>
          </div>
        </div>
        <div className="h-full md:col-span-3 grid grid-rows-5 gap-4">
          <h2 className="row-span-1 text-secondary-800 dark:text-amber-300 font-bold">
            Parceiros
          </h2>
          <div className="h-full row-span-4 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-8">
            <figure className="grid place-content-center">
              <Link
                to={partners?.norairoTheme.norairoThemeSettings.ifmtJuinaUrl}
                title={
                  partners?.norairoTheme.norairoThemeSettings.cpnqLogo.node
                    .altText
                }
              >
                <img
                  src={
                    partners?.norairoTheme.norairoThemeSettings.ifmtJuinaLogo
                      .node.guid
                  }
                  alt={
                    partners?.norairoTheme.norairoThemeSettings.cpnqLogo.node
                      .altText
                  }
                  className="w-full max-w-full dark:hidden"
                />
                <img
                  src={
                    partners?.norairoTheme.norairoThemeSettings
                      .darkLogoIfmtJuina.node.guid
                  }
                  alt={
                    partners?.norairoTheme.norairoThemeSettings.cpnqLogo.node
                      .altText
                  }
                  className="w-full max-w-full hidden dark:block"
                />
              </Link>
            </figure>
            <figure className="grid place-content-center">
              <Link
                to={partners?.norairoTheme.norairoThemeSettings.apmtUrl}
                title={
                  partners?.norairoTheme.norairoThemeSettings.apmtLogo.node
                    .altText
                }
              >
                <img
                  src={
                    partners?.norairoTheme.norairoThemeSettings.apmtLogo.node
                      .guid
                  }
                  alt={
                    partners?.norairoTheme.norairoThemeSettings.apmtLogo.node
                      .altText
                  }
                  className="w-full max-w-full dark:hidden"
                />
                <img
                  src={
                    partners?.norairoTheme.norairoThemeSettings.darkLogoApmt
                      .node.guid
                  }
                  alt={
                    partners?.norairoTheme.norairoThemeSettings.apmtLogo.node
                      .altText
                  }
                  className="w-full max-w-full hidden dark:block"
                />
              </Link>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FoundingAndPartners;
