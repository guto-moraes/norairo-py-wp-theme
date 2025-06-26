import cn from "@/utils/cn";

const Article = ({ content }: { content: string }) => {
  return (
    <article
      className={cn(
        "max-w-full text-justify lg:text-lg hyphens-auto prose text-secondary-800",
        "prose-a:text-sky-600 duration-300 transition-all prose-a:hover:text-secondary-500",
        "prose-figcaption:mt-0 prose-figure:max-w-full prose-figcaption:text-[10px]",
        "min-[375px]:prose-figcaption:text-xs prose-figcaption:font-semibold prose-figcaption:text-white",
        "prose-figcaption:p-1.5 prose-figcaption:bg-gray-950/55 prose-figcaption:absolute prose-image:max-w-full",
        "prose-figcaption:bottom-0 prose-figcaption:left-0 prose-figure:relative prose-h2:text-primary-700",
        "prose-strong:text-secondary-800 [&_p.note]:pt-2.5 [&_p.note]:border-t",
        "[&_p.note]:border-secondary-300 max-lg:prose-h2:text-left [&_img]:max-w-full"
      )}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default Article;
