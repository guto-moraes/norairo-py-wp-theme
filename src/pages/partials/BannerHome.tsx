import { TextEffect } from "@/components/motion/text-effect";
import type { homePageThemeTypes } from "@/types/theme-settings";
import cn from "@/utils/cn";

type BannerHomeProps = {
  banner: homePageThemeTypes;
};

const BannerHome = ({ banner }: BannerHomeProps) => {
  const bannerImage =
    banner?.norairoTheme.norairoThemeSettings.bannerImage.node.guid;
  const title = banner.norairoTheme.norairoThemeSettings.bannerTitle.split(" ");
  const description = banner.norairoTheme.norairoThemeSettings
    .bannerDescription as string;

  return (
    <section
      style={{ backgroundImage: `url(${bannerImage})` }}
      className="w-full h-72 lg:h-96 xl:h-[700px] bg-cover bg-center bg-no-repeat"
    >
      <div className="bg-primary-950/90 dark:bg-[#0B0C14]/92.5 w-full h-full grid place-content-center">
        <div
          className={cn(
            "bg-primary-950/60 dark:bg-[#0B0C14]/70 p-6 xl:py-12 xl:px-10 flex flex-col sm:flex-row justify-center",
            "max-sm:divide-y sm:divide-x xl:justify-between items-center gap-2 min-[425px]:gap-3",
            "lg:gap-8 w-full sm:w-[600px] lg:w-[850px] xl:w-[900px] h-full"
          )}
        >
          <h1
            className={cn(
              "text-white text-center min-[375px]:pb-3 sm:pb-0 lg:pr-8 my-auto",
              "leading-4 w-max min-[375px]:w-64 lg:w-[328.5px] xl:w-1/2"
            )}
          >
            <TextEffect
              preset="fade-in-blur"
              speedReveal={1.1}
              speedSegment={0.3}
              delay={1.4}
              className="text-2xl lg:text-5xl font-extralight block uppercase tracking-widest"
            >
              {`${title[0] as string} ${title[1] as string}`}
            </TextEffect>{" "}
            <TextEffect
              preset="fade-in-blur"
              speedReveal={1.1}
              speedSegment={0.3}
              delay={1.4}
              className="text-lime-500 dark:text-amber-300 text-4xl lg:text-7xl font-black uppercase tracking-wider"
            >
              {title[2] as string}
            </TextEffect>
          </h1>
          <TextEffect
            per="char"
            preset="fade"
            delay={1.5}
            speedSegment={0.5}
            className={cn(
              "text-base lg:text-2xl text-white text-center xl:text-balance font-extralight",
              "w-48 min-[375px]:w-64 min-[475px]:w-96 lg:w-[418.5px] lg:my-auto"
            )}
          >
            {description}
          </TextEffect>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
