import React, { useState } from 'react';
import { getDatabase, ref, push, set } from 'firebase/database';
import { useAuth } from '../api/auth/auth';

const AddActivity = ({ onActivityAdded }) => {
    const { user } = useAuth();
    const [description, setDescription] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const database = getDatabase();

    const handleAddActivity = async () => {
        if (user) {
            const activitiesRef = ref(database, `activities/${user.uid}`);
            const newActivityRef = push(activitiesRef);

            await set(newActivityRef, {
                description,
                startTime,
                endTime,
            });

            setDescription('');
            setStartTime('');
            setEndTime('');
            onActivityAdded();
        }
    };

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col text-center'>
                <input
                    placeholder='Nome da atividade'
                    className='rounded-md shadow-md bg-white p-2 outline-none'
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className='flex flex-col '>
                <label className='text-white'>Hora de Início:</label>
                <input
                    className='p-2 shadow-sm bg-white rounded-md'
                    type="date"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />
            </div>
            <div className='flex flex-col'>
                <label className='text-white'>Hora de Término:</label>
                <input
                    className='p-2 shadow-sm bg-white rounded-md'
                    type="date"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                />
            </div>
            <div>
                <button className='bg-green-500 py-2 px-2 text-white rounded-xl' onClick={handleAddActivity}>Adicionar Atividade</button>
            </div>
        </div>
    );
};

export default AddActivity;
