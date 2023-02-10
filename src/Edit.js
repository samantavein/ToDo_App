import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";


function Edit({ editedTask }) {
  const history = useHistory();
  const [updatedTask, setUpdatedTask] = useState(editedTask.name);

  const handleChange = (event) => {
    setUpdatedTask({ ...updatedTask, [event.target.name]: event.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    editedTask({...editedTask,
      id: Date.now(),
      name: updatedTask.name,
      description: updatedTask.description,
      date: updatedTask.date
    })
    
  }
  

  return (
    <div className="container">
      <form>
        <input
          type="text"
          name="name"
          placeholder="Task name"
          value={updatedTask.name}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={updatedTask.description}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          placeholder="Date created"
          value={updatedTask.date}
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