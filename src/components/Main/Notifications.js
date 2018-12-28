import React from 'react';
// import PropTypes from 'prop-types';
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

const Notifications = (props) => {
  const { classes } = props;
  return (
    <div>
    <Typography variant="h5" gutterBottom component="h2">
      Notifications
    </Typography>
    <Paper className={classes.root}>
    </Paper>
    </div>
  );
}

// Implement PropTypes

export default withStyles(styles)(Notifications);