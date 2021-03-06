import { TOGGLE_DASH_SIDE, UPDATE_DASH_TAB, UPDATE_PROJECT_TAB, UPDATE_APP_LOADING } from '../constants';

const navReducer = (state={}, {type, payload}) => {
  switch(type) {
    case TOGGLE_DASH_SIDE:
      return {
        ...state,
        dashboardSideOpen : payload
      }
    case UPDATE_DASH_TAB:
      return {
        ...state,
        dashboardTab : payload
      }
    case UPDATE_PROJECT_TAB:
      return {
        ...state,
        projectTab : payload
      }
    case UPDATE_APP_LOADING:
      return {
        ...state,
        loading : payload
      }
    default:
      return state;
  }
}

export default navReducer;