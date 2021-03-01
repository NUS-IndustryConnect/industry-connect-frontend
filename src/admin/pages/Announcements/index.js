import React, { useEffect } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { announcementsFetchedSelector, announcementThunks } from '../../../redux/announcementSlice';
import ManageAnnouncements from './Manage';
import NewAnnouncement from './New';
import EditAnnouncement from './Edit';

export default function Announcements () {
  const dispatch = useDispatch();
  const dataFetched = useSelector(announcementsFetchedSelector);
  useEffect(() => {
    if (!dataFetched) dispatch(announcementThunks.getAdminAnnouncements());
  }, [dispatch, dataFetched]);
  return (
    <Switch>
      <Route exact path="/admin/announcements/new"><NewAnnouncement /></Route>
      <Route exact path="/admin/announcements/edit/:id"><EditAnnouncement /></Route>
      <Route exact path="/admin/announcements/"><ManageAnnouncements /></Route>
      <Route exact path="/admin"><ManageAnnouncements /></Route>
    </Switch>
  )
}
