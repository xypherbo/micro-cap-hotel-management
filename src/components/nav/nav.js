import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';
import './nav.css';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };

    }

    show() {
        console.log("show")
        this.state.isToggleOn = !this.state.isToggleOn;
        console.log(this.state.isToggleOn)
    }

    render() {
        return (
            <Headroom>
                <nav className="navbar navbar-dark bg-dark custom">
                    <a className="navbar-brand">Lorem ipsum {this.props.name}</a>
                    <a className="menu" onClick={this.show}><i className="fa fa-bars"></i> Menu</a>
                </nav>
            </Headroom>
        )
    }
}

export default Navbar