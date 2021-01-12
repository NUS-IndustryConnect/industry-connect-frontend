// TODO: replace with BE API calls
const exampleStudents = [
  {
    studentID: "1",
    name: 'Andrew Lim',
    lastLoggedIn: new Date(),
    numOfLogins: 3,
    announcementIds: ["1", "2", "3"],
    companyPosts: ["1", "2", "3"],
  },
  {
    studentID: "2",
    name: 'Bernard Ong',
    lastLoggedIn: new Date(),
    numOfLogins: 2,
    announcementIds: ["1", "2", "3"],
    companyPosts: [],
  },
  {
    studentID: "3",
    name: 'Charlotte Lau',
    lastLoggedIn: new Date(),
    numOfLogins: 8,
    announcementIds: [],
    companyPosts: ["1", "2", "3"],
  },
  {
    studentID: "4",
    name: 'David Chew',
    lastLoggedIn: new Date(),
    numOfLogins: 3,
    announcementIds: [],
    companyPosts: [],
  },
  {
    studentID: "5",
    name: 'Ella Chen',
    lastLoggedIn: new Date(),
    numOfLogins: 10,
    announcementIds: ["2"],
    companyPosts: ["1", "4"],
  }
]

const getStudentsApi = () => {
  return Promise.resolve(exampleStudents);
}
