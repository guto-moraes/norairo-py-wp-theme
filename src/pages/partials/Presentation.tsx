import Container from "@/layouts/Container";
import cn from "@/utils/cn";

interface IPresentation {
  title: string;
  text: string;
}

const Presentation = ({ title, text }: IPresentation) => {
  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-secondary-100/60">
      <Container>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary-600 text-center font-black uppercase mb-8">
          {title}
        </h2>
        <div
          className={cn(
            "text-sm sm:text-base lg:text-lg text-secondary-800 text-justify hyphens-auto",
            "max-w-full lg:max-w-2xl xl:max-w-5xl mx-auto flex flex-col gap-4"
          )}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </Container>
    </section>
  );
};

export default Presentation;
