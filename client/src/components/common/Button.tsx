import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

interface Props {
  variant?: "primary" | "action";
}

export default function Button({
  className,
  children,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & Props) {
  return (
    <button
      className={cn(
        classes[variant],
        "text-16 font-medium rounded-6",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

const classes = {
  primary: "bg-black text-white disabled:bg-gray200 py-14",
  action: "py-6 px-8 roun ded-10 bg-main/10 text-main text-14 font-medium",
};
