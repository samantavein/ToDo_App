import { useState } from 'react';
import { useHistory } from "react-router-dom";


function Create({ addTask }) {
  const history = useHistory();
  const [task, setTask] = useState({ name: null, description: null, date: null });

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
    <div class="container">
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
        <button class="buttonleft" type="button" onClick={handleSave} >
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
/*

function Create({ addTask }) {
  const [task, setTask] = useState("");
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      id: Date.now()
    })
    setTask("");    
  }
  return (
    <form
      className="container"
      onSubmit={handleFormSubmit}
      >
      <div >
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          placeholder="Task name"
        />
        
      </div>
      <button
        className="buttonleft"
        aria-label="Add Task"
        type="submit"       
        >
          Save
        </button>
      <button type="button" onClick={() => history.push("/")}>
            Cancel
        </button>
    </form>
  )

}

export default Create;
*/