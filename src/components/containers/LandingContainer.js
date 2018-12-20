import React, { Component } from 'react';
import { fireauth } from '../modules/firebaseConfig';
import { updateAuth } from '../../redux/actions/auth-actions';

export const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    uid: auth.uid,
    email: auth.email,
    emailVerified: auth.emailVerified,
    loggedin: auth.loggedin,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => {
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

// Wraps any component that needs user_id, user_email and email_verification status data 
export const LandingContainer = WrappedComponent => class extends Component {
  static displayName = `LandingWrapper(${WrappedComponent.displayName || WrappedComponent.name})`
  render () {
    const { uid, email, emailVerified, loggedin, signIn, signOut } = this.props;
    return(
      <WrappedComponent 
      uid={uid} 
      email={email} 
      emailVerified={emailVerified} 
      loggedin={loggedin}
      signIn={signIn}
      signOut={signOut}
      />
    );
  };
};

