import type { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "@/utils/cn";

export interface IButton {
  children: ReactNode;
  className?: string;
}
const Button = ({
  children,
  className,
  ...props
}: IButton & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      className={cn(
        "rounded-md p-2 cursor-pointer transition-colors duration-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
