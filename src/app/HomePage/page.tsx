'use client'
import React, { useEffect, useState } from 'react';
import { useAuth } from '../api/auth/auth.js';
import SideBar from '../components/SideBar';
import AddActivity from '../components/AddActivity';
import ShowEditActivity from '../components/ShowEditActivity';
import { auth } from '../api/auth/firebase-config.js';
import { Metadata } from 'next';

const HomePage = () => {
    const { user, loading } = useAuth();
    const [refreshActivities, setRefreshActivities] = useState(false);

    useEffect(() => {
        if (!loading && !user) {
            window.location.href = '/create-account';
        }
    }, [user, loading]);


    const handleActivityAdded = () => {
        setRefreshActivities(!refreshActivities);
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className='flex transition-all'>
            <SideBar />
            <div className='flex w-full h-screen bg-gray-800 justify-center text-slate-50 items-center'>
                <div className='flex h-full w-full text-slate-950 items-center justify-center gap-7'>
                    <div className='rounded-2xl bg-blue-600 w-96 p-5 h-1/2'>
                        <div className='flex flex-col'>
                            <strong className='text-white text-2xl'>Olá {auth.currentUser?.displayName}</strong>
                            <p className='text-white'>Adicione seus eventos aqui mesmo!</p>
                            <div>
                                <AddActivity onActivityAdded={handleActivityAdded} />
                            </div>
                        </div>
                    </div>
                    <div className='rounded-2xl bg-slate-50 w-96 overflow-y-scroll h-1/2'>
                        <ShowEditActivity key={refreshActivities} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
