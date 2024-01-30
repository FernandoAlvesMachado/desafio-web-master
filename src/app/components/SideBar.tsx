import React from "react";
import { UserRound, LogOut } from 'lucide-react';
import { getAuth, signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

const SideBar = () => {
    const history = useHistory();

    const handleLogout = () => {
        const auth = getAuth();

        signOut(auth)
            .then(() => {
                alert('Você foi desconectado.');

                history.push('/');
            })
            .catch((error) => {
                console.error('Erro ao fazer logout:', error.message);
            });
    };

    return (
        <div className="h-screen max-w-52 flex flex-col gap-4 items-center justify-between">
            <div className="transition-all cursor-pointer flex gap-1 w-full p-3 justify-center items-center hover:bg-blue-500 hover:text-white">
                <UserRound />
            </div>
            <div className="transition-all p-3 flex cursor-pointer items-center justify-center gap-2 hover:bg-blue-500 hover:text-white"
                onClick={handleLogout}>
                <p>Sair</p>
                <LogOut />
            </div>
        </div>
    );
};

export default SideBar;
