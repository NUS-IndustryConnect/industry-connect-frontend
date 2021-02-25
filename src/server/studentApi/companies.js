import { api } from "../utils";

export const getCompanies = () => {
  return api.get("/company/student")
    .then(response => response.data)
    .catch(error => { throw error });
}
