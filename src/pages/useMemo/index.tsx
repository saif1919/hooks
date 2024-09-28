"use client";
import {  useState, useMemo } from 'react'
import { initialItems } from './items';
import "./../../app/globals.css";

export default function Home() {
  const [count, setCount] = useState(0)
  const [items] = useState(initialItems);

  const selectdItem = useMemo(() =>  items.find((item) => item.id === count), [items, count])



  return <div className="grid grid-cols-6 gap-4">
    <div className="col-start-2 col-span-4">
      <h1 className='text-xl'> Count : {count}</h1>
      <h1 className='text-xl'>Selected Item : {selectdItem?.id}</h1>
    </div>
    <div className="col-start-1 col-span-3">
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full'
        onClick={() => setCount(count + 1)}>Plus</button>
    </div>

  </div>
}
