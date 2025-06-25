import cn from "@/utils/cn";

const Main = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <main className={cn("w-full", className)}>{children}</main>;
};

export default Main;