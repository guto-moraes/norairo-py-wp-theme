import cn from "@/utils/cn";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("px-4 xl:px-0 w-full max-w-7xl mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
