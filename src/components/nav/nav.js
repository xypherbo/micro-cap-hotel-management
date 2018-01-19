import React, { Component } from 'react';
import Headroom from 'react-headroom';
import './nav.css';

class Navbar extends Component {

    open = () => {
        this.props.onMenuClick()
    }

    render() {
        return (
            <Headroom>
                <nav className="navbar navbar-dark bg-dark custom">
                    <a className="navbar-brand">Lorem ipsum</a>
                    <a className="menu" onClick={this.open}><i className="fa fa-bars"></i> Menu</a>
                </nav>
            </Headroom>
        )
    }
}

export default Navbar