import React, { useEffect } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { industryDataFetchedSelector, getStudentIndustryThunk } from '../../../redux/industry/';
import ViewAllIndustry from './ViewAllIndustry';
import ViewIndustry from './ViewIndustry';

export default function Industry() {
  const dispatch = useDispatch();
  const dataFetched = useSelector(industryDataFetchedSelector);
  useEffect(() => {
    if (!dataFetched) dispatch(getStudentIndustryThunk());
  }, [dispatch, dataFetched]);
  return (
    <Switch>
      <Route path="/student/industry/:id"><ViewIndustry /></Route>
      <Route path="/student/industry/"><ViewAllIndustry /></Route>
    </Switch>
  )
}
