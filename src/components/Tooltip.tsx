import cn from "@/utils/cn";

const Tooltip = ({ text, className }: { text: string, className?: string }) => {
  return (
    <div
      className={cn(
        "absolute -top-7 left-1/2 -translate-x-1/2 invisible  w-max",
        "rounded-xs bg-secondary-800 px-1.5 text-[0.625rem] text-white font-semibold",
        "uppercase transtition-transform duration-300 scale-0",
        className
      )}
    >
      {text}
    </div>
  );
};

export default Tooltip;
