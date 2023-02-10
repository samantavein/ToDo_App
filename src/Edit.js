import { useState } from 'react';
function Edit({ editedTask, updateTask, closeEditMode }) {
  const [updatedTask, setUpdatedTask] = useState({ name: editedTask.name, description :editedTask.description, date: editedTask.date });

  const handleSave= (e) => {
    e.preventDefault();
    updateTask({
      id: Date.now(),
      name: updatedTask.name,
      description: updatedTask.description,
      date: updatedTask.date
    })
    setUpdatedTask({ name: updatedTask.name, description: updatedTask.description, date: updatedTask.date });
  }
  
  return (
    <div className="container"
      onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Task name"
          value={updatedTask.name}
          onInput={(e) => setUpdatedTask({...updatedTask, name: e.target.value})}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={updatedTask.description}
          onInput={(e) => setUpdatedTask({...updatedTask, description: e.target.value})}
          required
        />
        <input
          type="date"
          name="date"
          placeholder="Date created"
          value={updatedTask.date}
          onInput={(e) => setUpdatedTask({...updatedTask, date: e.target.value})}
          required
        />
        </form>
        <div className = "margin">
          <button className="buttonleft" type="button" onClick={handleSave} >
            Save
          </button>
          <button type="button" onClick={closeEditMode}>
            Cancel
          </button>
        </div>
    </div>
  );
}
export default Edit;