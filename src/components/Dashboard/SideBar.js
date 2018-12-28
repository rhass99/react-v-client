import React from 'react';
import PropTypes from 'prop-types';
// Material UI imported elements
import { ListItem, ListItemIcon, ListItemText, ListSubheader, Badge, Divider } from '@material-ui/core';
// Material UI imported Icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import CreateIcon from '@material-ui/icons/Create';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import NotificationsIcon from '@material-ui/icons/Notifications';

const SideBar = (props) => {
  // onTabChange passes the e => event which has currentTarger.id = tab index
  const { tabNames, onTabChange } = props
  return (
    <div>
      <ListItem button id={0}
        onClick={onTabChange}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary={tabNames[0]}/>
      </ListItem>
      <ListItem button id={1}
        onClick={onTabChange}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={tabNames[1]}/>
      </ListItem>
      <ListItem button id={2}
        onClick={onTabChange}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary={tabNames[2]} />
      </ListItem>
      <ListItem button id={3}
        onClick={onTabChange}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary={tabNames[3]} />
      </ListItem>
      <ListItem button id={4}
        onClick={onTabChange}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary={tabNames[4]}/>
      </ListItem>
      <ListItem button id={5}
        onClick={onTabChange}>
        <ListItemIcon>
          <Badge badgeContent={5} color="secondary">
            <NotificationsIcon />
          </Badge>
        </ListItemIcon>
        <ListItemText primary={tabNames[5]} />
      </ListItem>
      <Divider />
      <ListSubheader inset>Project Actions</ListSubheader>
      <ListItem button id={6}
        onClick={onTabChange}>
        <ListItemIcon>
          <NoteAddIcon />
        </ListItemIcon>
        <ListItemText primary={tabNames[6]} />
      </ListItem>
      <ListItem button id={7}
        onClick={onTabChange}>
        <ListItemIcon>
          <CreateIcon />
        </ListItemIcon>
        <ListItemText primary={tabNames[7]} />
      </ListItem>
      <ListItem button id={8}
        onClick={onTabChange}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary={tabNames[8]} />
      </ListItem>
    </div>
  );
}

SideBar.propTypes = {
  tabNames: PropTypes.array.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default SideBar;