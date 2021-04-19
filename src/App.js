import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Toaster } from 'react-hot-toast';

import Home from './Home';
import Student from './student';
import Admin from './admin';
import Industry from './industry';
import './App.css';
import { userSelector } from './redux/user/userSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from './redux/user/userActions';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('@token');
  const role = localStorage.getItem('@role');
  console.log(localStorage)
  console.log(token)
  console.log(useSelector(userSelector))

  useEffect(() => {
    if (token) {
      dispatch(refresh())
    }
  }, [token, dispatch]);

  console.log(useSelector(userSelector))

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
