import { LOAD_STUDENT_ANNOUNCEMENT_DATA, LOAD_ADMIN_ANNOUNCEMENT_DATA } from "../types"
import { getAnnouncementsForStudents } from "./announcementFunctions"

import adminApi from '../../admin/api';

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
    try {
      const announcements = await adminApi.announcements.getAnnouncements();
      dispatch({
        type: LOAD_ADMIN_ANNOUNCEMENT_DATA,
        payload: announcements
      });
    }
    catch (err) {
      throw err;
    }
  }
}