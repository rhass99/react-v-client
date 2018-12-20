import { UPDATE_FILE_LIST, UPDATE_UPLOAD_CIRCLE, UPDATE_FILE_ERR, UPDATE_CURRENT_ADBOARD } from '../constants';

export const updateUploadCircle = (payload) => ({
  type: UPDATE_UPLOAD_CIRCLE,
  payload
})

export const updateFileErr = (payload) => ({
  type: UPDATE_FILE_ERR,
  payload
})

export const updateFileList = (payload) => ({
  type: UPDATE_FILE_LIST,
  payload
})

export const updateCurrentAdboard = (payload) => ({
  type: UPDATE_CURRENT_ADBOARD,
  payload
})

