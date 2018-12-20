import React, { Component } from 'react';
import { fireauth } from '../modules/firebaseConfig';
import { toggleDashSide, updateDashTab, updateProjectTab } from '../../redux/actions/navActions';
import { updateAuth } from '../../redux/actions/auth-actions';

export const tabs = ['Profile', 'Summary', 'Current Project', 'Advisors', 'Reports', 'Notifications', 'Create Project', 'Edit Projects', 'Send Reminder']

export const mapStateToProps = (state) => {
  const { auth, nav } = state;
  return {
    uid: auth.uid,
    email: auth.email,
    emailVerified: auth.emailVerified,
    loggedin: auth.loggedin,
    dashboardTab: nav.dashboardTab,
    dashboardSideOpen: nav.dashboardSideOpen,
    projectTab: nav.projectTab
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    handleDrawerOpen: () => {
      dispatch(toggleDashSide(true))
    },
    handleDrawerClose: () => {
      dispatch(toggleDashSide(false))
    },
    handleTabChange: (e) => {
      dispatch(updateDashTab(e))
    },
    handleProjectStage: (e) => {
      dispatch(updateProjectTab(e))
    },
    signOut: () => {
      fireauth.signOut();
      dispatch(updateAuth({
        loggedin: false,
        uid: null,
        email: null,
        emailVerified: false,
    }))
    }
  }
}

// Wraps any component that needs App Navigation data 
export const DashboardContainer = WrappedComponent => class extends Component {
  static displayName = `NavWrapper(${WrappedComponent.displayName || WrappedComponent.name})`
  render () {
    const { dashboardTab, dashboardSideOpen, projectTab, handleDrawerOpen, handleDrawerClose, handleTabChange, handleProjectStage, uid, email, emailVerified, loggedin, signOut } = this.props;
    return(
      <WrappedComponent
      uid={uid} 
      email={email} 
      emailVerified={emailVerified} 
      loggedin={loggedin}
      signOut={signOut}
      dashboardTab={dashboardTab} 
      dashboardSideOpen={dashboardSideOpen}  
      projectTab={projectTab}
      handleDrawerOpen={handleDrawerOpen}
      handleDrawerClose={handleDrawerClose}
      handleTabChange={handleTabChange}
      handleProjectStage={handleProjectStage}
      />
    );
  };
};