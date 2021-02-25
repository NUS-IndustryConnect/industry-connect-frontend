import { getAnnouncements } from "./announcements";
import { getCompanies } from "./companies";
import { getCompanyPosts } from "./companyPosts";

export const getCompaniesStudent = () => {
  return api.get("/company/student")
    .then(response => response.data)
    .catch(error => { throw error });
}

const studentApi = {
  getAnnouncements,
  getCompanyPosts,
  getCompanies,
}

export default studentApi;
