import { combineReducers } from 'redux'

/** Reducers */
import userReducer from './user/userReducer'
import announcementReducer from './announcement/announcementReducer'
import industryReducer from './industry/industryReducer'

const rootReducer = combineReducers({
  user: userReducer,
  announcement: announcementReducer,
  industry: industryReducer,
})

export default rootReducer;
