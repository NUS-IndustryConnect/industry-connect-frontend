import { LOAD_STUDENT_COMPANY_POSTS_DATA } from "../types";

const initState = {
  archivedPosts: [],
  displayedPosts: [],
  pendingPosts: [],
}

const industryReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case LOAD_STUDENT_COMPANY_POSTS_DATA:
      return {
        ...state,
        displayedPosts: [...payload.displayedPosts]
      }
    default:
      return state;
  }
}

export default industryReducer;
