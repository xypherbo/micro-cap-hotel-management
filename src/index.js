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
