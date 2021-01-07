import {
  LOAD_STUDENT_ANNOUNCEMENT_DATA,
  LOAD_ADMIN_ANNOUNCEMENT_DATA,
  CREATE_ANNOUNCEMENT,
  UPDATE_ANNOUNCEMENT,
  ARCHIVE_ANNOUNCEMENT,
} from "../types";

const initState = {
  archivedAnnouncements: [],
  displayedAnnouncements: [],
  pinnedAnnouncements: [],
}

const announcementReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOAD_STUDENT_ANNOUNCEMENT_DATA:
      return {
        ...state,
        displayedAnnouncements: [...payload.displayedAnnouncements],
        pinnedAnnouncements: [...payload.pinnedAnnouncements],
      }
    case LOAD_ADMIN_ANNOUNCEMENT_DATA:
      return {
        ...state,
        displayedAnnouncements: [...payload.displayedAnnouncements],
        pinnedAnnouncements: [...payload.pinnedAnnouncements],
        archivedAnnouncements: [...payload.archivedAnnouncements],
      }
    case CREATE_ANNOUNCEMENT:
    case UPDATE_ANNOUNCEMENT:
    case ARCHIVE_ANNOUNCEMENT:
    default:
      return state;
  }
}

export default announcementReducer;
