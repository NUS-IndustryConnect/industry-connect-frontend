<<<<<<< HEAD
// TODO: link up to BE API (temporary placeholder)
const exampleAnnouncements = [
  {
    announcementID: 1,
    announcementTitle: "Announcement title 1",
    announcementSubtitle: "Subtitle",
    announcementBody: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    lastUpdated: new Date(),
    isImportant: true
  },
  {
    announcementID: 2,
    announcementTitle: "Announcement title 2",
    announcementSubtitle: "Subtitle",
    announcementBody: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    lastUpdated: new Date(),
    isImportant: true
  },
  {
    announcementID: 3,
    announcementTitle: "Announcement title 3",
    announcementSubtitle: "Subtitle",
    announcementBody: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    lastUpdated: new Date(),
    isImportant: true
  },
  {
    announcementID: 4,
    announcementTitle: "Announcement title 4",
    announcementSubtitle: "Subtitle",
    announcementBody: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    lastUpdated: new Date(),
    isImportant: false
  },
  {
    announcementID: 5,
    announcementTitle: "Announcement title 5",
    announcementSubtitle: "Subtitle",
    announcementBody: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    lastUpdated: new Date(),
    isImportant: false
  }
];

export const getAnnouncements = () => {
  return Promise.resolve(exampleAnnouncements);
}

=======
// TODO: replace with BE API calls
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
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
