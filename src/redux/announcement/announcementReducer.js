const initState = {
    isAdmin: false,
    archivedAnnouncements: [],
    deletedAnnouncements: [],
    displayedAnnouncements: [],
    pinnedAnnouncements: [],
}

const announcementReducer = (state = initState, {type, payload}) => {
    switch (type) {
        default:
            return state;
    }
}

export default announcementReducer;
