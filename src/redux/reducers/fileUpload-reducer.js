import { UPDATE_FILE_LIST, UPDATE_FILE_ERR, UPDATE_CURRENT_PROJECT, UPDATE_CURRENT_PROJECT_NAME, UPDATE_CURRENT_PROJECT_TYPE } from '../constants';

const fileUploadReducer = (state={}, {type, payload}) => {
  switch (type) {
    case UPDATE_FILE_LIST:
      return {...state, 
        fileList: payload
      }
    case UPDATE_FILE_ERR:
      return {...state, 
        fileError: payload
      }
    case UPDATE_CURRENT_PROJECT:
      return {...state, 
        currentProject: payload
      }
    case UPDATE_CURRENT_PROJECT_NAME:
      return {...state, 
        currentProjectName: payload
      }
    case UPDATE_CURRENT_PROJECT_TYPE:
      return {...state, 
        currentProjectType: payload
      }
    default:
      return state;
  }
}

export default fileUploadReducer;