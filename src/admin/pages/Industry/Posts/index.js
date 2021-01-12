import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

<<<<<<< HEAD
import './index.css';

=======
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
import Manage from './Manage';
import New from './New';
import Edit from './Edit';
import Preview from './Preview';
<<<<<<< HEAD
=======
import View from './View';
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada

const Posts = () => {
  return (
    <Switch>
      <Route path="/admin/industry/posts/new"><New /></Route>
      <Route path="/admin/industry/posts/edit/:id"><Edit /></Route>
      <Route path="/admin/industry/posts/preview/:id"><Preview /></Route>
<<<<<<< HEAD
=======
      <Route path="/admin/industry/posts/view/:id"><View /></Route>
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
      <Route path="/admin/industry/posts"><Manage /></Route>
    </Switch>
  )
}

export default Posts;