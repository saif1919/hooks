import User from '.';
import { Profile, SideBar } from './components';

export interface User {
    isSubscribed: boolean;
    name: string;
}

interface DashboardProps {
    
}

export default function Dashboard({}: DashboardProps){
    return (
        <div>
            <SideBar  />
            <Profile  />
        </div>
    )
}
