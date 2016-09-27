import { types } from '../actions';


const initialState = {
  user: null
}

module.exports = (state, action) => {
  if (!state) return initialState
  
  switch (action.type) {
    
    case types.SET_USER:
      return Object.assign({}, state, {
        user: action.user,
      });
    case types.UNSET_USER:
      return Object.assign({}, state, {
        user: null,
      });
    default:
      return state
  }
}
