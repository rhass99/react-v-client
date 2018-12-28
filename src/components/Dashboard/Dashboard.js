import React from 'react';
// import PropTypes from 'prop-types';
// Import connect from react-redux
import { connect } from 'react-redux';
// Import Dashboard Container
import { tabs, mapStateToProps, mapDispatchToProps, DashboardContainer } from '../containers/DashboardContainer';
import classNames from 'classnames';
// Material UI imported elements
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, Drawer, AppBar, Toolbar, Typography, Divider, IconButton } from '@material-ui/core';
// Material UI imported Icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// Custom Components
import SideBar from './SideBar';
import Main from './Main';
// Custom CSS object
import { styles } from '../styles/dashboardStyle';


const DashboardComponent = (props) => {
  console.log("dash" + props)
  // Props recieved from Dashboard Container
  const { classes, dashboardTab, dashboardSideOpen, handleDrawerOpen, handleDrawerClose, handleTabChange, handleSignOut, appLoading } = props
  // Actual Return component
  return (
    
    <div className={classes.root}>
      <CssBaseline />
      {/* Application Top Bar */}
      <AppBar
        position="absolute"
        className={classNames(classes.appBar, dashboardSideOpen && classes.appBarShift)}
      >
        <Toolbar disableGutters={!dashboardSideOpen} className={classes.toolbar} >
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={classNames(
              classes.menuButton,
              dashboardSideOpen && classes.menuButtonHidden,
            )}
          >
            <MenuIcon />
          </IconButton>
          {/* Title of the Dashboard Tab */}
          <Typography
            component="h1"
            variant="h5"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {tabs[dashboardTab]}
          </Typography>
          {/* SignOut Button */}
          <IconButton color="inherit" onClick={handleSignOut}>
              <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Side Bar Container */}
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(classes.drawerPaper, !dashboardSideOpen && classes.drawerPaperClose),
        }}
        open={dashboardSideOpen}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {/* Side Bar Items */}
        <SideBar tabNames={tabs} onTabChange={handleTabChange}/>
      </Drawer>
      {/* Main Dashboard component */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <div>
          {/* Edit for App Loading Circular */}
          {appLoading === true ? <div>Loading</div> :
          <Main dashboardTab={dashboardTab} />}
        </div>
      </main>
    </div>
  );
}

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardContainer(withStyles(styles)(DashboardComponent)));

// implement proptypes

export default Dashboard;