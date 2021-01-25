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
  },
  {
    announceID: 6,
    title: "Announcement title 6",
    subtitle: "Subtitle",
    description: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    lastUpdated: new Date(),
    isImportant: false,
    isValid: true,
    validTill: new Date(),
    announceBy: "author"
  },
  {
    announceID: 7,
    title: "Announcement title 7",
    subtitle: "Subtitle",
    description: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    lastUpdated: new Date(),
    isImportant: false,
    isValid: true,
    validTill: new Date(),
    announceBy: "author"
  },
  {
    announceID: 8,
    title: "Announcement title 8",
    subtitle: "Subtitle",
    description: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    lastUpdated: new Date(),
    isImportant: false,
    isValid: true,
    validTill: new Date(),
    announceBy: "author"
  },
  {
    announceID: 9,
    title: "Announcement title 9",
    subtitle: "Subtitle",
    description: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    lastUpdated: new Date(),
    isImportant: false,
    isValid: true,
    validTill: new Date(),
    announceBy: "author"
  },
  {
    announceID: 10,
    title: "Announcement title 10",
    subtitle: "Subtitle",
    description: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    lastUpdated: new Date(),
    isImportant: false,
    isValid: true,
    validTill: new Date(),
    announceBy: "author"
  },
];
  
export const getAnnouncementsApi = () => {
  return Promise.resolve(exampleAnnouncements);
  // return fetch('/announcements/student');
}
  