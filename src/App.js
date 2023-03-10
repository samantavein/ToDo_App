
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create'
import Navbar from './Navbar';
import Home from "./Home";

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
              <Create />             
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
