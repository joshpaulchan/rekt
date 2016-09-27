////////////////////////////////////////////////////////////////////////////////
// ACTIONS /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// TYPES /////////////////////////////////////////////////////////////////////

const LOG_IN = '@@auth/SUBMIT_LOGIN_FORM';
const ADD = '@@test/ADD';
const SET_USER = '@@app/SET_USER';
const UNSET_USER = '@@app/UNSET_USER';

// ACTIONS /////////////////////////////////////////////////////////////////////

// `setUser`
// 
// This function sets the current global logged-in user to the application, if
// any
// 
// @params: user<Object>: the user object that has just logged in
// @returns: action<Object>:
//    type<String> : actions.SET_USER type
//    user<Object> : user object
function setUser(user) {
  // TODO: replace with a dispatch
  // this.setState({ user });
  return {
    type: SET_USER,
    user
  }
}

// `unsetUser`
// 
// This function unsets the current global logged-in user to the application, if
// any
// 
// @params: null
// @returns: action<Object>:
//    type<String> : actions.UNSET_USER type
function unsetUser(user) {
  // TODO: replace with a dispatch
  // this.setState({ user });
  return {
    type: UNSET_USER
  }
}

function logIn(data) {
  return {
    type: LOG_IN,
    payload: data
  }
}

function add(num) {
  return {
    type: ADD,
    payload: num
  }
}

////////////////////////////////////////////////////////////////////////////////
// EXPORTS /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

module.exports = {
  types: {
    LOG_IN,
    ADD,
    SET_USER,
    UNSET_USER
  },
  actions: {
    logIn,
    add,
    setUser,
    unsetUser
  }
}
