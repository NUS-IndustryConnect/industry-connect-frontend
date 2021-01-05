import { LOAD_STUDENT_ANNOUNCEMENT_DATA } from "../types";

const initState = {
    isAdmin: false,
    archivedAnnouncements: [],
    displayedAnnouncements: [],
    pinnedAnnouncements: [],
}

const announcementReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case LOAD_STUDENT_ANNOUNCEMENT_DATA:
            return {
                ...state,
                isAdmin: false,
                displayedAnnouncements: [...payload.displayedAnnouncements],
                pinnedAnnouncements: [...payload.pinnedAnnouncements]
            }
        default:
            return state;
    }
}

export default announcementReducer;
