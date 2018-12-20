import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui'
import firebase from '../modules/firebaseConfig';
import { fireauth } from '../modules/firebaseConfig';
import * as firebaseui from 'firebaseui';
// Dashboard Component
import Dashboard from '../Dashboard/Dashboard';
// Import connect from react-redux
import { connect } from 'react-redux';
// Import Landing Container
import { mapStateToProps, mapDispatchToProps, LandingContainer } from '../containers/LandingContainer';

// Landing view funcitonal component
const LandingComponent = (props) => {
  
  const { loggedin, uid, email, emailVerified, signIn, signOut } = props;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      signIn()
    }
  });

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // Email is the auth provider.
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => signIn()
    }
  };

  return (
    <div>
      {
        loggedin === true ?
        <Dashboard />:
        <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={fireauth}
        />
      }
    </div>
  )
}
const Landing = connect(mapStateToProps, mapDispatchToProps)(LandingContainer(LandingComponent))

export default Landing