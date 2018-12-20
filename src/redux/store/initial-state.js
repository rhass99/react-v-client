// Convert this into a function that gets the state from local storage
// getInitialState = () => {}

export default {
  auth: {
    loggedin: false,
    uid: null,
    email: null,
    emailVerified: false,
  },
  fileUpload: {
    uploading: false,
    fileError: "",
    fileList: [],
    currentAdboard: null
  },
  nav: {
    dashboardTab:0,
    dashboardSideOpen:false,
    projectTab:0,
  }
}