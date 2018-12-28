import { combineReducers } from 'redux';

import auth from './auth-reducer';
import fileUpload from './fileUpload-reducer';
import nav from './nav-reducer';

export default combineReducers({	
  auth,
  fileUpload,
  nav,
});