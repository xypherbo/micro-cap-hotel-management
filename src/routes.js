import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Login } from './components';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        )
    }
}

export default Routes