import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
function Edit({ editedTask, updateTask, closeEditMode }) {
  const [updatedTask, setUpdatedTask] = useState({ name: editedTask.name, description :editedTask.description, date: editedTask.date });
  const history = useHistory();

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
/*
function Edit({ addTask }) {
  const history = useHistory();
  const [task, setTask] = useState({ name: undefined, description: undefined, date: undefined });

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    addTask({
      id: Date.now(),
      name: task.name,
      description: task.description,
      date: task.date
    })
    setTask({ name: "", description: "", date: "" })
  }
  

  return (
    <div className="container">
      <form>
        <input
          type="text"
          name="name"
          placeholder="Task name"
          value={task.name}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          placeholder="Date created"
          value={task.date}
          onChange={handleChange}
        />
        <button className="buttonleft" type="button" onClick={handleSave} >
          Save
        </button>
        <button type="button" onClick={() => history.push("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
}
export default Edit;
*/
/*
const Edit = ({ editedTask, updateTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  useEffect(()=> {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    }

    window.addEventListener('keydown', closeModalIfEscaped)

    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped)
    }
  }, [closeEditMode])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({...editedTask, name: updatedTaskName})
  }

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
      >
      <form
        onSubmit={handleFormSubmit}
        >
        <div >
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
        </div>
        <button
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
          type="submit"
          >
          Save
        </button>
      </form>
    </div>
  )
}

export default Edit
*/