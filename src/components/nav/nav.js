import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

class Navbar extends Component {
    render() {
        return (
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
            </ul>
        )
    }
}

export default Navbar