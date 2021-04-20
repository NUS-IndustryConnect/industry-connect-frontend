import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { refresh } from './redux/user/userActions';

import Home from './Home';
import Student from './student';
import Admin from './admin';
import Industry from './industry';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('@token');
  const userInfo = localStorage.getItem('@userInfo');
  const role = localStorage.getItem('@role');

  useEffect(() => {
    if (userInfo) {
      dispatch(refresh())
    }
  }, [token, userInfo, dispatch]);

  return (
    <div className="App">
      <div><Toaster position="bottom-right"/></div>
      <Router>
        {
          token && <Redirect to={"/" + role} />
        }
        <Switch>
          <Route path="/student"><Student /></Route>
          <Route path="/admin"><Admin /></Route>
          <Route path="/industry"><Industry /></Route>
          <Route path="/login"><Home /></Route>
          <Route path="/" render={() => { // if logged in redirect to role
              return token ? <Redirect to={"/" + role} /> : <Redirect to="/login" />
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
