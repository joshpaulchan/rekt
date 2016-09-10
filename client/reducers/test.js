import { types } from '../actions';


const initialState = {
  count: 0
}

module.exports = (state, action) => {
  if (!state) return initialState
  
  console.log("[reducer] state", state);
  console.log("[reducer] action", action);
  
  switch (action.type) {
    
    case types.ADD:
      return Object.assign({}, state, {
        count: state.count + action.payload
      });
    default:
      return state
  }
}
