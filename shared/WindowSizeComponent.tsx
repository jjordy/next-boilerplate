import React from "react";
import useWindowSize from "hooks/useWindowSize";

export default function WindowSizeComponent() {
  const { width, height } = useWindowSize();
  return (
    <div className="shadow-xl p-4 mt-4 rounded bg-gray-100">
      <h2 className="font-bold text-xl mb-2">Window Size hook</h2>
      <div className="flex items-center">
        Width:{" "}
        <span
          className="text-white bg-red-500 rounded mr-2 p-2 font-extrabold"
          data-cy="window-width-value"
        >
          {width}
        </span>
        Height:{" "}
        <span
          className="text-white bg-red-500 rounded p-2 font-extrabold"
          data-cy="window-height-value"
        >
          {height}
        </span>
      </div>
    </div>
  );
}
