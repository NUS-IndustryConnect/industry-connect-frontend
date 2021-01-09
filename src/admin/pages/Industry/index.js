import React, { useEffect } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { getIndustryDataThunk, industryDataFetchedSelector } from '../../../redux/industry';
import Companies from './Companies';
import Users from './Users';
import Posts from './Posts';

const Industry = () => {
  const dispatch = useDispatch();
  const dataFetched = useSelector(industryDataFetchedSelector);
  useEffect(() => {
    if (!dataFetched) dispatch(getIndustryDataThunk());
  }, [dispatch, dataFetched]);
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