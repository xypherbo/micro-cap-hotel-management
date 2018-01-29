import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Login, Floorplan, Manage } from './components';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/floorplan" component={Floorplan} />
                <Route path="/manage" component={Manage} />
            </Switch>
        )
    }
}

export default Routes