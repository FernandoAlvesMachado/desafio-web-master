import React, { useState } from 'react';

const EditActivityForm = ({ onEdit, onCancel, currentActivity }) => {
  const [newDescription, setNewDescription] = useState(currentActivity.description);
  const [newStartTime, setNewStartTime] = useState(currentActivity.startTime);
  const [newEndTime, setNewEndTime] = useState(currentActivity.endTime);

  const handleEdit = () => {
    const editedActivity = {
      id: currentActivity.id,
      description: newDescription,
      startTime: newStartTime,
      endTime: newEndTime,
    };

    onEdit(editedActivity);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-xl">
        <h2 className="text-2xl mb-4">Editar Tarefa</h2>
        <div>
          <label>Descrição:</label>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="rounded-md bg-gray-100 outline-none px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="mt-4">
          <label>Hora de Início:</label>
          <input
            type="text"
            value={newStartTime}
            onChange={(e) => setNewStartTime(e.target.value)}
            className="rounded-md bg-gray-100 outline-none px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="mt-4">
          <label>Hora de Término:</label>
          <input
            type="text"
            value={newEndTime}
            onChange={(e) => setNewEndTime(e.target.value)}
            className="rounded-md bg-gray-100 outline-none px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="mt-6 flex justify-end">
          <button
            className="bg-green-500 py-2 px-4 text-white rounded-xl mr-2"
            onClick={handleEdit}
          >
            Salvar
          </button>
          <button
            className="bg-gray-400 py-2 px-4 text-white rounded-xl"
            onClick={onCancel}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditActivityForm;
