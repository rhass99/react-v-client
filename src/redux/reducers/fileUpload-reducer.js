import { UPDATE_FILE_LIST, UPDATE_UPLOAD_CIRCLE, UPDATE_FILE_ERR, UPDATE_CURRENT_ADBOARD } from '../constants';

const fileUploadReducer = (state={}, {type, payload}) => {
  switch (type) {
    case UPDATE_FILE_LIST:
      return {...state, 
        fileList: payload
      }
    case UPDATE_UPLOAD_CIRCLE:
      return {...state, 
        uploading: payload
      }
    case UPDATE_FILE_ERR:
      return {...state, 
        fileError: payload
      }
    case UPDATE_CURRENT_ADBOARD:
      return {...state, 
        currentAdboard: payload
      }
    default:
      return state;
  }
}

export default fileUploadReducer;