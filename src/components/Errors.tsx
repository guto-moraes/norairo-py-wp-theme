import { Icons } from "@/components/icons";
import Container from "@/layouts/Container";
import cn from "@/utils/cn";

const Errors = ({ message }: { message: string }) => {
  return (
    <Container className="py-10 xl:py-16 h-full w-full grid place-content-center">
      <div className="flex flex-col justify-center items-center gap-y-4">
        <div
          className={cn(
            "flex size-18 animate-bounce items-center justify-center rounded-full bg-white",
            "p-2 ring-1 ring-gray-900/5 dark:bg-white/5 dark:ring-white/20"
          )}
        >
          <Icons.Error className="size-16 text-rose-500" />
        </div>
        <p className="text-xl text-primary-800 dark:text-white font-medium">
          Erro: {JSON.stringify(message)}
        </p>
      </div>
    </Container>
  );
};

export default Errors;
