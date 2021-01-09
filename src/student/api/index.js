import { getAnnouncementsApi } from './announcementsApi';
import { getCompanies } from './companies';
import { getPostsApi } from './postsApi';

const studentApi = {
  announcements: {
    getAnnouncementsApi
  },
  companies: {
    getCompanies
  },
  posts: {
    getPostsApi
  }
}

export default studentApi;