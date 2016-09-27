import { types } from '../actions';


const initialState = {
  user: null
}

module.exports = (state, action) => {
  if (!state) return initialState
  
  // console.log("[reducer] state", state);
  // console.log("[reducer] action", action);
  
  switch (action.type) {
    
    case types.SET_USER:
      return Object.assign({}, state, {
        user: action.user
      });
    default:
      return state
  }
}
