import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import adminApi from '../admin/api';
import studentApi from '../student/api';

// thunk version of API calls
const getAnnouncementsAdmin = createAsyncThunk('admin/announcements/get', adminApi.announcements.getAnnouncements);
const getAnnouncementsStudent = createAsyncThunk('admin/announcements/get', studentApi.announcements.getAnnouncementsApi);
const postAnnouncement = createAsyncThunk('admin/announcements/post', adminApi.announcements.postAnnouncement);
const updateAnnouncement = createAsyncThunk('admin/announcements/update', adminApi.announcements.updateAnnouncement);
const archiveAnnouncement = createAsyncThunk('admin/announcements/archive', adminApi.announcements.archiveAnnouncement);

const archiveAnnouncements = announceIDs => dispatch => {
  return Promise.all(
    announceIDs.map(
      id => dispatch(archiveAnnouncement(id))
    ));
  };

export const announcementThunks = {
  getAnnouncementsAdmin,
  getAnnouncementsStudent,
  postAnnouncement,
  updateAnnouncement,
  archiveAnnouncement,
  archiveAnnouncements,
}

// slice
export const announcementSlice = createSlice({
  name: "announcements",
  initialState: {
    data: [],
    dataFetched: false, // controls initial fetch from BE
  },
  reducers: {},
  extraReducers: {
    [getAnnouncementsStudent.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [getAnnouncementsAdmin.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [postAnnouncement.fulfilled]: (state, action) => {
      state.data.push(action.payload);
    },
    [updateAnnouncement.fulfilled]: (state, action) => {
      state.data = state.data.map(elem =>
        elem.announceID === action.payload.announceID
          ? action.payload
          : elem);
    },
    [archiveAnnouncement.fulfilled]: (state, action) => {
      const i = state.data.findIndex(elem => elem.announceID === action.payload);
      state.data[i].isValid = false;
      state.data[i].isImportant = false;
    }
  }
});

// selectors
export const announcementsFetchedSelector = state => state.announcements.dataFetched;
export const allAnnouncementsSelector = state => state.announcements.data;
export const pinnedAnnouncementsSelector = state => {
  return allAnnouncementsSelector(state)
    .filter(elem => elem.isImportant);
}
export const displayedAnnouncementsSelector = state => {
  return allAnnouncementsSelector(state)
    .filter(elem => elem.isValid && !elem.isImportant);
}
export const archivedAnnouncementsSelector = state => {
  return allAnnouncementsSelector(state)
    .filter(elem => !elem.isValid);
}
export const announcementSelector = id => state => {
  return allAnnouncementsSelector(state)
    .find(elem => elem.announceID == id);
}

export default announcementSlice.reducer;