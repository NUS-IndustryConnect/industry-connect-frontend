import { getAnnouncementsApi } from "../../student/api/announcementsApi";

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
