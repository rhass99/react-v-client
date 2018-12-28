import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import classNames from 'classnames';
// Material UI imported elements
import { Paper, Radio, RadioGroup, Typography, FormControl, FormControlLabel, Button, TextField } from '@material-ui/core';
import { stylesProjBG } from '../../styles/createProjectStyles';
// Import ProjectBackground Container
import { mapStateToProps, mapDispatchToProps, CreateProjectContainer } from '../../containers/CreateProjectContainer';

class ProjectBackgroundComponent extends Component {

  render() {
    console.log(this.props)
    const { classes, handleProjectId, handleAppLoading, handleProjectTab, projectTab, handleProjectName, handleProjectType, currentProjectName, currentProjectType  } = this.props;
    return (
      // Implement Contact Details, Consent forms
      // Inform about the process
      <div className={classes.root}>
        <form className={classes.mainForm}
        onSubmit={(e) => {handleProjectTab(e, 1)}} >
          <TextField
            value={currentProjectName}
            label="Name"
            className={classes.idTextField}
            margin="normal"
            variant="outlined"
            onChange={handleProjectName}
          />
          <Typography
          className={classes.formLable}
          variant="h6"
          >
          Consultation Type
          </Typography>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            className={classes.radioGroup}
            value={currentProjectType.toString()}
            onChange={handleProjectType}
          >

            <FormControlLabel
            value="0"
            control={<Radio />} 
            label="Clinical Trial" 
            />
            <FormControlLabel 
            value="1"
            control={<Radio />} 
            label="Product In Development" 
            />
            <FormControlLabel
            value="2"
            control={<Radio />} 
            label="Patient Case" 
            />
            <FormControlLabel
            value="3"
            control={<Radio />}
            label="Other"
            />
          </RadioGroup>
        </FormControl>
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
            className={classes.buttonNext}
            color="primary" 
            type="submit">
            Create
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Implement PropTypes

const ProjectBackground = connect(mapStateToProps, mapDispatchToProps)(CreateProjectContainer(ProjectBackgroundComponent));

export default withStyles(stylesProjBG)(ProjectBackground);
