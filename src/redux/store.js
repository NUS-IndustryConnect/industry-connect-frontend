import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { loadStudentAnnouncementData } from './announcement/announcementActions'
import { loadStudentCompanyPostsData } from './industry/industryActions'

import rootReducer from './rootReducer'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export const initStore = () => {
  console.log('Initialising Data...')
    return async (dispatch) => {
        await dispatch(loadStudentAnnouncementData());
        await dispatch(loadStudentCompanyPostsData());
    }
}

export default store
