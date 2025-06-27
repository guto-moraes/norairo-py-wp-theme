import { Link } from "react-router";
import Container from "@/layouts/Container";
import cn from "@/utils/cn";

const CNPqSectionHome = ({ cnpq }: { cnpq: string; }) => {

  return (
    <section className="bg-secondary-200/20 dark:bg-primary-950 py-8 sm:py-16 xl:py-24 w-full">
      <Container className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <figure className="w-max mx-auto order-2 sm:order-1">
          <Link
            to="https://www.gov.br/cnpq/pt-br"
            title="Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq)"
            target="_blank"
          >
            <img
              src={cnpq}
              alt="Logo do CNPq"
              className="w-52 lg:w-2xs max-w-full mx-auto"
            />
          </Link>
        </figure>
        <p className={cn(
          "my-auto text-base sm:text-lg lg:text-xl text-secondary-700",
          "dark:text-white font-medium text-balance sm:order-2"
        )}>
          A realização deste projeto foi possível graças ao apoio financeiro
          recebido do{" "}
          <Link
            to="https://www.gov.br/cnpq/pt-br"
            title="Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq)"
            target="_blank"
            className="text-lattes-500 hover:text-secondary-500 transition-colors duration-300"
          >
            Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq)
          </Link>
          .
        </p>
      </Container>
    </section>
  );
};

export default CNPqSectionHome;
