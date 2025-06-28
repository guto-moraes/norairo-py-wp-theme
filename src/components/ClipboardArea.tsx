import { useRef, useState } from "react";
import Button from "./Button";
import { Icons } from "./icons";
import cn from "@/utils/cn";
import Tooltip from "./Tooltip";

const ClipboardArea = ({ children }: { children: React.ReactNode }) => {
  const [copied, setCopied] = useState(false);
  const citation = useRef<HTMLParagraphElement>(null);

  const clipboard = () => {
    const text = citation?.current?.textContent;

    if (text) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1750);
    }
  };

  return (
    <div className="relative rounded-md drop-shadow-xs bg-white/65 p-2.5 dark:bg-[#1c1e26]">
      <p
        className={cn(
          "rounded-xs bg-sky-600 text-[0.625rem] text-white font-semibold uppercase py-0.5 px-1.5 w-max",
          "absolute -top-6 left-0 transition-all duration-300 ease-in-out origin-left",
          copied ? "scale-100" : "scale-0"
        )}
      >
        Citação copiada!
      </p>
      <Button
        title="Copiar citação"
        arial-label="Copiar citação"
        className={cn(
          "absolute -top-12 right-0 p-1.5 bg-secondary-200/40 shadow-inner rounded-full",
          "hover:bg-secondary-500 transition-colors duration-300 border border-primary-100",
          "hover:border-transparent text-secondary-700 hover:text-white group/copy dark:border-0",
          "dark:text-amber-300/75 dark:hover:bg-amber-300/75 dark:bg-[#1c1e26] dark:hover:text-[#1c1e26]"
        )}
        onClick={clipboard}
      >
        <Icons.Clipboard className="size-4.5 pointer-events-none" />
        <Tooltip
          text="Copiar Citação"
          className="py-1 group-hover/copy:visible group-hover/copy:scale-100"
        />
      </Button>
      <p
        ref={citation}
        className="text-xs text-secondary-900 dark:text-white/75 hyphens-auto max-w-full overflow-hidden text-clip"
      >
        {children}
      </p>
    </div>
  );
};

export default ClipboardArea;
