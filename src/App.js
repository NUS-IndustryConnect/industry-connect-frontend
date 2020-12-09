import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home';
import Student from './student';
import Admin from './admin';
import Company from './company';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/student"><Student /></Route>
          <Route path="/admin"><Admin /></Route>
          <Route path="/company"><Company /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
