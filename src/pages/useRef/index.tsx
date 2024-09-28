"use client";
import { useEffect, useRef, useState } from "react";


export default function Home() {
    const [name, setName] = useState('')
  const prevNameRef = useRef('')

    useEffect(() => {
        prevNameRef.current = name

    },[name])

    return (
        <div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div>My name is {name}</div>
            <div>My prev name is {prevNameRef.current}</div>
        </div>
    )
}