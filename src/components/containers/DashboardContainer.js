import React, { Component } from 'react';
import { fireauth } from '../modules/firebaseConfig';
import { toggleDashSide, updateDashTab, updateAppLoading } from '../../redux/actions/navActions';
import { updateAuth } from '../../redux/actions/auth-actions';

export const tabs = ['Profile', 'Summary', 'Active Consultation', 'Experts', 'Reports', 'Notifications', 'Create New', 'Edit Current', 'Send Reminder']

export const mapStateToProps = ({ nav }) => {
  const { dashboardTab, dashboardSideOpen, appLoading } = nav;
  return {
    dashboardTab,
    dashboardSideOpen,
    appLoading
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
      dispatch(updateDashTab(parseInt(e.currentTarget.id)))
    },
    handleAppLoading: (isLoading) => {
      dispatch(updateAppLoading(isLoading))
    },
    handleSignOut: () => {
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
    const { dashboardTab, dashboardSideOpen, handleDrawerOpen, handleDrawerClose, handleTabChange, handleSignOut, appLoading, handleAppLoading } = this.props;
    return(
      <WrappedComponent
      handleSignOut={handleSignOut}
      dashboardTab={dashboardTab}
      appLoading={appLoading}
      dashboardSideOpen={dashboardSideOpen}  
      handleDrawerOpen={handleDrawerOpen}
      handleDrawerClose={handleDrawerClose}
      handleTabChange={handleTabChange}
      handleAppLoading={handleAppLoading}
      />
    );
  };
};