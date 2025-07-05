import { useEffect, useRef, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import Main from "@/layouts/Main";
import Container from "@/layouts/Container";
import Title from "@/components/Title";
import Button from "@/components/Button";
import cn from "@/utils/cn";
import Alert from "@/components/Alert";
import { CheckCheck } from "lucide-react";
import { useQueryContactPageText } from "@/queries/theme-settings";
import DataLoading from "@/components/DataLoading";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const FormFieldsSchema = z.object({
  subject: z.enum(["Dúvida", "Sugestão", "Contribuição", "Contato Geral"]),
  fullName: z
    .string()
    .nonempty("O campo nome completo é de preeenchimento obrigatório.")
    .min(10, "O campo nome completo precisa ter, no mínimo, 10 caracteres."),
  email: z
    .string()
    .email("Formato de e-mail inválido.")
    .nonempty("O campo e-mail é de preeenchimento obrigatório.")
    .min(12, "O campo e-mail precisa ter, no mínimo, 10 caracteres."),
  userMessage: z
    .string()
    .nonempty("O campo mensagem é de preeenchimento obrigatório.")
    .min(10, "O campo mensagem deve ter no mínimo 500 caracteres."),
});

type FormFiedlsTypes = z.infer<typeof FormFieldsSchema>;

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const contactForm = useRef<HTMLFormElement | null>(null);

  const { data, isLoading } = useQueryContactPageText();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormFiedlsTypes>({
    resolver: zodResolver(FormFieldsSchema),
  });
  const onSubmit: SubmitHandler<FormFiedlsTypes> = async (
    data: FormFiedlsTypes
  ) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_subject: data.subject,
          user_email: data.email,
          user_full_name: data.fullName,
          user_message: data.userMessage,
        },
        PUBLIC_KEY
      );
      setSuccess(true);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful && contactForm.current && success) {
      contactForm.current.reset();
    }
    setTimeout(() => {
      setSuccess(false);
    }, 2250);
  }, [isSubmitSuccessful, contactForm, success]);

  if(isLoading) return <DataLoading />

  return (
    <Main className="py-10 xl:py-16 h-full">
      <Container>
        <Title title="Fale Conosco" className="uppercase" />

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:gap-16">
          <div className="flex flex-col justify-center gap-8 sm:my-auto lg:my-0">
            {isSubmitSuccessful && success && (
              <Alert className="py-2 w-full border-transparent bg-emerald-500 dark:bg-transparent dark:border-lime-600">
                <CheckCheck
                  className="stroke-white dark:stroke-lime-600"
                  size={32}
                />{" "}
                <p className="lg:text-lg xl:text-xl text-white font-medium">
                  Mensagem enviada com sucesso!
                </p>
              </Alert>
            )}
            <div 
              className={cn(
                "[&_h2]:text-xl [&_h2]:lg:text-2xl [&_h2]:xl:text-3xl [&_h2]:text-primary-600 [&_h2]:dark:text-sky-400",
                "[&_h2]:font-bold [&_p]:text-secondary-800 dark:[&_p]:text-white/85 [&_p>strong]:text-primary-700",
                "[&_p>strong]:dark:text-amber-300 flex flex-col justify-center gap-8 sm:my-auto lg:my-0"
              )}
              dangerouslySetInnerHTML={{ __html: data?.norairoTheme.norairoThemeSettings.contactText || "" }} 
            />
          </div>
          <form
            ref={contactForm}
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-6"
          >
            <div className="flex flex-col gap-1">
              <label
                className="text-xs text-secondary-700 dark:text-white font-bold uppercase"
                htmlFor="fullName"
              >
                Assunto:
              </label>
              <select
                title="Informe seu nome"
                autoFocus
                aria-invalid={errors.fullName ? "true" : "false"}
                defaultValue="Selecione um opção"
                className={cn(
                  "shadow-md rounded-sm bg-white/85 dark:bg-[#1c1e26] p-2 focus:outline-2  border border-gray-200",
                  "focus:outline-primary-500 dark:focus:outline-amber-300 dark:text-white/75",
                  "aria-[invalid]:focus:outline-rose-500 dark:aria-[invalid]:focus:outline-lime-400"
                )}
                {...register("subject")}
              >
                <option>Selecione um opção</option>
                <option value="Dúvida">Dúvida</option>
                <option value="Sugestão">Sugestão</option>
                <option value="Contribuição">Contribuição</option>
                <option value="Contato Geral">Contato Geral</option>
              </select>
              {errors.fullName && (
                <span className="text-rose-500">{errors.fullName.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="text-xs text-secondary-700 dark:text-white font-bold uppercase"
                htmlFor="fullName"
              >
                Nome Completo
              </label>
              <input
                type="text"
                title="Informe seu nome"
                aria-invalid={errors.fullName ? "true" : "false"}
                className={cn(
                  "shadow-md rounded-sm bg-white/85 dark:bg-[#1c1e26] p-2 focus:outline-2  border border-gray-200",
                  "focus:outline-primary-500 dark:focus:outline-amber-300 dark:text-white/75",
                  "aria-[invalid]:focus:outline-rose-500 dark:aria-[invalid]:focus:outline-lime-400"
                )}
                {...register("fullName")}
              />
              {errors.fullName && (
                <span className="text-rose-500">{errors.fullName.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="text-xs text-secondary-700 dark:text-white font-bold uppercase"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                title="informe seu e-mail"
                aria-invalid={errors.email ? "true" : "false"}
                className={cn(
                  "shadow-md rounded-sm bg-white/85 dark:bg-[#1c1e26] p-2 focus:outline-2 border border-gray-200",
                  "focus:outline-primary-500 dark:focus:outline-amber-300 dark:text-white/75",
                  "aria-[invalid]:focus:outline-rose-500 dark:aria-[invalid]:focus:outline-lime-400"
                )}
                {...register("email")}
              />
              {errors.email && (
                <span className="text-rose-500">{errors.email.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="text-xs text-secondary-700 dark:text-white font-bold uppercase"
                htmlFor="userMessage"
              >
                Mensagem
              </label>
              <textarea
                title="Escreva sua mensagem"
                aria-invalid={errors.userMessage ? "true" : "false"}
                className={cn(
                  "resize-none shadow-md rounded-sm bg-white/70 dark:bg-[#1c1e26] p-2 h-48 dark:text-white/75",
                  "focus:outline-2 focus:outline-primary-500 dark:focus:outline-amber-300 border border-gray-200",
                  "aria-[invalid]:focus:outline-rose-500 dark:aria-[invalid]:focus:outline-lime-400"
                )}
                {...register("userMessage")}
              />
              {errors.userMessage && (
                <span className="text-rose-500">
                  {errors.userMessage.message}
                </span>
              )}
            </div>
            <Button
              disabled={isSubmitting}
              type="submit"
              className={cn(
                "rounded-sm hover:bg-secondary-600 py-3.5 px-4 text-sm font-bold dark:hover:bg-[#1c1e26]",
                "uppercase dark:hover:text-white/75 dark:hover:bg-primary-500 transition-colors duration-300",
                isSubmitting
                  ? "bg-amber-300  text-stone-900"
                  : "bg-primary-700 dark:bg-amber-300 text-white dark:text-slate-950"
              )}
            >
              {isSubmitting ? "Enviando mensagem" : "Enviar Mensagem"}
            </Button>
          </form>
        </section>
      </Container>
    </Main>
  );
};

export default Contact;
