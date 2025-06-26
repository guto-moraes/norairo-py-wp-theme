import { useState, type MouseEvent } from "react";
import { Link } from "react-router";
import Button from "./Button";
import { Icons } from "./icons";
import type { memberTypes, socialTypes } from "@/types/team";
import cn from "@/utils/cn";
import SocialMediaIcon from "./SocialMediaIcon";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const CoordinatorTeam = ({ member }: { member: memberTypes }) => {
  const [copied, setCopied] = useState(false);

  const handleClipboard = (event: MouseEvent<HTMLButtonElement>) => {
    const email = event.currentTarget.dataset.email;
    if (email) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1750);
    }
  };

  return (
    <>
      <img
        src={`${BASE_URL}${member.featuredImage.node.filePath}`}
        alt={`Foto de ${member.title}`}
        className="rounded-xl aspect-square object-cover md:h-80 lg:col-span-1 max-w-full"
      />
      <div className="relative flex flex-col gap-4 md:max-h-80 md:overflow-y-auto lg:col-span-2 xl:col-span-3">
        <h2 className="text-xl text-primary-600 font-bold leading-5 xl:leading-6 mt-4 xl:mt-0">
          {member.title}
        </h2>
        <div
          className="[&_p:not(:last-of-type)]:mb-6 text-sm lg:text-base text-secondary-800 text-justify hyphens-auto"
          dangerouslySetInnerHTML={{ __html: member.content }}
        />

        <div className="w-full xl:absolute xl:bottom-0 xl:right-0 flex items-center justify-end gap-2 overflow-hidden">
          {member.info.e_mail && (
            <Button
              title={`Copiar endereço de e-mail de ${member.title}`}
              className="px-0 relative group focus:outline-none"
              data-email={member.info.e_mail}
              onClick={handleClipboard}
            >
              <Icons.Mail
                className={cn(
                  "size-7 fill-secondary-700 group-hover:fill-sky-600 scale-100",
                  "group-hover:scale-115 transiton-all duration-300 pointer-events-none"
                )}
              />
              <span
                className={cn(
                  "rounded-xs bg-sky-600 py-0.5 px-1.5 text-white text-[0.625rem] uppercase",
                  "font-bold absolute top-1/2 -left-28 -translate-y-1/2 w-max transition-transform duration-300",
                  copied ? "scale-100" : "scale-0"
                )}
              >
                E-mail copiado!
              </span>
            </Button>
          )}
          {member.info.socialMedias !== null &&
            member.info.socialMedias.map((media: socialTypes) => {
              const titleText =
                media.socialMediaName === "Instagram"
                  ? `Seguir ${member.title} no Instagram`
                  : `Ver Currículo Lattes de ${member.title}`;
              return (
                <Link
                  key={Math.random()}
                  to={media.socialMediaURL}
                  title={titleText}
                  target="_blank"
                  className="group"
                >
                  <SocialMediaIcon mediaName={media.socialMediaName} />
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CoordinatorTeam;
