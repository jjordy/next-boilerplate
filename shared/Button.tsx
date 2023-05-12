import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: "submit" | "button" | "reset";
  variant?: "primary" | "danger";
}

const btnBaseClasses = [
  "flex",
  "items-center",
  "justify-center",
  "font-medium",
  "px-3",
  "py-2",
  "drop-shadow-2xl",
  "bg-slate-500",
  "hover:bg-slate-600",
  "transition-all",
  "rounded-lg",
  "ease-in-out",
  "duration-200",
  "uppercase",
  "font-semibold",
  "tracking-wide",
  "text-white",
];

export default function Button({
  children,
  className = "",
  type = "button",
  variant = "primary",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={twMerge(btnBaseClasses, className, [
        variant === "primary" && " bg-sky-500  hover:bg-indigo-700",
        variant === "danger" &&
          "bg-gradient-to-tr from-red-500 to-red-300 hover:from-red-600 hover:to-red-400",
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}
