import Container from "@/layouts/Container";
import Main from "@/layouts/Main";
import cn from "@/utils/cn";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <Main className="py-10 xl:py-16 h-full">
      <Container className="h-full grid place-content-center">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Ocorreu algum problema.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-300">
            Desculpe-nos, mas não encontramos a página que você procura.
          </p>
          <Link
            to="/"
            className={cn(
              "inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 dark:text-sm",
              "focus:outline-none focus:ring-primary-300 font-medium rounded-lg uppercase text-center py-2.5",
              "dark:bg-amber-300/75 dark:text-primary-950 dark:focus:ring-primary-900 px-5 my-4",
              "dark:hover:text-white/75 dark:hover:bg-primary-500 transition-colors duration-300"
            )}
          >
            Voltar para a Página Inicial
          </Link>
        </div>
      </Container>
    </Main>
  );
};

export default NotFound;
