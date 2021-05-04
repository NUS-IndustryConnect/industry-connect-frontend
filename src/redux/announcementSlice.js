import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import adminApi from '../server/adminApi';
import studentApi from '../server/studentApi';
import { pluraliseThunk, putPayloadToData } from './utils';

// thunk version of API calls
const getAdminAnnouncements = createAsyncThunk('admin/announcements/get', adminApi.announcements.getAnnouncements);
const getStudentAnnouncements = createAsyncThunk('student/announcements/get', studentApi.getAnnouncements);
const postAnnouncement = createAsyncThunk('admin/announcements/post', adminApi.announcements.postAnnouncement);
const updateAnnouncement = createAsyncThunk('admin/announcements/update', adminApi.announcements.updateAnnouncement);
const archiveAnnouncement = createAsyncThunk('admin/announcements/archive', adminApi.announcements.archiveAnnouncement);
const unarchiveAnnouncement = createAsyncThunk('admin/announcements/unarchive', adminApi.announcements.unarchiveAnnouncement);

const archiveAnnouncements = pluraliseThunk(archiveAnnouncement);
const unarchiveAnnouncements = pluraliseThunk(unarchiveAnnouncement);

export const announcementThunks = {
  getAdminAnnouncements,
  getStudentAnnouncements,
  postAnnouncement,
  updateAnnouncement,
  archiveAnnouncements,
  unarchiveAnnouncements,
}

const replaceAnnouncement = (state, action) => {
  state.data = state.data.map(elem =>
    elem.announceID === action.payload.announceID
      ? action.payload
      : elem);
}

const initialState = {
  data: [],
  dataFetched: false, // controls initial fetch from BE
}

// slice
export const announcementSlice = createSlice({
  name: "announcements",
  initialState: initialState,
  reducers: {
    clearAnnouncements: (state) => initialState,
  },
  extraReducers: {
    [getStudentAnnouncements.fulfilled]: putPayloadToData,
    [getAdminAnnouncements.fulfilled]: putPayloadToData,
    [postAnnouncement.fulfilled]: putPayloadToData,
    [updateAnnouncement.fulfilled]: replaceAnnouncement,
    [archiveAnnouncement.fulfilled]: replaceAnnouncement,
    [unarchiveAnnouncement.fulfilled]: replaceAnnouncement
  }
});

// actions
export const {
  clearAnnouncements,
} = announcementSlice.actions

// selectors
export const announcementsFetchedSelector = state => state.announcements.dataFetched;
export const allAnnouncementsSelector = state => state.announcements.data;

// explanation for `!(elem.isActive === false)` (note the TRIPLE equals)
// for admin, elem.isActive is a boolean
// for students, all announcements returned are active, so isActive is not present
  // elem.isActive is undefined which !== false
  // in this case, `!(elem.isActive === false)` is `true` which is what we want
// for this reason, do not refactor to `elem.isActive`

export const pinnedAnnouncementsSelector = state => {
  return allAnnouncementsSelector(state)
    .filter(elem => !(elem.isActive === false) && elem.isImportant);
}
export const activeAnnouncementsSelector = state => {
  return allAnnouncementsSelector(state)
    .filter(elem => !(elem.isActive === false) && !elem.isImportant);
}
export const archivedAnnouncementsSelector = state => {
  return allAnnouncementsSelector(state)
    .filter(elem => !elem.isActive);
}
export const announcementSelector = id => state => {
  return allAnnouncementsSelector(state)
    .find(elem => elem.announceID === id);
}

export default announcementSlice.reducer;
