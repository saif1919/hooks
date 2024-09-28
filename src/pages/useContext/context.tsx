import { createContext, useContext } from "react";
import { User } from ".";

export const DashboardContext = createContext<User | undefined>(undefined)

export function useUserContext(){
    const user = useContext(DashboardContext)
    if(user === undefined){
        throw new Error('il faut que le user ne soit pas undefined!!!')
    }
    return user;
}
