import cn from "@/utils/cn";
import { useEffect } from "react";

const Title = ({
  className,
  title,
  subtitle,
  category,
}: {
  className?: string;
  title: string;
  subtitle?: string;
  category?: string;
}) => {

  const heading = "Ofícios da Guerra";

  useEffect(() => {
    if (category) {
      document.title = `${title} ${category} - ${heading}`;
    } else if (title) {
      document.title = `${title} - ${heading}`;
    } else {
      document.title = heading;
    }
  }, [title, category]);

  if (subtitle) {
    return (
      <hgroup className="max-w-full mx-auto mb-8 xl:mb-16">
        <h1
          className={cn(
            "text-2xl xl:text-4xl text-primary-700 dark:text-amber-300/75 font-bold mb-8 xl:mb-16",
            className
          )}
        >
          {title}
        </h1>
        <h2 className="text-xl text-secondary-700 font-bold">{subtitle}</h2>
      </hgroup>
    );
  }

  if (category) {
    return (
      <h1
        className={cn(
          "text-2xl xl:text-4xl text-primary-700 dark:text-amber-300/75 font-bold mb-8 xl:mb-16",
          className
        )}
      >
        {title} <span className="text-secondary-600 dark:text-secondary-200">{category}</span>
      </h1>
    );
  }

  return (
    <h1
      className={cn(
        "text-2xl xl:text-4xl text-primary-700 dark:text-amber-300/75 font-bold mb-8 xl:mb-16",
        className
      )}
    >
      {title}
    </h1>
  );
};

export default Title;
