const initState = {
  type: "",
  token: null,
  isLoggedIn: false,
  lastLoggedIn: null,
  userInfo: {},
}

const userReducer = (state = initState, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
}

export default userReducer;
