import React from 'react';
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
// Custom CSS object
import { styles } from '../styles/dashboardStyle';


const DashboardComponent = (props) => {
  console.log(props)
  const { classes, dashboardTab, dashboardSideOpen, projectTab, handleDrawerOpen, handleDrawerClose, handleTabChange, handleProjectStage, uid, email, emailVerified, loggedin, signOut } = props
  return (
    <div className={classes.root}>
      <CssBaseline />
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
          <Typography
            component="h1"
            variant="h5"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {tabs[dashboardTab]}
          </Typography>
          <IconButton color="inherit" onClick={signOut}>
              <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
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
        {/* <SideBar tabNames={tabs} onTabChange={this.handleTabChange}/> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <div>
          {/* <MainComponent currentTab={this.state.currentTab} email_verified={email_verified} /> */}
        </div>
      </main>
    </div>
  );
}

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardContainer(withStyles(styles)(DashboardComponent)));

export default Dashboard;