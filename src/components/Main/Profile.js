import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

class Profile extends Component {
  
  state = {
    counter: 0,
  };
  
  render() {
    const { classes } = this.props;

    return (
      <div>
      <Typography variant="h5" gutterBottom component="h2">
        Company name
      </Typography>
      <Paper className={classes.root}>
      </Paper>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);