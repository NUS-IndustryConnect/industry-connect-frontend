import { combineReducers } from 'redux'

/** Reducers */
import userReducer from './user/userReducer'
import announcementReducer from './announcement/announcementReducer'
import industryReducer from './industry/industryReducer'

export default combineReducers({
    user: userReducer,
    announcement: announcementReducer,
    industry: industryReducer,
})