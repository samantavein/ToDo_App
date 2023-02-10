
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create'
import Navbar from './Navbar';
import Home from "./Home";
import Edit from "./Edit";

function App() {
  
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
              <Create/>             
            </Route>

            <Route exact path ="/edit/:id">
              <Edit/>             
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
