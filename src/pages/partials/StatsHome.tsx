import Container from "@/layouts/Container";
import TextStats from "@/components/TextStats";
import { useAllLetters } from "@/queries/allLettersQuery";
import type {
  homePageThemeTypes,
  sectionOneDetails,
} from "@/types/theme-settings";
import cn from "@/utils/cn";

type StatsHomeProps = {
  stats: homePageThemeTypes;
};

const StatsHome = ({ stats }: StatsHomeProps) => {
  const { data: totalData } = useAllLetters();

  return (
    <section className="py-8 md:py-16 xl:py-24 w-full max-w-screen bg-white dark:bg-primary-950">
      <Container className="flex flex-col gap-6 justify-center items-center">
        <div className="w-full">
          <h2 className={cn(
            "mb-2 text-center text-2xl sm:text-3xl lg:text-4xl",
            "text-primary-600 dark:text-sky-500 font-bold uppercase"
          )}>
            {stats?.norairoTheme.norairoThemeSettings.titleSectionOne}
          </h2>
          <p className="text-center text-secondary-600 dark:text-white md:text-lg font-medium mx-auto max-w-screen">
            {stats?.norairoTheme.norairoThemeSettings.subtitleSectionOne}
          </p>
        </div>
        {stats && (
          <div className="w-full grid grid-cols-1 min-[475px]:grid-cols-3">
            {stats.norairoTheme.norairoThemeSettings.sectionOneDetails.map(
              (item: sectionOneDetails, idx: number) => {
                if (idx === 0) {
                  return (
                    <div key={idx} className="p-5 lg:pt-8 lg:px-8 text-center">
                      {totalData && (
                        <TextStats
                          value={
                            totalData?.oficios.pageInfo.offsetPagination.total
                          }
                        />
                      )}
                      <p className="text-base text-secondary-600 dark:text-white font-bold uppercase">
                        {item.text}
                      </p>
                    </div>
                  );
                }
                return (
                  <div key={idx} className="p-5 lg:pt-8 lg:px-8 text-center">
                    <TextStats value={item.value} />
                    <p className="text-base text-secondary-600 dark:text-white font-bold uppercase">
                      {item.text}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        )}
      </Container>
    </section>
  );
};

export default StatsHome;
