import { combineReducers } from 'redux'

/* Reducers */
import userReducer from './user/userReducer'
import announcementsReducer from './announcementSlice';
import industryReducer from './industry'

const rootReducer = combineReducers({
  user: userReducer,
  announcements: announcementsReducer,
  industry: industryReducer,
})

export default rootReducer;
