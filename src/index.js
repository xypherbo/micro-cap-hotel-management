import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar, Menu } from "./components"
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import Routes from "./routes.js"

import { Provider } from 'react-redux';
import configureStore from './store/config';
const store = configureStore();

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
