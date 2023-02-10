import useLocalStorage from './useLocalStorage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react'
import Create from './Create'
import Navbar from './Navbar';
import Home from "./Home";
import Edit from './Edit'

function App() {
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [editedTask, setEditedTask] = useState(null);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
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
              <Create addTask={addTask} />             
            </Route>

            <Route exact path ="/create">
            <Edit
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
          />        
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
