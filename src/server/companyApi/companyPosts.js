import { api } from '../utils';

const getPostsByCompany = companyId => {
	// gets all company posts for a given company (even archived)
  return api.get(`/companyPost/company/${companyId}`)
  .then(response => response.data);
}

const getValidPostsByCompany = companyId => {
	// gets all active company posts for a given company
  return api.get(`/companyPost/company/${companyId}/valid`);
}

const getPostsByUser = companyUserId => {
	// gets all companyPosts for a specific user
  return api.get(`/companyPost/user/${companyUserId}`);
}

const companyPosts = {
  getPostsByCompany,
  getValidPostsByCompany,
  getPostsByUser,
}

export default companyPosts;
