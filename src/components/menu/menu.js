import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./menu.css"

class Menu extends Component {

    close = () => {
        this.props.onMenuClose();
    }

    render() {
        return (
            <div className={"side-menu " + (this.props.menuState ? "visible" : "")} >
                <ul className="mlinks">
                    <li><Link to="/" onClick={this.close}>Home</Link></li>
                    <li><Link to="/login" onClick={this.close}>Sign in</Link></li>
                </ul>
                <a className="cross" onClick={this.close}> <i className="fa fa-times"></i></a>
            </div >
        )
    }
}

export default Menu