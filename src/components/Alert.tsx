import cn from "@/utils/cn";

const Alert = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      role="alert"
      className={cn(
        "rounded-md border-2 border-amber-600 bg-white/80 py-4",
        "px-8 mt-8 w-max max-w-full mx-auto flex justify-center items-center gap-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Alert;
