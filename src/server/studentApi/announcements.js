import { api } from "../utils";

export const getAnnouncements = async () => {
	console.log('Getting student announcements from database....');
	return api.get("/announcement/student")
		.then(response => response.data.data)
    .catch(error => { throw error });
};
