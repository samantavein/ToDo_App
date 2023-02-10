import { useState } from 'react';
import useLocalStorage from './useLocalStorage'
import { useHistory } from "react-router-dom";

function Create() {

  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const history = useHistory();
  const [task, setTask] = useState({ name: "", description: "", date: "" });
  const [error, setError] = useState({});

  const handleSave = (e) => {
    e.preventDefault();

    let hasError = false;
    const newError = {};
  
    if (!task.name) {
      newError.name = "Name is required";
      hasError = true;
    }
  
    if (!task.description) {
      newError.description = "Description is required";
      hasError = true;
    }
  
    if (!task.date) {
      newError.date = "Date is required";
      hasError = true;
    }
  
    if (hasError) {
      setError(newError);
    }
    else{
      addTask({
        id: Date.now(),
        name: task.name,
        description: task.description,
        date: task.date
      })
    }
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
          onInput={(e) => setTask({...task, name: e.target.value})}
          required
        />
        {error.name && <div className="error">{error.name}</div>}
        <textarea
          name="description"
          placeholder="Description"
          value={task.description}
          onInput={(e) => setTask({...task, description: e.target.value})}
          required

        />
         {error.description && <div className="error">{error.description}</div>}
        <input
          type="date"
          name="date"
          placeholder="Date created"
          value={task.date}
          onInput={(e) => setTask({...task, date: e.target.value})}
          required

        />
        {error.date && <div className="error">{error.date}</div>}
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
export default Create;
