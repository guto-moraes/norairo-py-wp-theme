import Container from "@/layouts/Container";
import type { homePageThemeTypes } from "@/types/theme-settings";
import cn from "@/utils/cn";

type BeyondHomeProps = {
  beyond: homePageThemeTypes;
};

const BeyondHome = ({ beyond }: BeyondHomeProps) => {
  return (
    <section className="py-8 sm:py-16 xl:py-24 w-full">
      <Container className="grid grid-cols-6 gap-8">
        <div className="col-span-6 sm:col-span-3 w-full flex flex-col gap-4 sm:my-auto">
          <h2 className="text-3xl md:text-4xl text-primary-600 text-center sm:text-left font-bold uppercase">
            {beyond?.norairoTheme.norairoThemeSettings.titleSectionTwo}
          </h2>
          <p
            className={cn(
              "text-md lg:text-lg sm:text-xl text-secondary-700 font-medium",
              "&_strong]:text-primary-500 text-balance [&_strong]:font-extrabold"
            )}
            dangerouslySetInnerHTML={{
              __html: beyond
                ? beyond?.norairoTheme.norairoThemeSettings.textSectionTwo
                : "",
            }}
          />
        </div>
        <div className="col-span-6 sm:col-span-3 w-full grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-8">
          <figure className="bg-cover bg-center rounded-lg">
            <img
              src={
                beyond?.norairoTheme.norairoThemeSettings.sectionTwoImageOne
                  .node.guid
              }
              alt="Ofício 01"
              className={cn(
                "h-full w-full object-cover rounded-lg transition-transform",
                "duration-300 scale-100 hover:scale-105 xl:hover:scale-115 lg:mask-l-from-50%"
              )}
            />
          </figure>
          <figure className="bg-cover bg-center rounded-lg sm:hidden lg:block">
            <img
              src={
                beyond?.norairoTheme.norairoThemeSettings.sectionTwoImageTwo
                  .node.guid
              }
              alt="Ofício 02"
              className={cn(
                "h-full w-full object-cover rounded-lg transition-transform",
                "duration-300 scale-100 hover:scale-105 xl:hover:scale-115"
              )}
            />
          </figure>
        </div>
      </Container>
    </section>
  );
};

export default BeyondHome;
