import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDBt1G9araVMvUzpULK7Jcu-gD3d0INXig",
    authDomain: "hotel-1ec5c.firebaseapp.com",
    databaseURL: "https://hotel-1ec5c.firebaseio.com",
    projectId: "hotel-1ec5c",
    storageBucket: "hotel-1ec5c.appspot.com",
    messagingSenderId: "1059369533781"
};
firebase.initializeApp(config);

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/signedIn',
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