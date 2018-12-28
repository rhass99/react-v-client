import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// Import connect from react-redux
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button, TextField } from '@material-ui/core';
// Material UI imported Icons
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { stylesExperts } from '../../styles/createProjectStyles';
// Import Custom Components
import ServerList from '../UploadFiles/ServerList';
// Import CreateProject Container
import { mapStateToProps, mapDispatchToProps, CreateProjectContainer } from '../../containers/CreateProjectContainer';

class ExpertsComponent extends Component {

  render() {

    const { classes, handleAppLoading, uid, email, fileError, fileList, handleFileUpload, handleFileDelete, currentProject, handleProjectTab, currentProjectName, handleProjectName } = this.props;

    return (
      <div className={classes.root}>
        <form className={classes.mainForm}
        onSubmit={(e) => {handleProjectTab(e, 4)}} >
          <Typography
          className={classes.headline}
          variant="h6"
          >
          Experts
          </Typography>
          <div className={classes.expoertsContainer}>
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
            onClick={(e) => {handleProjectTab(e, 2)}} >
            Back
            </Button>
            <Button
            variant="contained"
            className={classes.buttonNext}
            color="primary" 
            type="submit" >
            Next
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Implement PropTypes

const Experts = connect(mapStateToProps, mapDispatchToProps)(CreateProjectContainer(withStyles(stylesExperts)(ExpertsComponent)));

// implement proptypes

export default Experts;