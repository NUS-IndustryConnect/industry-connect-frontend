import { api } from "../utils";

const getAnnouncements = async () => {
	return api.get("/announcement/admin")
		.then(response => response.data.data)
		.catch(error => { throw error });
}

const postAnnouncement = async data => {
	return api.post("/announcement/add", data)
		.then(response => response.data.data)
		.catch(error => {
			console.error(error);
			return [];
		});
}

const archiveAnnouncement = async id => {
	const body = { announceID: id };
	return api.put(`/announcement/archive/${id}`, body)
		.then(response => response.data.data);
}

const unarchiveAnnouncement = async id => {
	// TODO: BE API missing
	return id;
}

const updateAnnouncement = async data => {
	return api.put(`/announcement/update/${data.announceID}`, data)
		.then(response => response.data.data);
}

const announcements = {
	getAnnouncements,
	postAnnouncement,
	archiveAnnouncement,
	unarchiveAnnouncement,
	updateAnnouncement
}

export default announcements;
