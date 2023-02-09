

import { useState } from 'react'
import { Link } from "react-router-dom";
import useLocalStorage from './useLocalStorage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// custom components
import CustomForm from './components/CustomForm'
import EditForm from './components/EditForm'
import TaskList from './components/TaskList'
import Navbar from './components/Navbar';


import Home from "./Home";



function App() {
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
          <Route exact path ="/">
              <Home />
            </Route>

            <Route exact path ="/create">
            <CustomForm addTask={addTask}/>             
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
/*
function App() {
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))
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

  return (
    <div className="container">
      <Navbar />

 

      <CustomForm addTask={addTask}/>

      {
        isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
          />
        )
      }

      
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          enterEditMode={enterEditMode}
        />
      )}

    </div>
  )
}

export default App
*/