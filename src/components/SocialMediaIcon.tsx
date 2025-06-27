import { Icons } from "@/components/icons";
import cn from "@/utils/cn";

interface SocialMediaIconProps {
  mediaName: string;
}

const SocialMediaIcon = ({ mediaName }: SocialMediaIconProps) => {
  switch (mediaName) {
    case "Facebook":
      return (
        <Icons.Facebook
          className={cn(
            "size-7 fill-secondary-700 dark:fill-white group-hover:fill-sky-600 scale-100",
            "group-hover:scale-115 transiton-all duration-300 pointer-events-none"
          )}
        />
      );
    case "Instagram":
      return (
        <Icons.Instagram
          className={cn(
            "size-7 fill-secondary-700 dark:fill-white group-hover:fill-orange-600 scale-100",
            "group-hover:scale-115 transiton-all duration-300 pointer-events-none"
          )}
        />
      );
    case "Lattes":
      return (
        <Icons.Lattes
          className={cn(
            "size-7 fill-secondary-700 dark:fill-white pointer-events-none",
            "group-hover:fill-lattes-500 dark:group-hover:fill-sky-400",
            "scale-100 group-hover:scale-115 transiton-all duration-300"
          )}
        />
      );
  }
};

export default SocialMediaIcon;
