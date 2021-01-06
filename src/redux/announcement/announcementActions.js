import { LOAD_STUDENT_ANNOUNCEMENT_DATA, LOAD_ADMIN_ANNOUNCEMENT_DATA } from "../types"
import { getAnnouncementsForStudents, getAnnouncementsForAdmin } from "./announcementFunctions"

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

export const loadAdminAnnouncementData = () => {
    console.log('Loading Admin Announcement Data...')
    return async (dispatch) => {
        await getAnnouncementsForAdmin().then(announcements => {
            dispatch({
                type: LOAD_ADMIN_ANNOUNCEMENT_DATA,
                payload: announcements
            })
        }).catch(err => {
            throw err;
        })
    }
}