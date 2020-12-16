const initState = {
    isAdmin: false,
    acceptedPosts: [],
    archivedPosts: [],
    deletedPosts: [],
    displayedPosts: [],
    pinnedPosts: [],
    pendingPosts: [],
    rejectedPosts: [],
}

export default (state = initState, {type, payload}) => {
    switch (type) {
        default:
            return state;
    }
}