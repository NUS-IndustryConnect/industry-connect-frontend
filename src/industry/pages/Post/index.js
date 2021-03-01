import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Manage from './Manage';
import New from './New';
import Edit from './Edit';
import View from './View';
import Preview from './Preview';
import Submitted from './Submitted';
import { useDispatch, useSelector } from 'react-redux';
import { getIndustryIndustryThunk, industryDataFetchedSelector } from '../../../redux/industry';

export default function Post() {
  const dispatch = useDispatch();
  const dataFetched = useSelector(industryDataFetchedSelector);
  
  useEffect(() => {
    if (!dataFetched) dispatch(getIndustryIndustryThunk());
  }, [dispatch, dataFetched]);

  return (
    <Switch>
      <Route exact path="/industry/posts/new"><New /></Route>
      <Route exact path="/industry/posts/edit/:id"><Edit /></Route>
      <Route exact path="/industry/posts/view/:id"><View /></Route>
      <Route exact path="/industry/posts/preview"><Preview /></Route>
      <Route exact path="/industry/posts/submitted"><Submitted /></Route>
      <Route exact path="/industry/posts"><Manage /></Route>
    </Switch>
  )
}
