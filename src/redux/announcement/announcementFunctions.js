/* eslint-disable eqeqeq */
import { getAnnouncementsApi } from "../../student/api/announcementsApi";
import { getAnnouncements } from '../../admin/api/announcements';

export const getAnnouncementsForStudents = async () => {
    console.log('Getting announcements for students from database....');
    let studentAnnouncements;
    await getAnnouncementsApi().then(all => {
        studentAnnouncements = all
    })
    return {
        displayedAnnouncements: studentAnnouncements.filter(item => !item.isImportant),
        pinnedAnnouncements: studentAnnouncements.filter(item => item.isImportant),
    };
};

export const getAnnouncementsForAdmin = async () => {
    console.log('Getting announcements for admin from database....');
    const response = await getAnnouncements();
    return response;
}

export const announcementsSelector = id => state => {
    const {
        archivedAnnouncements,
        displayedAnnouncements,
        pinnedAnnouncements,
    } = state.announcement;

    // TODO: kinda inefficient but how else can we do it
    return pinnedAnnouncements.find(elem => elem.announceID == id)
     || displayedAnnouncements.find(elem => elem.announceID == id)
     || archivedAnnouncements.find(elem => elem.announceID == id);
}