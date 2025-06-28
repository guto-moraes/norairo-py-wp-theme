import { useState, type MouseEvent } from "react";
import { Link } from "react-router";
import type { memberTypes } from "@/types/team";
import Button from "./Button";
import { Icons } from "./icons";
import cn from "@/utils/cn";
import Tooltip from "./Tooltip";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const MembersTeam = ({ member }: { member: memberTypes }) => {
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
    <div className="relative shadow-lg rounded-2xl bg-white/55 dark:bg-[#1c1e26] p-4 flex flex-col gap-4">
      <div className="h-auto xl:h-96 bg-cover bg-center">
        <img
          src={`${BASE_URL}${member.featuredImage.node.filePath}`}
          alt={member.title}
          className="rounded-xl aspect-square object-cover h-auto xl:h-96 w-full"
        />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-xl text-primary-600 dark:text-amber-300/75 font-bold leading-5 xl:leading-6">
          {member.title}
        </h2>
        <div
          className={cn(
            "[&_p:not(:last-of-type)]:mb-6 text-sm lg:text-base text-justify",
            "text-secondary-800 dark:text-white hyphens-auto"
          )}
          dangerouslySetInnerHTML={{ __html: member.content }}
        />
        <div className="flex justify-end items-center gap-1">
          {member.info.e_mail !== null && (
            <Button
              className="px-0 relative group/email focus:appearance-none focus:outline-none focus:ring-0"
              data-email={member.info.e_mail}
              onClick={handleClipboard}
            >
              <Icons.Mail
                className={cn(
                  "size-7 fill-secondary-700 dark:fill-white group-hover:fill-sky-600",
                  "scale-100 group-hover:scale-115 transiton-all duration-300 pointer-events-none"
                )}
              />
              <span
                className={cn(
                  "rounded-xs bg-sky-600 py-0.5 px-1.5 text-white text-[0.625rem] uppercase z-30",
                  "absolute -top-3 left-1/2 -translate-x-1/2 w-max transition-transform duration-300",
                  copied ? "scale-100" : "scale-0"
                )}
              >
                E-mail copiado!
              </span>
              <Tooltip
                text={`Copiar e-mail de ${member.title}`}
                className="top-2.5 -left-32 px-1.5 py-1 group-hover/email:visible group-hover/email:scale-100 z-20"
              />
            </Button>
          )}
          {member.info.socialMedias !== null &&
            member.info.socialMedias[0].socialMediaName === "Instagram" && (
              <Link
                to={member.info.socialMedias[0].socialMediaURL}
                title={`Seguir ${member.title} no Instagram`}
                target="_blank"
                className="group"
              >
                <Icons.Instagram
                  className={cn(
                    "size-7 fill-secondary-700 dark:fill-white group-hover:fill-orange-600 scale-100",
                    "group-hover:scale-115 transiton-all duration-300 pointer-events-none"
                  )}
                />
              </Link>
            )}
        </div>
      </div>
    </div>
  );
};

export default MembersTeam;
