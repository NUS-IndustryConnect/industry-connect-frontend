export const userSelector = state => state.user;
export const userInfoSelector = state => userSelector(state).userInfo;