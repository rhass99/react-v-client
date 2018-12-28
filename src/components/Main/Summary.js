import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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

// Display Data
let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

// Bring from API
const data = [
  createData('Created at:', 159, 6.0, 24, 4.0),
  createData('Days running:', 237, 9.0, 37, 4.3),
  createData('Advisors involved:', 262, 16.0, 24, 6.0),
  createData('Questions posted:', 305, 3.7, 67, 4.3),
  createData('Answers recieved:', 356, 16.0, 49, 3.9),
  createData('Pending responses:', 356, 16.0, 49, 3.9),
];


const ProjectsSummary = (props) => {
  const { classes } = props;
  return (
    <div>
    <Typography variant="h5" gutterBottom component="h2">
      Recent Projects
    </Typography>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Parameters</TableCell>
            <TableCell numeric>Product / Topic 1</TableCell>
            <TableCell numeric>Product / Topic 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell numeric>{n.calories}</TableCell>
                <TableCell numeric>{n.calories}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    </div>
  );
}

// implement proptypes

export default withStyles(styles)(ProjectsSummary);