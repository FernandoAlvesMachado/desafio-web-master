import React from "react";
import { UserRound, List } from 'lucide-react';
import { useAuth } from '../api/auth/auth';



const SideBar = () => {
    return (
        <div className="h-screen max-w-52 flex flex-col gap-4 items-center justify-between">
            <div className="transition-all cursor-pointer flex gap-1 w-full p-3 justify-center items-center hover:bg-blue-500 hover:text-white">
                <UserRound />
            </div>
            <div className="transition-all p-3 flex cursor-pointer items-center justify-center gap-2 hover:bg-blue-500 hover:text-white">
                <p>Lista</p>
                <List />
            </div>
        </div>
    )
}
export default SideBar;