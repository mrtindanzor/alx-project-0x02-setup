import { type ButtonProps } from "@/interfaces";
import { cva } from "class-variance-authority";

export const ButtonVariants = cva(
  "h-fit w-fit flex outline transition-background cursor-pointer duration-75 ease-in-out",
  {
    variants: {
      size: {
        small: "px-2 py-1 text-sm rounded",
        meduim: "px-4 py-1.5 text-base rounded-md",
        large: "px-6 py-2 text-lg rounded-lg",
      },
      variant: {
        default:
          "text-sky-600 hover:text-white outline-sky-600 bg-sky-50 hover:bg-slate-800",
        outline: "text-sky-600 outline-sky-600 bg-transparent hover:bg-sky-50",
      },
    },
    defaultVariants: {
      size: "meduim",
      variant: "default",
    },
  }
);

export default function Button({
  variant,
  size,
  shape,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={ButtonVariants({
        variant,
        size,
        className: `${shape} ${className}`,
      })}
    />
  );
}
