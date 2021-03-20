import { api } from "../utils";

export const getAnnouncements = async () => {
	return api.get("/announcement/student")
		.then(response => response.data.data)
    .catch(error => { throw error });
};
