import cn from "@/utils/cn";

const TextStats = ({ value }: { value: string | number }) => {
  return (
    <h2
      className={cn(
        "text-6xl min-[375px]:text-7xl min-[475px]:text-6xl sm:text-7xl lg:text-8xl",
        "text-lime-500 text-shadow-sm text-shadow-primary-700 font-bold"
      )}
    >
      {value}
    </h2>
  );
};

export default TextStats;
