import { LOAD_STUDENT_COMPANY_POSTS_DATA } from "../types";

const initState = {
    isAdmin: false,
    archivedPosts: [],
    displayedPosts: [],
    pendingPosts: [],
}

const industryReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case LOAD_STUDENT_COMPANY_POSTS_DATA:
            return {
                ...state,
                isAdmin: false,
                displayedPosts: [...payload.displayedPosts]
            }
        default:
            return state;
    }
}

export default industryReducer;
