const initState = {
    isAdmin: false,
    archivedAnnouncements: [],
    deletedAnnouncements: [],
    displayedAnnouncements: [],
    pinnedAnnouncements: [],
}

export default (state = initState, {type, payload}) => {
    switch (type) {
        default:
            return state;
    }
}