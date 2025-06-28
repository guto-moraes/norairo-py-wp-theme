import Container from "@/layouts/Container";
import Main from "@/layouts/Main";
import cn from "@/utils/cn";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <Main className="dark:bg-primary-900 py-10 xl:py-16 h-full">
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
              "focus:outline-none focus:ring-primary-300 font-medium rounded-lg uppercase",
              "dark:bg-lime-400 dark:text-primary-950 dark:focus:ring-primary-900 my-4",
              "text-center py-2.5 px-5 dark:hover:bg-stone-300 transition-colors duration-300"
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
