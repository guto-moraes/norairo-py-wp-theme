import { useEffect } from "react";
import Button from "./Button";
import { Icons } from "./icons";
import PreviewDocument from "./PreviewDocument";
import cn from "@/utils/cn";

interface Modal {
  isModal: string | null;
  letterURL: string;
  setIsModal: (value: null) => void;
}

const Modal = ({ isModal, letterURL, setIsModal }: Modal) => {
  useEffect(() => {
    const handleEscCloseDropdown = (event: KeyboardEvent) => {
      if (event && isModal !== null && event.key === "Escape") {
        setIsModal(null);
      }
    };

    document.addEventListener("keydown", handleEscCloseDropdown);
    return () => {
      document.removeEventListener("keydown", handleEscCloseDropdown);
    };
  }, [isModal, setIsModal]);

  return (
    <dialog
      className={cn(
        "bg-black/85 fixed top-0 left-0 h-screen w-full ease-in-out",
        "transition-transform duration-300 grid place-content-center",
        isModal ? "scale-100" : "scale-0"
      )}
    >
      <div className="rounded-2xl bg-white h-[650px] w-[900px] relative">
        <Button
          title="Fechar"
          className={cn(
            "rounded-full bg-sky-400 hover:bg-black/70 p-1.5 transition-colors",
            "duration-300 grid place-content-center absolute -top-3 -right-3"
          )}
          onClick={() => setIsModal(null)}
        >
          <Icons.Close className="size-6 fill-white pointer-events-none" />
        </Button>
        <PreviewDocument url={letterURL} />
      </div>
    </dialog>
  );
};

export default Modal;
