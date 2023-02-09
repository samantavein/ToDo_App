import useLocalStorage from './useLocalStorage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Create from './Create'
import Navbar from './Navbar';
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
            <Create addTask={addTask}/>             
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
