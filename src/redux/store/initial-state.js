// Convert this into a function that gets the state from local storage
// getInitialState = () => {}

export default {
  auth: {
    uid: null,
    email: null,
    emailVerified: false,
    loggedin: false,
  },
  fileUpload: {
    fileError: "",
    fileList: [],
    currentProject: "two",
    currentProjectName: "",
    currentProjectType: 0
  },
  nav: {
    dashboardTab:6,
    dashboardSideOpen:false,
    projectTab:0,
    appLoading:false,
  },
  createProject: {
  }
}