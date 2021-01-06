import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { loadStudentAnnouncementData, loadAdminAnnouncementData } from './announcement/announcementActions'
import { loadStudentCompanyPostsData } from './industry/industryActions'

import rootReducer from './rootReducer'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export const initStoreForStudent = () => {
  console.log('Initialising Data...')
  // TODO: wipe the store first?
  return async (dispatch) => {
    await dispatch(loadStudentAnnouncementData());
    await dispatch(loadStudentCompanyPostsData());
  }
}

export const initStoreForAdmin = () => {
  console.log('Initialising Data...')
  // TODO: wipe the store first?
  return async (dispatch) => {
    await dispatch(loadAdminAnnouncementData());
  }
}

export default store
