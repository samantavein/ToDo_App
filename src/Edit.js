import { useState, useEffect } from 'react';
function Edit({ editedTask, updateTask, closeEditMode }) {
  const [updatedTask, setUpdatedTask] = useState({ name: editedTask.name, description :editedTask.description, date: editedTask.date });

  useEffect(()=> {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    }
    window.addEventListener('keydown', closeModalIfEscaped)

    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped)
    }
  }, [closeEditMode])

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
          onChange={e => setUpdatedTask(e.target.value)}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={updatedTask.description}
          onChange={e => setUpdatedTask(e.target.value)}
        />
        <input
          type="date"
          name="date"
          placeholder="Date created"
          value={updatedTask.date}
          onChange={e => setUpdatedTask(e.target.value)}
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