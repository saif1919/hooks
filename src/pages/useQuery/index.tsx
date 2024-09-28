"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./Dashboard";
import { useState } from "react";

const queryClient = new QueryClient()


export default function Home() {
    const [showDashboard, setShowDashboard] = useState(true)
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <button onClick={() => setShowDashboard(!showDashboard)}>show/hide</button>
                 
                 {showDashboard ?<Dashboard /> : <></>
                 }
            </QueryClientProvider>
        </div>
    )
}