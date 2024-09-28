"use client";
import { useEffect, useLayoutEffect, useState } from "react";

const userIds = [1,2]

export default function Home() {
    const [userId, setUserId] = useState(userIds[0])
    const [isAdmin, setIsAdmin] = useState(true)

    let now = performance.now()
    while(performance.now() - now < 200){
    }
  
    useLayoutEffect(() => {
        setIsAdmin(userId === userIds[0])
    }, [userId])

    const handleChange = () => {
        const otherId =  userIds.find((id) => id != userId)!;
        setUserId(otherId)
    }
    return (
        <div>
           <p> userId : {userId}</p>
           <p> Admin : {isAdmin ? 'Oui' : 'Non'}</p>
           <button onClick={handleChange}>Changer utilisateur</button>
        </div>
    )
}