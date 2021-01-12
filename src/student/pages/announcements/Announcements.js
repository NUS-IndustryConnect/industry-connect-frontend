import React, { useEffect } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import ViewAllAnnouncements from './ViewAllAnnouncements';
import ViewAnnouncement from './ViewAnnouncement';
import { useDispatch, useSelector } from 'react-redux';
import { announcementsFetchedSelector, announcementThunks } from '../../../redux/announcementSlice';

export default function Announcements() {
  const dispatch = useDispatch();
  const dataFetched = useSelector(announcementsFetchedSelector);
  useEffect(() => {
    if (!dataFetched) dispatch(announcementThunks.getStudentAnnouncements());
  }, [dispatch, dataFetched]);
  return (
    <Switch>
      <Route path="/student/announcements/:id"><ViewAnnouncement /></Route>
      <Route path="/student/announcements/"><ViewAllAnnouncements /></Route>
      <Route exact path="/student"><ViewAllAnnouncements /></Route>
    </Switch>
  )
}
