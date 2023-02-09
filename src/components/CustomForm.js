// basically create page

import { useState } from 'react';
import { useHistory } from "react-router-dom";

// library imports

function CustomForm({ addTask }) {
  const [task, setTask] = useState("");
  const history = useHistory();
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      id: Date.now()
    })
    setTask("")
  }

  return (
    <form
      className="todo"
      onSubmit={handleFormSubmit}
      >
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
      </div>
      <button
          className="btn"
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

export default CustomForm;