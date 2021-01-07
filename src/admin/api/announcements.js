// TODO: link up to BE API (temporary placeholder)
const exampleAnnouncements = [
  {
    announceID: 1,
    title: "Announcement title 1",
    subtitle: "Subtitle",
    description: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    lastUpdated: new Date(),
    isImportant: true,
    isValid: true,
    validTill: new Date(),
    announceBy: "author"
  },
  {
    announceID: 2,
    title: "Announcement title 2",
    subtitle: "Subtitle",
    description: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    lastUpdated: new Date(),
    isImportant: true,
    isValid: true,
    validTill: new Date(),
    announceBy: "author"
  },
  {
    announceID: 3,
    title: "Announcement title 3",
    subtitle: "Subtitle",
    description: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    lastUpdated: new Date(),
    isImportant: true,
    isValid: true,
    validTill: new Date(),
    announceBy: "author"
  },
  {
    announceID: 4,
    title: "Announcement title 4",
    subtitle: "Subtitle",
    description: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    lastUpdated: new Date(),
    isImportant: false,
    isValid: true,
    validTill: new Date(),
    announceBy: "author"
  },
  {
    announceID: 5,
    title: "Announcement title 5",
    subtitle: "Subtitle",
    description: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    lastUpdated: new Date(),
    isImportant: false,
    isValid: false,
    validTill: new Date(),
    announceBy: "author"
  }
];

const getAnnouncements = () => {
  return Promise.resolve(exampleAnnouncements);
}

const postAnnouncement = async data => {
  console.log("Posting announcement:", data);
  return {
    ...data,
    announceID: Math.floor(Math.random() * 1000000), // testing only
    lastUpdated: new Date(),
    isValid: true,
  };
  // return fetch('/announcement/add', {
  //   method: "POST",
  //   body: data,
  // });
}

const archiveAnnouncement = async id => {
  return id;
  // return fetch(`/announcement/archive/${id}`, {
  //   method: "POST"
  // })
}

const updateAnnouncement = async data => {
  return data;
  // return fetch(`/announcement/update/${data.id}`, {
  //   method: "POST",
  //   body: data,
  // })
}

const announcementsApi = {
  getAnnouncements,
  postAnnouncement,
  archiveAnnouncement,
  updateAnnouncement
}

export default announcementsApi;