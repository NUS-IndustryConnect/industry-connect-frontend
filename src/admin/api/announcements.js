import { api } from ".";

// TODO: replace with BE API calls
const exampleAnnouncements = [
  {
    announceID: 1,
    title: "Announcement title 1",
    subtitle: "Subtitle",
    description: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    lastUpdated: new Date(),
    isImportant: true,
    isActive: true,
    validTill: new Date(),
    announceBy: "author"
  }
];

const getAnnouncements = () => {
  return api.get("/announcement/admin")
  .then(response => response.data.data)
  .catch(error => { throw error });
}

const postAnnouncement = async data => {
  return api.post("/announcement/add", data)
  .then(response => {
    return response.data;
  })
  .catch(error => {
    console.error(error);
    return [];
  });
}

const archiveAnnouncement = async id => {
  return id;
  // return api.post(`/announcement/archive/${id}`)
}

const unarchiveAnnouncement = async id => {
  return id;
}

const updateAnnouncement = async data => {
  return data;
  // return api.post(`/announcement/update/${data.id}`, data);
}

const announcementsApi = {
  getAnnouncements,
  postAnnouncement,
  archiveAnnouncement,
  unarchiveAnnouncement,
  updateAnnouncement
}

export default announcementsApi;
