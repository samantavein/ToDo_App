import { useState } from 'react'
import useLocalStorage from './useLocalStorage'

import TaskList from './TaskList'
import { useHistory } from "react-router-dom";

function Home() {
    const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
    const [searchTerm, setSearchTerm] = useState("");
    const history = useHistory();

    const deleteTask = (id) => {
        setTasks(prevState => prevState.filter(t => t.id !== id));
    }

    const editTask = id => {
        history.push({
          pathname: "/edit/:id",
          state: { taskId: id }
        });
    };

    const filteredTasks = tasks.filter(task =>
        task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
    <div className="container">
    <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
           
    {filteredTasks.length > 0 ? (
    <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        enterEditMode={editTask}
    />
    ) : (
    <div> No results found </div>
    )}

    </div>
    )
  }
  
  export default Home;