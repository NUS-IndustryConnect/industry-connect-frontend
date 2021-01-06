import { LOAD_STUDENT_COMPANY_POSTS_DATA } from "../types"
import { getCompanyPostForStudents } from "./industryFunctions"

export const loadStudentCompanyPostsData = () => {
  console.log('Loading Student Company Posts Data...')
  return async (dispatch) => {
    await getCompanyPostForStudents().then(posts => {
      dispatch({
        type: LOAD_STUDENT_COMPANY_POSTS_DATA,
        payload: posts
      })
    }).catch(err => {
      throw err;
    })
  }
}
