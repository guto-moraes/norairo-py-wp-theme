import type { ButtonHTMLAttributes, ReactNode } from "react";
import React from "react";
import cn from "@/utils/cn";

export interface IButton {
  children: ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, IButton & ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
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
  }
);

export default Button;
