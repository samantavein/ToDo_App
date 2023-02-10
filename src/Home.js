import { useState } from 'react'
import useLocalStorage from './useLocalStorage'

import TaskList from './TaskList'
import Edit from './Edit'

function Home() {
    const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
    const [searchTerm, setSearchTerm] = useState("");
    const [editedTask, setEditedTask] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [previousFocusEl, setPreviousFocusEl] = useState(null);

    const deleteTask = (id) => {
        setTasks(prevState => prevState.filter(t => t.id !== id));
    }

    const updateTask = (task) => {
        setTasks(prevState => prevState.map(t => (
          t.id === task.id
            ? { ...t, name: task.name, description: task.description, date: task.date }
            : t
        )))
        closeEditMode();
      }
    
      const closeEditMode = () => {
        setIsEditing(false);
        previousFocusEl.focus();
      }

    const editTask = (task)  => {
        setEditedTask(task);
        setIsEditing(true);
        setPreviousFocusEl(document.activeElement);
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

        {isEditing && (
            <Edit
                editedTask={editedTask}
                updateTask={updateTask}
                closeEditMode={closeEditMode}
            />
        )}

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