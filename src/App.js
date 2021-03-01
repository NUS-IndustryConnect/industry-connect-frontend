import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from './Home';
import Student from './student';
import Admin from './admin';
import Industry from './industry';
import './App.css';

function App() {
  const { token, role } = useSelector(state => state.user);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/student"><Student /></Route>
          <Route path="/admin"><Admin /></Route>
          <Route path="/industry"><Industry /></Route>
          <Route path="/login"><Home /></Route>
          <Route path="/" render={() => {
              // if logged in redirect to role
              return token ? <Redirect to={"/" + role} /> : <Redirect to="/login" />
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
