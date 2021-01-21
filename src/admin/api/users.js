// TODO: replace with BE API calls
const exampleUsers = [
  {
    companyUserID: "1",
    companyID: "1",
    name: "blah1",
    userEmail: "blah1@example.com",
    lastLoggedIn: new Date(),
    userPosts: ["1", "2", "3"],
    isActive: true,
  },
  {
    companyUserID: "2",
    companyID: "1",
    name: "blah2",
    userEmail: "blah2@example.com",
    lastLoggedIn: new Date(),
    userPosts: [],
    isActive: true,
  },
  {
    companyUserID: "3",
    companyID: "1",
    name: "blah3",
    userEmail: "blah3@example.com",
    lastLoggedIn: new Date(),
    userPosts: [],
    isActive: true,
  },
  {
    companyUserID: "4",
    companyID: "2",
    name: "blah4",
    userEmail: "blah4@example.com",
    lastLoggedIn: new Date(),
    userPosts: [],
    isActive: true,
  },
  {
    companyUserID: "5",
    companyID: "3",
    name: "blah5",
    userEmail: "blah5@example.com",
    lastLoggedIn: new Date(),
    userPosts: [],
    isActive: false,
  }
]

const getRawUsers = () => {
  return Promise.resolve(exampleUsers);
}

const getUsers = async () => {
  return getRawUsers();
  // return fetch('/companyUsers/users');
}

const getUsersOfCompany = companyID => {
  return fetch(`/companyUsers/company/${companyID}`);
}

const getUser = async companyUserID => {
  return fetch(`/companyUsers/user/${companyUserID}`)
}

const postUser = async data => {
  return {
    ...data,
    companyUserID: Math.floor(Math.random() * 100000),
    companyID: "1",
    lastLoggedIn: new Date(),
    userPosts: [],
    isActive: true,

  };
  // return fetch('/companyUsers/create', {
  //   method: "POST",
  //   body: data,
  // })
}

const updateUser = async data => {
  return data;
  // return fetch('/companyUsers/update', {
  //   method: "POST",
  //   body: data,
  // })
}

const archiveUser = async companyUserID => {
  return companyUserID;
  // return fetch(`/companyUsers/archive/${companyUserID}`, {
  //   method: "POST"
  // })
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
  archiveUser,
  unarchiveUser,
}

export default usersApi;
