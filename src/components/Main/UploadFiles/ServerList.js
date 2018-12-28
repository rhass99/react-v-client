import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Material UI imported elements
// import { withStyles } from '@material-ui/core/styles';
import { Avatar, IconButton, ListItemAvatar, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
// Material UI imported Icons
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

const RenderAvatar = (props) => {
  switch (props.avatar) {
    case "person":
      return <PersonIcon />
    case "project":
      return <BusinessCenterIcon />
    case "file":
      return <CloudDoneIcon />
    default:
      return <span></span>
  }
}

const RenderIconButton = (props) => {
  if (props.action) {
    switch (props.actionName) {
      case "addPerson":
        return (<IconButton id={props.id} onClick={(e) => props.action(e)} >
                  <PersonAddIcon  />
                </IconButton>)
      case "delete":
        return (<IconButton id={props.id} onClick={(e) => props.action(e)} >
                  <DeleteForeverIcon  />
                </IconButton>)
      case "view":
        return (<IconButton id={props.id} onClick={(e) => props.action(e)} >
                  <VisibilityIcon  />
                </IconButton>)
      default:
        return <span></span>
    }
  } else {
    return <span></span>
  }
}


class ServerList extends Component {
  render() {
    const { value, secondaryLine, avatar, actions } = this.props
    return (
      <List >
        <ListItem>
          <ListItemAvatar>

              <RenderAvatar avatar={avatar}/>

          </ListItemAvatar>
          <ListItemText
            primary={value}
            secondary={secondaryLine? secondaryLine:""}
          />
          <ListItemSecondaryAction>
            {actions.map((action, i) => <RenderIconButton key={i}
              id={value} action={action.action} actionName={action.name} index={i}
            />)}
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    )
  }
}



ServerList.propTypes = {
  // classes: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  actions: PropTypes.array.isRequired,
  avatar: PropTypes.string.isRequired,
  secondaryLine: PropTypes.array
};

export default ServerList;