import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { tl } from "utils";

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

export default function Navigation() {
  return (
    <nav className={twMerge(containerStyles)}>
      <Link href="/" className="font-black uppercase text-4xl">
        Todo List
      </Link>
    </nav>
  );
}

if (import.meta.vitest) {
  const { test, describe, expect } = import.meta.vitest;
  describe("Index Page", async () => {
    const { render } = await tl();
    test("It displays a add todo button & input", async () => {
      const wrapper = render(<Navigation />);
      wrapper.getByText("Todo List");
    });
  });
}
