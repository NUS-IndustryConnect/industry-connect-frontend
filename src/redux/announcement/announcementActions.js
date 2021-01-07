import {
  LOAD_STUDENT_ANNOUNCEMENT_DATA,
  LOAD_ADMIN_ANNOUNCEMENT_DATA,
  CREATE_ANNOUNCEMENT,
  UPDATE_ANNOUNCEMENT,
  ARCHIVE_ANNOUNCEMENT
} from "../types"
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

export const createAnnouncement = data => {
  return async (dispatch) => {
    await adminApi.announcements.postAnnouncement(data);
    dispatch({
      type: CREATE_ANNOUNCEMENT,
      payload: data,
    });
  }
}

export const updateAnnouncement = data => {
  return async (dispatch) => {
    await adminApi.announcements.updateAnnouncement(data);
    dispatch({
      type: UPDATE_ANNOUNCEMENT,
      payload: data,
    });
  }
}

export const archiveAnnouncement = id => {
  return async (dispatch) => {
    await adminApi.announcements.archiveAnnouncement(id);
    dispatch({
      type: ARCHIVE_ANNOUNCEMENT,
      payload: id,
    });
  }
}