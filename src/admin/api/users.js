import { api } from ".";

// TODO: replace with BE API calls
const exampleUsers = [
  {
    companyUserID: "1",
    companyId: "1",
    name: "blah1",
    userEmail: "blah1@example.com",
    lastLoggedIn: new Date(),
    userPosts: ["1", "2", "3"],
    isActive: true,
    isLocked: true,
    lockedUntil: new Date(),
  },
  {
    companyUserID: "2",
    companyId: "1",
    name: "blah2",
    userEmail: "blah2@example.com",
    lastLoggedIn: new Date(),
    userPosts: [],
    isActive: true,
    isLocked: false,
    lockedUntil: null,
  },
  {
    companyUserID: "3",
    companyId: "1",
    name: "blah3",
    userEmail: "blah3@example.com",
    lastLoggedIn: new Date(),
    userPosts: [],
    isActive: true,
    isLocked: false,
    lockedUntil: null,
  },
  {
    companyUserID: "4",
    companyId: "2",
    name: "blah4",
    userEmail: "blah4@example.com",
    lastLoggedIn: new Date(),
    userPosts: [],
    isActive: true,
    isLocked: false,
    lockedUntil: null,
  },
  {
    companyUserID: "5",
    companyId: "3",
    name: "blah5",
    userEmail: "blah5@example.com",
    lastLoggedIn: new Date(),
    userPosts: [],
    isActive: false,
    isLocked: false,
    lockedUntil: null,
  }
]

const getUsers = async () => {
  // return Promise.resolve(exampleUsers);
  return api.get('/companyUsers/users')
  .then(response => response.data.data)
  .catch(error => { throw error });
}

const getUsersOfCompany = companyId => {
  return api.get(`/companyUsers/company/${companyId}`);
}

const getUser = async companyUserID => {
  return api.get(`/companyUsers/user/${companyUserID}`)
}

const postUser = async data => {
  return {
    ...data,
    companyUserID: Math.floor(Math.random() * 100000),
    companyId: "1",
    lastLoggedIn: new Date(),
    userPosts: [],
    isActive: true,
    isLocked: false,
    lockedUntil: null,

  };
  // return api.post('/companyUsers/create', data);
}

const updateUser = async data => {
  return data;
  // return api.post('/companyUsers/update', data);
}

const unlockUser = async companyUserID => {
  return companyUserID;
}

const archiveUser = async companyUserID => {
  return companyUserID;
  // return api.post(`/companyUsers/archive/${companyUserID}`);
}

const unarchiveUser = async companyUserID => {
  return companyUserID;
}

const usersApi = {
  getUsers,
  getUsersOfCompany,
  getUser,
  postUser,
  updateUser,
  unlockUser,
  archiveUser,
  unarchiveUser,
}

export default usersApi;
