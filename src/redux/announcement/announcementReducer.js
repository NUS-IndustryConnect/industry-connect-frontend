import { LOAD_STUDENT_ANNOUNCEMENT_DATA, LOAD_ADMIN_ANNOUNCEMENT_DATA } from "../types";

const initState = {
  archivedAnnouncements: [],
  displayedAnnouncements: [],
  pinnedAnnouncements: [],
}

const announcementReducer = (state = initState, {type, payload}) => {
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
    default:
      return state;
  }
}

export default announcementReducer;
