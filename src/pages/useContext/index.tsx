"use client";
import { useState } from "react";
import Dashboard from "./dashboard";
import "../../app/globals.css";
import { DashboardContext } from "./context";


export interface User {
    isSubscribed: boolean;
    name: string;
}

export default function Home(){
    const [user] = useState<User>({
        isSubscribed: true,
        name: 'You'
    })
    return (
        <div>
            <DashboardContext.Provider value={user}>
                <Dashboard />
            </DashboardContext.Provider>
        </div>
    )
}