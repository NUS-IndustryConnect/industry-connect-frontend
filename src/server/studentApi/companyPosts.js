import { api } from "../utils";

export const getCompanyPosts = async () => {
	return api.get("/companyPost/student")
		.then(response => response.data)
		.catch(error => { throw error });
};
