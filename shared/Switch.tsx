import { Switch as HSwitch } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

const switchContainer = [
  "relative",
  "inline-flex",
  "flex-shrink-0",
  "h-[38px]",
  "w-[74px]",
  "border-2",
  "border-transparent",
  "rounded-full",
  "cursor-pointer",
  "transition-colors",
  "ease-in-out",
  "duration-200",
  "focus:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-white",
  "focus-visible:ring-opacity-75",
];

const switchPad = [
  "pointer-events-none",
  "inline-block",
  "h-[34px]",
  "w-[34px]",
  "rounded-full",
  "bg-white",
  "shadow-lg",
  "transform",
  "ring-0",
  "transition",
  "ease-in-out",
  "duration-200",
  "flex",
  "justify-center",
  "text-green-500",
  "items-center",
];

export default function Switch({ checked, onChange }) {
  return (
    <HSwitch
      checked={checked}
      onChange={onChange}
      className={twMerge(switchContainer, [
        checked ? "bg-sky-400" : "bg-gray-200 hover:bg-gray-300",
      ])}
    >
      <span className="sr-only">
        Toggle todo {checked ? "Uncompleted" : "Completed"}
      </span>
      <span
        aria-hidden="true"
        className={twMerge(switchPad, [
          checked ? "translate-x-9" : "translate-x-0",
        ])}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={twMerge([
            "w-5",
            "h-5",
            checked ? "opacity-0 absolute" : "opacity-1 text-slate-500",
          ])}
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={twMerge([
            "w-5",
            "h-5",
            checked ? "opacity-1" : "opacity-0 absolute",
          ])}
        >
          <path
            fillRule="evenodd"
            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </HSwitch>
  );
}
