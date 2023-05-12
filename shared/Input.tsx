import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const baseInputClasses = [
  "bg-slate-900/40",
  "appearance-none",
  "drop-shadow-2xl",
  "w-full",
  "px-3",
  "py-2.5",
  "text-xl",
  "h-16",
  "leading-tight",
  "text-white",
  "focus:outline-none",
];
const Input = forwardRef(({ action, className, error, ...rest }: any, ref) => (
  <div className="w-full relative">
    <div className="flex">
      <input
        ref={ref}
        type="text"
        {...rest}
        className={twMerge(baseInputClasses, className, [
          error
            ? "border-2 text-red-500 border-red-500 focus:border-red-500"
            : "focus:border-purple-500",
          action ? "rounded-l-lg" : "rounded-lg",
        ])}
      />
      {action && action}
    </div>

    {error && (
      <p className=" ml-2 mt-2 text-sm font-medium text-red-500">{error}</p>
    )}
  </div>
));

export default Input;
