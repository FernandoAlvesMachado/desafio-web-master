import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, update, remove } from 'firebase/database';
import { useAuth } from '../api/auth/auth';
import EditActivityForm from './EditActivityForm';

const ShowEditActivity = () => {
    const { user } = useAuth();
    const [activities, setActivities] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const database = getDatabase();

    useEffect(() => {
        if (user) {
            const activitiesRef = ref(database, `activities/${user.uid}`);
            const unsubscribe = onValue(activitiesRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const activitiesList = Object.entries(data).map(([key, value]) => ({
                        id: key,
                        ...value,
                    }));
                    setActivities(activitiesList);
                } else {
                    setActivities([]);
                }
            });

            return () => unsubscribe();
        }
    }, [user, database]);

    const handleEditActivity = async (editedActivity) => {
        if (user && selectedActivity) {
            const activityRef = ref(
                database,
                `activities/${user.uid}/${selectedActivity.id}`
            );

            await update(activityRef, editedActivity);

            setSelectedActivity(null);
            setIsEditing(false);
        }
    };

    const handleRemoveActivity = async (id) => {
        if (user) {
            const activityRef = ref(database, `activities/${user.uid}/${id}`);
            await remove(activityRef);
        }
    };

    const handleSelectActivity = (activity) => {
        if (!isEditing) {
            setSelectedActivity(activity);
        }
    };

    return (
        <div className='p-4'>
            <strong className='text-2xl text-center w-full flex items-center justify-center'>Lista de Atividades</strong>
            <ul className='flex gap-3 flex-col'>
                {activities.map((activity) => (
                    <li
                    
                        key={activity.id}
                        className='bg-zinc-50 rounded-xl shadow-xl p-4 focus:bg-slate-600 flex flex-col cursor-pointer'
                        onMouseDown={() => handleSelectActivity(activity)}
                    >
                        <div >
                            <div className='flex gap-2'>
                                <h1>Descrição:</h1>
                                <strong>{activity.description}</strong>
                            </div>
                            <div className='flex gap-2'>
                                <h1>Hora de Início:</h1>
                                <strong>{activity.startTime}</strong>
                            </div>
                            <div className='flex gap-2'>
                                <h1>Hora de Término:</h1>
                                <strong>{activity.endTime}</strong>
                            </div>
                        </div>
                        {selectedActivity && selectedActivity.id === activity.id && (
                            <div className='flex flex-col r-0 gap-3'>
                                <button
                                    className='bg-blue-500 px-4 rounded-lg text-white py-2'
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                        setIsEditing(true);
                                    }}
                                >
                                    Editar
                                </button>
                                <button
                                    className='bg-red-500 text-white px-4 rounded-lg py-2'
                                    onClick={() => handleRemoveActivity(activity.id)}
                                >
                                    Remover
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>

            {isEditing && (
                <EditActivityForm
                    onEdit={handleEditActivity}
                    onCancel={() => {
                        setSelectedActivity(null);
                        setIsEditing(false);
                    }}
                    currentActivity={selectedActivity}
                />
            )}
        </div>
    );
};

export default ShowEditActivity;
