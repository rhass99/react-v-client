import { UPDATE_AUTH } from '../constants';

const authReducer = (state={}, { type, payload }) => {
  if (type === UPDATE_AUTH) {
    const { uid, email, emailVerified, loggedin } = payload;
    return {...state,
            uid, email, emailVerified, loggedin
          }
  } else {
    return state
  }
}

export default authReducer;