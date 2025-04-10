import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

interface Props {
  variant?: "primary";
}

export default function Button({
  className,
  children,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & Props) {
  return (
    <button
      className={cn(classes[variant], "text-16 font-medium rounded-6 py-14", className)}
      {...props}
    >
      {children}
    </button>
  );
}

const classes = {
  primary: "bg-black text-white disabled:bg-gray200",
};
