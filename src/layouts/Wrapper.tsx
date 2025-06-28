import cn from "@/utils/cn";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "relative bg-[#f5f7fa] dark:bg-[#16161c] w-full max-w-full h-full xl:min-h-screen grid overflow-hidden",
        "grid-rows-[5rem_auto_auto] xl:grid-rows-[5rem_minmax(calc(100vh_-_19.5rem),1fr)_14.5rem]"
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;