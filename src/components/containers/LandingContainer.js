import React, { Component } from 'react';
import { fireauth } from '../modules/firebaseConfig';
import { updateAuth } from '../../redux/actions/auth-actions';

// Wraps the landing Component
export const mapStateToProps = ({ auth, user }) => {
  const { loggedin, uid, email, emailVerified } = auth;
  return {
    uid,
    email,
    emailVerified,
    loggedin,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    handleSignIn: () => {
      fireauth.onAuthStateChanged(user => {
        if (user) {
          dispatch(updateAuth({
            loggedin: true,
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
          }))
        } else {
            dispatch(updateAuth({
              loggedin: false,
              uid: null,
              email: null,
              emailVerified: false,
          }))
        }
      })
    }
  }
}

// Wraps any component that needs user_id, user_email and email_verification status data 
export const LandingContainer = WrappedComponent => class extends Component {
  static displayName = `LandingWrapper(${WrappedComponent.displayName || WrappedComponent.name})`
  render () {
    const { loggedin, handleSignIn } = this.props;
    return(
      <WrappedComponent  
      loggedin={loggedin}
      handleSignIn={handleSignIn}
      />
    );
  };
};

