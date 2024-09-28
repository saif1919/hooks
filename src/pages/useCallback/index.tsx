"use client";
import { useCallback, useState } from "react";
import Search from "./search";

const myUsers = [
    'saif',
    'yassine',
    'oussema',
    'kamel',
    'zakaria',
    'mohamed',
    'riadh'
];


export default function Home() {
    const [users, setUsers] = useState(myUsers)
    const [red, setRed] = useState(false)

    const handleSearch = useCallback((text: string) => {
        console.log(users[0])
        const filteredUsers = myUsers.filter((user) => user.includes(text))
        setUsers(filteredUsers)
    }, [users]) 
    const theme = {
        backgroundColor: red ? 'red' : 'white',
        color: red ? 'white' : 'red'
    }
    return (
        <div className="grid grid-cols-6 gap-4">
            <div className="col-start-2 col-span-4">
                <button style={theme} onClick={() => setRed(prevRed => !prevRed)}>
                    change color
                </button>
                <Search onChange={handleSearch} />
            </div>
            <ul>
                {users.map((user) => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    )
}