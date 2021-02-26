import { api } from '../utils';

// TODO: WAITING FOR COMPANY AUTHENTICATION
// this should be the implementation of getPosts
// once company authentication is done
const getPosts = () => {
	// gets all company posts for a given company (even archived)
  return api.get("/companyPost")
  .then(response => response.data);
}

// TODO: WAITING FOR COMPANY AUTHENTICATION
// this should be the implementation of getPosts
// once company authentication is done
const getPostsByCompany = companyID => {
	// gets all company posts for a given company (even archived)
  return api.get(`/companyPost/company/${companyID}`);
}

const getValidPostsByCompany = companyID => {
	// gets all active company posts for a given company
  return api.get(`/companyPost/company/${companyID}/valid`);
}

const getPostsByUser = companyUserId => {
	// gets all companyPosts for a specific user
  return api.get(`/companyPost/user/${companyUserId}`);
}

const companyPosts = {
	getPosts,
  getPostsByCompany,
  getValidPostsByCompany,
  getPostsByUser,
}

export default companyPosts;
