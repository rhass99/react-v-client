import { UPDATE_AUTH } from '../constants';

const authReducer = (state={}, { type, payload }) => {
  if (type === UPDATE_AUTH) {
  const { loggedin, uid, email, emailVerified } = payload
    return { ...state,
            loggedin, uid, email, emailVerified }
  } else {
    return state
  }
}

export default authReducer;