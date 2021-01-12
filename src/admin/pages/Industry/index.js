<<<<<<< HEAD
import React from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
import {
  Switch,
  Route,
} from "react-router-dom";
<<<<<<< HEAD

=======
import { useDispatch, useSelector } from 'react-redux';

import { getAdminIndustryThunk, industryDataFetchedSelector } from '../../../redux/industry';
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
import Companies from './Companies';
import Users from './Users';
import Posts from './Posts';

const Industry = () => {
<<<<<<< HEAD
=======
  const dispatch = useDispatch();
  const dataFetched = useSelector(industryDataFetchedSelector);
  useEffect(() => {
    if (!dataFetched) dispatch(getAdminIndustryThunk());
  }, [dispatch, dataFetched]);
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
  return (
    <Switch>
      <Route path="/admin/industry/companies"><Companies /></Route>
      <Route path="/admin/industry/users"><Users /></Route>
      <Route path="/admin/industry/posts"><Posts /></Route>
      <Route path="/admin/industry"><Companies /></Route>
    </Switch>
  )
}

export default Industry;