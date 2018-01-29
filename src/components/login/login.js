import React, { Component } from 'react';
import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
};

class Login extends Component {

    render() {
        return (
            <div className="text-center mt-5">
                <h1>Sign in</h1>
                <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>

        )
    }
}

export default Login