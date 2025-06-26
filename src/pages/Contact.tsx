import Main from "@/layouts/Main";
import Container from "@/layouts/Container";
import Title from "@/components/Title";
import Button from "@/components/Button";
import cn from "@/utils/cn";

const Contact = () => {
  return (
    <Main className="py-10 xl:py-16">
      <Container>
        <Title title="Fale Conosco" className="uppercase" />

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center gap-8 sm:my-auto lg:my-0">
            <h2 className="text-xl lg:text-2xl xl:text-3xl text-primary-600 font-black">
              Queremos saber sua opinião!
            </h2>
            <p className="text-secondary-800 text-justify hyphens-auto">
              Ao longo do desenvolvimento do Projeto{" "}
              <strong className="text-primary-700">Ofícios da Guerra</strong>{" "}
              nos deparamos com muitos desafios mas, ainda assim, ao seu final,
              cremos que conseguimos apresentar as transcrições produzidas
              durante a{" "}
              <strong className="text-primary-700">
                Guerra da Tríplice Aliança contra o Paraguai
              </strong>{" "}
              com o mais alto nível de fidedignidade.
            </p>
            <p className="text-gray-800 text-justify hyphens-auto">
              Ainda assim, queremos saber a sua opinião sobre o conteúdo que
              aqui disponibilizamos e eventuais melhorias que poderemos
              implementar no futuro.
            </p>
            <p className="text-gray-800 text-justify hyphens-auto">
              Antecipamos nossos agradecimentos por sua contribuição.
            </p>
          </div>
          <form className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label
                className="text-xs text-secondary-700 font-bold uppercase"
                htmlFor="fullName"
              >
                Nome Completo
              </label>
              <input
                type="text"
                name="fullName"
                title="Informe seu nome"
                autoFocus
                className="shadow-md rounded-sm bg-white/85 p-2 focus:outline-primary-500 focus:outline-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="text-xs text-secondary-700 font-bold uppercase"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                title="informe seu e-mail"
                className="shadow-md rounded-sm bg-white/85 p-2 focus:outline-primary-500 focus:outline-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="text-xs text-secondary-700 font-bold uppercase"
                htmlFor="message"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                title="Escreva sua mensagem"
                className="resize-none shadow-md rounded-sm bg-white/70 p-2 h-48 focus:outline-primary-500 focus:outline-2"
              />
            </div>
            <Button
              type="submit"
              className={cn(
                "rounded-sm bg-primary-700 hover:bg-secondary-600 py-3.5 px-4 text-sm",
                "uppercase text-white font-bold transition-colors duration-300"
              )}
            >
              Enviar Mensagem
            </Button>
          </form>
        </section>
      </Container>
    </Main>
  );
};

export default Contact;
