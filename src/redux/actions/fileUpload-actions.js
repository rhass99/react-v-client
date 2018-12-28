import { UPDATE_FILE_LIST, UPDATE_FILE_ERR, UPDATE_CURRENT_PROJECT, UPDATE_CURRENT_PROJECT_NAME, UPDATE_CURRENT_PROJECT_TYPE } from '../constants';
import { axiosGetFiles, uploadFileToFirebase, deleteFileFromFirebase} from '../../components/modules/storageAsync';
import { updateAppLoading } from './navActions';
import {batchActions} from 'redux-batched-actions';

export const updateFileErr = (payload) => ({
  type: UPDATE_FILE_ERR,
  payload
})

export const updateFileList = (payload) => ({
  type: UPDATE_FILE_LIST,
  payload
})

export const updateCurrentProject = (payload) => ({
  type: UPDATE_CURRENT_PROJECT,
  payload
})

export const updateCurrentProjectName = (payload) => ({
  type: UPDATE_CURRENT_PROJECT_NAME,
  payload
})

export const updateCurrentProjectType = (payload) => ({
  type: UPDATE_CURRENT_PROJECT_TYPE,
  payload
})

export const getCloudFiles = (uid, projectName) => dispatch => 
axiosGetFiles(uid, projectName)
  .then(files => dispatch(updateFileList(files.data.data.storedFiles)))
  .catch(err => dispatch(updateFileErr("Unable to retrieve File List please refresh or contact support if problem persists")));

export const uploadFile = (file, filename, uid, projectName) => dispatch => 
uploadFileToFirebase(file, filename, uid, projectName)
  .then(() => axiosGetFiles(uid, projectName)
    .then(files => dispatch(updateFileList(files.data.data.storedFiles)))
    .catch(err => dispatch(updateFileErr("Unable to retrieve File List please refresh or contact support if problem persists"))))
  .catch(err => dispatch(updateFileErr(`Cannot upload ${filename} to server`)));

export const deleteCloudFile = (filename, uid, projectName) => dispatch =>
deleteFileFromFirebase(filename, uid, projectName)
  .then(() => axiosGetFiles(uid, projectName)
    .then(files => dispatch(updateFileList(files.data.data.storedFiles)))
    .catch(err => dispatch(updateFileErr("Unable to retrieve File List please refresh or contact support if problem persists"))))
  .catch(err => dispatch(updateFileErr(`Cannot delete ${filename}`)))