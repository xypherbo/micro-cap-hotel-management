import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import firebase from 'firebase';
import { Provider } from 'react-redux';


import { Navbar, Menu } from "./components"
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Routes from "./routes.js"
import configureStore from './store/config';
import { signInSuccess } from './ducks/firebase'

import rootSaga from './sagas'

const store = configureStore();
store.runSaga(rootSaga)


const config = {
    apiKey: "AIzaSyDBt1G9araVMvUzpULK7Jcu-gD3d0INXig",
    authDomain: "hotel-1ec5c.firebaseapp.com",
    databaseURL: "https://hotel-1ec5c.firebaseio.com",
    projectId: "hotel-1ec5c",
    storageBucket: "hotel-1ec5c.appspot.com",
    messagingSenderId: "1059369533781"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(signInSuccess(user))
    }
})

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Navbar></Navbar>
                <Menu></Menu>
                <Routes></Routes>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
