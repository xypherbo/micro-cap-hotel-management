import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { open_menu } from '../../ducks/navbar'

import "./menu.css"


const mapStateToProps = (state, props) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        open: bindActionCreators(open_menu, dispatch)
    }
}


class Menu extends Component {

    constructor() {
        super();
        this.state = {
            loggedIn: false
        }

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user);
                this.setState({ loggedIn: true });
            }
        })
    }

    logout = () => {
        firebase.auth().signOut().then(() => {
            this.setState({ loggedIn: false });
            this.close();
        }, (err) => {
            console.log("Logout failed")
        })
    }

    close = () => {
        this.props.onMenuClose();
    }

    render() {
        return (
            <div className={"side-menu " + (this.props.menuState ? "visible" : "")} >
                <ul className="mlinks">
                    <li><Link to="/" onClick={this.close}>Home</Link></li>
                    <li className={!this.state.loggedIn ? null : 'd-none'}><Link to="/login" onClick={this.close} >Sign in</Link></li>
                    <li className={this.state.loggedIn ? null : 'd-none'}><a onClick={this.logout} >Sign out</a></li>
                </ul>
                <a className="cross" onClick={this.close}> <i className="fa fa-times"></i></a>
            </div >
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)