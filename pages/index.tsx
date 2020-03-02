import React, { useState } from 'react'
import useInterval from 'hooks/useInterval';
import useWindowSize from 'hooks/useWindowSize';

export default function IndexPage() {
  const [counter, setCounter] = useState(1)
  const { width,  height } = useWindowSize()
  useInterval(() => setCounter(counter + 1), 1000)
  return (
    <div className="container mx-auto pt-8">
      <div className="border shadow-xl p-4 rounded">
        <h1 className="text-2xl font-bold">My Nextjs Boilerplate.</h1>

        <hr />
        <div className="shadow-xl p-4 mt-4 rounded text-white bg-blue-200">
          <h2 className="font-bold text-xl">
            Counter using interval hook: <span className="text-red-500">{counter}</span>
          </h2>
          <button onClick={() => setCounter(0)} className='px-3 py-2 font-bold bg-blue-800 rounded'>Set to zero</button>
        </div>
        <div className="shadow-xl p-4 mt-4 rounded bg-red-500">
          <h2 className="font-bold text-xl text-white">Window Size hook</h2>
          Width: <span className="text-green-500 mr-2 font-extrabold">{width}</span>
          Height: <span className="text-green-500 font-extrabold">{height}</span>
        </div>
      </div>
    </div>
  );
}
