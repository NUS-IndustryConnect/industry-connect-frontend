import React from 'react';
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Toaster } from 'react-hot-toast';

import { userSelector } from './redux/user/userSelectors';
import Home from './Home';
import Student from './student';
import Admin from './admin';
import Industry from './industry';
import './App.css';

function App() {
  const { token, role } = useSelector(userSelector);
  console.log(process.env.REACT_APP_DEV_BASE_URL);

  return (
    <div className="App">
      <div><Toaster position="bottom-right"/></div>
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
