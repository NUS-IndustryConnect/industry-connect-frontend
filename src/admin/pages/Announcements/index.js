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

import { announcementsFetchedSelector, announcementThunks } from '../../../redux/announcementSlice';
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
import ManageAnnouncements from './Manage';
import NewAnnouncement from './New';
import EditAnnouncement from './Edit';

export default function Announcements () {
<<<<<<< HEAD
=======
  const dispatch = useDispatch();
  const dataFetched = useSelector(announcementsFetchedSelector);
  useEffect(() => {
    if (!dataFetched) dispatch(announcementThunks.getAdminAnnouncements());
  }, [dispatch, dataFetched]);
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
  return (
    <Switch>
      <Route path="/admin/announcements/new"><NewAnnouncement /></Route>
      <Route path="/admin/announcements/edit/:id"><EditAnnouncement /></Route>
      <Route path="/admin/announcements/"><ManageAnnouncements /></Route>
      <Route exact path="/admin"><ManageAnnouncements /></Route>
    </Switch>
  )
}