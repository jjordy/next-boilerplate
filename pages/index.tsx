import dynamic from "next/dynamic";
import IntervalCounter from "shared/IntervalCounter";
// This Component will only run on the client since it depends on the window.
const WindowSizeComponent = dynamic(import(`shared/WindowSizeComponent`), { ssr: false });

export default function IndexPage() {
  return (
    <>
      <div className="container mx-auto pt-8 h-full">
        <h1 className="text-2xl font-bold text-white">My Nextjs Boilerplate.</h1>
        <hr />
        <IntervalCounter />
        <WindowSizeComponent />
      </div>
      <div className="flex items-end h-64 justify-center text-white">
        <p>Jordan Addison 2020</p>
      </div>
    </>
  );
}
