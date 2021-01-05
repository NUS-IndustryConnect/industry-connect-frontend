import { LOAD_STUDENT_ANNOUNCEMENT_DATA } from "../types"
import { getAnnouncementsForStudents } from "../utils/announcementFunctions"

export const loadStudentAnnouncementData = () => {
    console.log('Loading Student Announcement Data...')
    return async (dispatch) => {
        await getAnnouncementsForStudents().then(announcements => {
            dispatch({
                type: LOAD_STUDENT_ANNOUNCEMENT_DATA,
                payload: announcements
            })
        }).catch(err => {
            throw err;
        })
    }
}
