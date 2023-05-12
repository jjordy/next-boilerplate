import Link from "next/link";
import { twMerge } from "tailwind-merge";

const containerStyles = [
  "flex",
  "h-24",
  "bg-black/40",
  "to-slate-700",
  "text-white",
  "items-center",
  "px-24",
  "mb-8",
];

export default async function Navigation() {
  return (
    <nav className={twMerge(containerStyles)}>
      <Link href="/" className="font-black uppercase text-4xl">
        Todo List
      </Link>
    </nav>
  );
}
