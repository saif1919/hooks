"use client";
import { useState, useEffect } from "react";
export default function Home() {

  const [count, setCount] = useState(0)
  useEffect ( () => {
//code to run
console.log('count'+ count)


return () => {}
// optional return function
  },
  [count] // dependecy array
)

  return <div className="grid grid-cols-6 gap-4">
    <div className="col-start-3 col-span-4">
      <h1 className='text-xl'> Count : {count} </h1>
    </div>
    <div className="col-start-1 col-span-3">
      <button className='bg-blue-500 hover:bg-blue-700 text-white 
                        font-bold py-2 px-4 rounded-full w-full'
        onClick={() => setCount(count + 1)}>incrémenter</button>
    </div>
    <div className="col-end-7 col-span-3 ">
      <button className='bg-blue-500 hover:bg-blue-700 text-white
                        font-bold py-2 px-4 rounded-full w-full'
        onClick={() => setCount(count - 1)}  >décrémenter</button>
    </div>
  </div>
}