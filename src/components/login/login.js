import React, { Component } from 'react';

import { Link } from 'react-router-dom';

var firebase = require('firebase');
var firebaseui = require('firebaseui');
var config = {
    apiKey: "AIzaSyDBt1G9araVMvUzpULK7Jcu-gD3d0INXig",
    authDomain: "hotel-1ec5c.firebaseapp.com",
    databaseURL: "https://hotel-1ec5c.firebaseio.com",
    projectId: "hotel-1ec5c",
    storageBucket: "hotel-1ec5c.appspot.com",
    messagingSenderId: "1059369533781"
};
firebase.initializeApp(config);
var ui = new firebaseui.auth.AuthUI(firebase.auth());

class Login extends Component {


    componentDidMount() {
        ui.start('#firebaseui-auth-container', {
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID
            ],
            signInFlow: 'popup',
            signInSuccessUrl: "localhost:3000/login",
            callbacks: {
                signInSuccess: function (currentUser, credential, redirectUrl) {
                    console.log(currentUser, credential, redirectUrl);
                    // User successfully signed in.
                    // Return type determines whether we continue the redirect automatically
                    // or whether we leave that to developer to handle.
                    return true;
                },
                uiShown: function () {
                    // The widget is rendered.
                    // Hide the loader.
                    document.getElementById('loader').style.display = 'none';
                }
            }
        });
    }

    render() {
        return (
            <div className="text-center mt-5">
                <h1>Sign in</h1>
                <div id="firebaseui-auth-container"></div>
                <div id="loader">Loading...</div>
            </div>


        )
    }
}

export default Login