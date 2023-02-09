import { useState } from 'react'

import useLocalStorage from './useLocalStorage'
import EditForm from './components/EditForm'
import TaskList from './components/TaskList'


function Home() {
    const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
    const [previousFocusEl, setPreviousFocusEl] = useState(null);
    const [editedTask, setEditedTask] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
  
  
    const deleteTask = (id) => {
      setTasks(prevState => prevState.filter(t => t.id !== id));
    }
  
  
    const updateTask = (task) => {
      setTasks(prevState => prevState.map(t => (
        t.id === task.id
          ? { ...t, name: task.name }
          : t
      )))
      closeEditMode();
    }
  
    const closeEditMode = () => {
      setIsEditing(false);
      previousFocusEl.focus();
    }
  
    const enterEditMode = (task) => {
      setEditedTask(task);
      setIsEditing(true);
      setPreviousFocusEl(document.activeElement);
    }
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
        
        {
          isEditing && (
            <EditForm
              editedTask={editedTask}
              updateTask={updateTask}
              closeEditMode={closeEditMode}
            />
          )
        }
        
        
        {filteredTasks.length > 0 ? (
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          enterEditMode={enterEditMode}
        />
      ) : (
        <div> No results found </div>
      )}
  
      </div>
    )
  }
  
  export default Home;