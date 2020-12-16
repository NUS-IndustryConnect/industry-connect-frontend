const initState = {
    type: "",
    token: null,
    isLoggedIn: false,
    lastLoggedIn: null,
    userInfo: {},
}

export default (state = initState, {type, payload}) => {
    switch (type) {
        default:
            return state;
    }
}