export const BASE_URL = `https://winuat11-i.comp.nus.edu.sg/IR3`;

export const pluraliseThunk = thunk => ids => dispatch => {
  return Promise.all(
    ids.map(
      id => dispatch(thunk(id))
    )
  )
}
