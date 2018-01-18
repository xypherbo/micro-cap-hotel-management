import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./menu.css"

class Menu extends Component {
    render() {
        return (
            <div className="side-menu">
                <ul className="mlinks">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                <a className="cross"> <i className="fa fa-times"></i></a>
            </div>
        )
    }
}

export default Menu