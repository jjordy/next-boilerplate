import React, { useState } from "react";
import useInterval from "hooks/useInterval";

export default function IntervalCounter() {
  const [counter, setCounter] = useState(1);
  useInterval(() => setCounter(counter + 1), 1000);
  return (
    <div className="shadow-xl p-4 mt-4 rounded bg-gray-100">
      <h2 className="font-bold text-xl mb-2">
        Counter using interval hook:{" "}
        <span className="bg-red-900 text-white p-2 rounded" data-cy="counter-value">
          {counter}
        </span>
      </h2>
      <button
        onClick={() => setCounter(0)}
        className="px-3 py-2 font-bold bg-blue-800 rounded text-white"
      >
        Set to zero
      </button>
    </div>
  );
}
