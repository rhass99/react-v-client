import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Import connect from react-redux
import { connect } from 'react-redux';
import  { updateProjectTab } from '../../../redux/actions/navActions';
// Import custom components
import ProjectBackground from './ProjectBackground';
import ProjectInfo from './ProjectInfo';
import UploadFiles from './UploadFiles';
import Questoions from './Questions';
import Experts from './Experts';
// Material UI imported elements
import { Tabs, Tab } from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
  },
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width:'100%',
    justifyContent: 'space-around',
    marginBottom: theme.spacing.unit*3
  },
  tab: {
    display: 'flex',
  },
  main: {
    display:'flex',
  }
})


const CurrentTab = (props) => {
  const { projectTab } = props;
  switch(projectTab) {
    case 0:
      return <ProjectBackground />
    case 1:
      return <ProjectInfo />
    case 2:
      return <Questoions />
    case 3:
      return <Experts />
    case 4:
      return <UploadFiles />
    default:
      return null;
  }
}


class CreateProjectComponent extends Component {

  render() {
    console.log("createproject" + this.props)
    const { classes, projectTab, handleProjectTab } = this.props;
    return (
      <div className={classes.container}>
          <Tabs
            className={classes.tabs}
            value={projectTab}
            indicatorColor="primary"
            textColor="primary"
            centered
            onChange={handleProjectTab}
            >
              <Tab label="1- Create" disabled className={classes.tab}/>
              <Tab label="2- Information"  className={classes.tab}/>
              <Tab label="3- Questions"  className={classes.tab}/>
              <Tab label="4- Experts"  className={classes.tab}/>
              <Tab label="5- Files"  className={classes.tab}/>
              <Tab label="6- Review"  className={classes.tab}/>
          </Tabs>
        <CurrentTab
          className={classes.main}
          projectTab={projectTab} 
          />
      </div>
    )
  }
}

const mapStateToProps = ({ nav }) => {
  const { projectTab } = nav;
  return {projectTab}
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleProjectTab: (e, tab) => {
      e.preventDefault();
      dispatch(updateProjectTab(tab))
    }
  }
}
// implement proptypes

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CreateProjectComponent));
