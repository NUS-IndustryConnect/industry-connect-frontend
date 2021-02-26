export const pluraliseThunk = thunk => ids => dispatch => {
  return Promise.all(
    ids.map(
      id => dispatch(thunk(id))
    )
  )
}

export const putPayloadToState = (state, action) => action.payload;
export const putPayloadToData = (state, action) => {
  state.data = action.payload;
}