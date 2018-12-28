import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// Import connect from react-redux
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button, TextField } from '@material-ui/core';
// Material UI imported Icons
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { stylesUploadFiles } from '../../styles/createProjectStyles';
// Import Custom Components
import ServerList from '../UploadFiles/ServerList';
// Import CreateProject Container
import { mapStateToProps, mapDispatchToProps, CreateProjectContainer } from '../../containers/CreateProjectContainer';

class UploadFilesComponent extends Component {
  state = {
    chosenFile: null,
    chosenFileName: null,
  }

  handleChosenFile = (e) => this.setState({chosenFile: e});
  handleChosenFileName = (e) => this.setState({chosenFileName: e});

  // Set up mounting 
  componentDidMount() {
    this.props.handleGetFiles(this.props.uid, this.props.currentProject)
  }
  // Set up unmounting 
  componentWillUnmount = () => {
    // this.props.handleFileError("");
    // console.log('unmounting')
  }

  render() {
    console.log("uploadfile" + this.props)
    const { classes, handleAppLoading, uid, email, fileError, fileList, handleFileUpload, handleFileDelete, currentProject, handleProjectTab, currentProjectName } = this.props;

    return (
      <div className={classes.root}>
        <Typography
          className={classes.headline}
          variant="h6"
          >
          Upload Files
        </Typography>
        <form 
          className={classes.uploader}
          // handleUploading
          onSubmit={(e) => handleFileUpload(e, this.state.chosenFile, this.state.chosenFileName, uid, currentProject)}>
            <TextField
              required
              className={classes.fileName} 
              type="file"
              onChange={e => this.handleChosenFile(e.target.files[0])} />
            <TextField 
              className={classes.fileName}
              required
              type="text" 
              placeholder="Required File Name"
              onChange={e => this.handleChosenFileName(e.target.value)} />
            <Button
              className={classes.button}
              color="default" 
              type="submit">
              <CloudUploadIcon className={classes.leftIcon} />
              Upload File
            </Button>
        </form>
          <Typography
            className={classes.errormessage}
            >
            {fileError}
          </Typography>
          <div className={classes.fileList}>
            {
              fileList.map((el, i) => 
              <ServerList 
                key={i} 
                value={el.filename}
                avatar="file" 
                actions={
                  [{
                  action:()=>{},
                  name:"view"
                  },{
                  action:(e)=>{handleFileDelete(e, el.filename, uid, currentProject)},
                  name:"delete"
                  }]
                } 
              />)
            }
          </div>
          <div className={classes.buttonContainer}>
            <Button
            variant="contained"
            className={classes.buttonCancel}
            color="secondary" 
            onClick={()=>{}} >
            Cancel
            </Button>
            <Button
            variant="contained"
            className={classes.buttonBack}
            color="primary" 
            onClick={(e) => {handleProjectTab(e, 3)}} >
            Back
            </Button>
            <Button
            variant="contained"
            className={classes.buttonNext}
            color="primary"
            onClick={(e) => {handleProjectTab(e, 5)}}>
            Next
            </Button>
          </div>
      </div>
    );
  }
}

// Implement PropTypes

const UploadFiles = connect(mapStateToProps, mapDispatchToProps)(CreateProjectContainer(withStyles(stylesUploadFiles)(UploadFilesComponent)));

// implement proptypes

export default UploadFiles;