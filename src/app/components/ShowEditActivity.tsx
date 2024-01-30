import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, update, remove } from 'firebase/database';
import { useAuth } from '../api/auth/auth';

const ShowEditActivity = () => {
    const { user } = useAuth();
    const [activities, setActivities] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState(null);

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

    const handleEditActivity = async () => {
        if (user && selectedActivity) {
            const activityRef = ref(
                database,
                `activities/${user.uid}/${selectedActivity.id}`
            );

            await update(activityRef, {
                description: selectedActivity.description,
                startTime: selectedActivity.startTime,
                endTime: selectedActivity.endTime,
            });

            setSelectedActivity(null);
        }
    };

    const handleRemoveActivity = async (id) => {
        if (user) {
            const activityRef = ref(database, `activities/${user.uid}/${id}`);
            await remove(activityRef);
        }
    };

    const handleSelectActivity = (activity) => {
        setSelectedActivity(activity);
    };

    return (
        <div className='p-4'>
            <strong className='text-2xl'>Lista de Atividades</strong>
            <ul>
                {activities.map((activity) => (
                    <li className='p-4 focus:bg-slate-600 flex flex-col' key={activity.id} onClick={() => handleSelectActivity(activity)}>
                        <div className='flex gap-2'>
                            <h1>Descrição:</h1>
                            <strong>
                                {activity.description}
                            </strong>
                        </div>
                        <div className='flex gap-2 '>
                            <h1>Hora de Início:</h1>
                            <strong>
                                {activity.startTime}
                            </strong>
                        </div>
                        <div className='flex gap-2 '>
                            <h1>Hora de Término:</h1>
                            <strong>
                                {activity.endTime}
                            </strong>
                        </div>
                        {selectedActivity && selectedActivity.id === activity.id && (
                            <div className='flex flex-col r-0 gap-3'>
                                <button className='bg-blue-500 px-4 rounded-lg text-white py-2' onClick={() => handleEditActivity()}>Editar</button>
                                <button className='bg-red-500 text-white px-4 rounded-lg py-2' onClick={() => handleRemoveActivity(activity.id)}>Remover</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShowEditActivity;
