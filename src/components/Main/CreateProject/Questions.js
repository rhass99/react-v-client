import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Material UI imported elements
import { Grid, Paper, Radio, RadioGroup, Typography, FormControl, FormControlLabel, Button, TextField } from '@material-ui/core';
import { stylesQuestions } from '../../styles/createProjectStyles';
// Import ProjectBackground Container
import { mapStateToProps, mapDispatchToProps, CreateProjectContainer } from '../../containers/CreateProjectContainer';

class QuestionsComponent extends Component {

  render() {
    console.log(this.props)
    const { classes, handleProjectId, handleAppLoading, handleProjectTab, projectTab, handleProjectName, handleProjectType, currentProjectName, currentProjectType  } = this.props;
    return (
      <div className={classes.root}>
        <form className={classes.mainForm}
        onSubmit={(e) => {handleProjectTab(e, 3)}} >
          <Typography
          className={classes.headline}
          variant="h6"
          >
          Questions
          </Typography>
          <div className={classes.questionsContainer}>
            <TextField
              value={currentProjectName}
              label="Question 1 *"
              className={classes.question}
              margin="normal"
              variant="outlined"
              onChange={handleProjectName}
              />
              <Button
              variant="contained"
              className={classes.addQuestionButton}
              onClick={() => {}} >
              + Add
            </Button>
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
            onClick={(e) => {handleProjectTab(e, 1)}} >
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

const Questions = connect(mapStateToProps, mapDispatchToProps)(CreateProjectContainer(QuestionsComponent));

export default withStyles(stylesQuestions)(Questions);