import React, { Component } from 'react';
import { updateFileErr, updateFileList, updateCurrentProject, updateCurrentProjectName, updateCurrentProjectType, uploadFile, getCloudFiles, deleteCloudFile  } from '../../redux/actions/fileUpload-actions'
import { updateProjectTab, updateAppLoading } from '../../redux/actions/navActions'

export const mapStateToProps = ({ auth, fileUpload, nav }) => {
  const { uid, email } = auth;
  const { fileError, fileList, currentProject, currentProjectName, currentProjectType } = fileUpload;
  const { projectTab } = nav;

  return {
    uid,
    email,
    fileError,
    fileList,
    currentProject,
    projectTab,
    currentProjectName, 
    currentProjectType
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    handleFileError: (error="") => {
      dispatch(updateFileErr(error))
    },
    handleFileListUpdate: (fileList=[]) => {
      dispatch(updateFileList(fileList))
    },
    handleProjectId: (id="") => {
      dispatch(updateCurrentProject(id))
    },
    handleProjectName: (e) => {
      dispatch(updateCurrentProjectName(e.target.value))
    },
    handleProjectType: (e) => {
      dispatch(updateCurrentProjectType(parseInt(e.target.value)))
    },
    handleProjectTab: (e, tab) => {
      e.preventDefault();
      dispatch(updateProjectTab(tab))
    },
    handleAppLoading: (isLoading) => {
      dispatch(updateAppLoading(isLoading))
    },
    handleFileUpload: (e, file, filename, uid, projectName) => {
      e.preventDefault();
      dispatch(uploadFile(file, filename, uid, projectName))
    },
    handleFileDelete: (e, filename, uid, projectName) => {
      e.preventDefault();
      dispatch(deleteCloudFile(filename, uid, projectName))
    },
    handleGetFiles: (uid, projectName) => {
      dispatch(getCloudFiles(uid, projectName))
    }
  }
}



// Wraps Create project Sub Component
// Background, Questions, Experts, Upload files
export const CreateProjectContainer = WrappedComponent => class extends Component {
  static displayName = `CreateProjectWrapper(${WrappedComponent.displayName || WrappedComponent.name})`
  render () {
    return(
      <WrappedComponent {...this.props} />
    );
  };
};