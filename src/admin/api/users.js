// TODO: link up to BE API (temporary placeholder)
const exampleUsers = [
  {
    companyUserID: "1",
    companyID: "1",
    userEmail: "blah1@example.com",
    lastLoggedIn: new Date(),
    userPosts: ["1", "2", "3"]
  },
  {
    companyUserID: "2",
    companyID: "1",
    userEmail: "blah2@example.com",
    lastLoggedIn: new Date(),
    userPosts: []
  },
  {
    companyUserID: "3",
    companyID: "1",
    userEmail: "blah3@example.com",
    lastLoggedIn: new Date(),
    userPosts: []
  },
  {
    companyUserID: "4",
    companyID: "2",
    userEmail: "blah4@example.com",
    lastLoggedIn: new Date(),
    userPosts: []
  },
  {
    companyUserID: "5",
    companyID: "3",
    userEmail: "blah5@example.com",
    lastLoggedIn: new Date(),
    userPosts: []
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
    companyUserId: Math.floor(Math.random() * 100000),
    companyId: "1",
    lastLoggedIn: new Date(),
    userPosts: []

  };
  // return fetch('/companyUsers/create', {
  //   method: "POST",
  //   body: data,
  // })
}

const deleteUser = async companyUserID => {
  return companyUserID;
  // return fetch(`/companyUsers/${companyUserID}`, {
  //   method: "DELETE"
  // })
}

const usersApi = {
  getUsers,
  getUsersOfCompany,
  getUser,
  postUser,
  deleteUser,
}

export default usersApi;
