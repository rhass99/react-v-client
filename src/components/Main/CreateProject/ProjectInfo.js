import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Material UI imported elements
import { Grid, Paper, Radio, RadioGroup, Typography, FormControl, FormControlLabel, Button, TextField } from '@material-ui/core';
import { stylesProjInfo } from '../../styles/createProjectStyles';
// Import ProjectBackground Container
import { mapStateToProps, mapDispatchToProps, CreateProjectContainer } from '../../containers/CreateProjectContainer';

class ProjectInfoComponent extends Component {

  render() {
    console.log(this.props)
    const { classes, handleProjectId, handleAppLoading, handleProjectTab, projectTab, handleProjectName, handleProjectType, currentProjectName, currentProjectType  } = this.props;
    return (
      <div className={classes.root}>
        <form className={classes.mainForm}
        onSubmit={(e) => {handleProjectTab(e, 2)}} >
          <Typography
          className={classes.headline}
          variant="h6"
          >
          Consultation Information
          </Typography>
          <TextField
            value={currentProjectName}
            label="Product name / ClinicalTrial / Patient id *"
            className={classes.idTextField}
            margin="normal"
            variant="outlined"
            onChange={handleProjectName}
          />
          <div className={classes.formContainer1}>
          <TextField
            value=""
            label="Website (Optional)"
            className={classes.formTextField1}
            margin="normal"
            variant="outlined"
            onChange={()=>{}}
          />
          <TextField
            label="Soft Deadline *"
            value=""
            type="date"
            className={classes.formTextField1}
            margin="normal"
            onChange={()=>{}}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Hard Deadline *"
            value=""
            type="date"
            className={classes.formTextField1}
            margin="normal"
            onChange={()=>{}}
            InputLabelProps={{
              shrink: true,
            }}
          />
          </div>
          <TextField
            value=""
            multiline
            rows={15}
            label="Description *"
            className={classes.descriptionField}
            margin="normal"
            variant="outlined"
            onChange={()=>{}}
          />
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

const ProjectInfo = connect(mapStateToProps, mapDispatchToProps)(CreateProjectContainer(ProjectInfoComponent));

export default withStyles(stylesProjInfo)(ProjectInfo);