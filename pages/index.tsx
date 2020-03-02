import React, { useState } from 'react'
import useInterval from 'hooks/useInterval';
import useWindowSize from 'hooks/useWindowSize';

export default function IndexPage() {
  const [counter, setCounter] = useState(1)
  const { width,  height } = useWindowSize()
  useInterval(() => setCounter(counter + 1), 1000)

  return (
    <>
    <div className="container mx-auto pt-8 h-full">
      <h1 className="text-2xl font-bold text-white">My Nextjs Boilerplate.</h1>
      <hr />
      <div className="shadow-xl p-4 mt-4 rounded bg-gray-100">
        <h2 className="font-bold text-xl mb-2">
          Counter using interval hook:{" "}
          <span className="bg-red-900 text-white p-2 rounded">{counter}</span>
        </h2>
        <button
          onClick={() => setCounter(0)}
          className="px-3 py-2 font-bold bg-blue-800 rounded text-white"
        >
          Set to zero
        </button>
      </div>
      <div className="shadow-xl p-4 mt-4 rounded bg-gray-100">
        <h2 className="font-bold text-xl mb-2">Window Size hook</h2>
        <div className="flex items-center">
          Width:{" "}
          <span className="text-white bg-red-500 rounded mr-2 p-2 font-extrabold">{width}</span>
          Height: <span className="text-white bg-red-500 rounded p-2 font-extrabold">{height}</span>
        </div>
      </div>
    </div>
    <div className='flex items-end h-64 justify-center text-white'>
      <p>Jordan Addison 2020</p>
    </div>
    </>
  );
}
