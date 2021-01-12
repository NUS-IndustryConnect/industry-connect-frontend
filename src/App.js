import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home';
import Student from './student';
import Admin from './admin';
import Industry from './industry';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/student"><Student /></Route>
          <Route path="/admin"><Admin /></Route>
          <Route path="/industry"><Industry /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
