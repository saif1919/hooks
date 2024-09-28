
import {  useUserContext } from './context';

interface SidebarProps {
   
}

export function SideBar({  }: SidebarProps) {
    const user = useUserContext()
    return (
        <div>
            <div className='ml-4 font-sans hover:font-serif'>
                {user.name}
            </div>
            <div className='ml-4 font-sans hover:font-serif'>
                Subscription Status: {user.isSubscribed ? "Yes y're subscribed!!" : "Subscribe NOW!!"}
            </div>
        </div>
    )
}

interface ProfileProps {
   
}

export function Profile({  }: ProfileProps) {
    const user = useUserContext()
    return (
        <div className='ml-4 font-sans hover:font-serif'>
            {user.name}
        </div>
    )
}