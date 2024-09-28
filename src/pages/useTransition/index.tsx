"use client";
import { useEffect, useState, useTransition } from "react";


export default function Home() {
    const [input, setInput] = useState('')
    const [list, setList] = useState<string[]>([])
  const [isPending, startTransition] = useTransition()

    const LIST_SIZE = 20000

    const handleChange = (value: string) => {
        setInput(value)
        startTransition(() => {
            const l = []
            for (let index = 0; index < LIST_SIZE; index++) {
                l.push(value)
            }
            setList(l)
        })
    }
    useEffect(() => {
        console.log('test')
    })

    return (
        <div>
            <input 
                type="text"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
          { isPending ? 'chargement' : list.map((item, index) => {
                return <div key={index}>{item}</div>
            })}
            {/* {
                list.map((item, index) => {
                    return <div key={index}>{item}</div>
                })
            } */}
        </div>
    )
}