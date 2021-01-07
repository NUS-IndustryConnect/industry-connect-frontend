import React, { useEffect } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import ManageAnnouncements from './Manage';
import NewAnnouncement from './New';
import EditAnnouncement from './Edit';
import { announcementsFetchedSelector, adminThunks } from '../../../redux/announcementSlice';

export default function Announcements () {
  const dispatch = useDispatch();
  const dataFetched = useSelector(announcementsFetchedSelector);
  useEffect(() => {
    if (!dataFetched) dispatch(adminThunks.getAnnouncementsAdmin());
  }, [dispatch, dataFetched]);
  return (
    <Switch>
      <Route path="/admin/announcements/new"><NewAnnouncement /></Route>
      <Route path="/admin/announcements/edit/:id"><EditAnnouncement /></Route>
      <Route path="/admin/announcements/"><ManageAnnouncements /></Route>
      <Route exact path="/admin"><ManageAnnouncements /></Route>
    </Switch>
  )
}