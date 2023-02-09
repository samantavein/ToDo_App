import { useState } from 'react';
import { useHistory } from "react-router-dom";

function Create({ addTask }) {
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
      onSubmit={handleFormSubmit}
      >
      <div>
        <input
          type="text"
          id="task"
          className="input"
          value={task}     
          required
          placeholder="Enter Task"
        />
      </div>
      <button        
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