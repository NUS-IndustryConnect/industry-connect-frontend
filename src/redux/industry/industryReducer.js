const initState = {
    isAdmin: false,
    archivedPosts: [],
    displayedPosts: [],
    pendingPosts: [],
}

const industryReducer = (state = initState, {type, payload}) => {
    switch (type) {
        default:
            return state;
    }
}

export default industryReducer;
