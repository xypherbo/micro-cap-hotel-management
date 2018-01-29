import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signOut } from '../../ducks/firebase'
import { close_menu } from '../../ducks/navbar'

import Menulink from './components/link'
import "./menu.css"


const mapStateToProps = (state, props) => {
    return Object.assign({}, state)
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        signout: bindActionCreators(signOut, dispatch),
        close_menu: bindActionCreators(close_menu, dispatch)
    }
}

class Menu extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className={"side-menu " + (this.props.navbarDucks.menu_opened ? "visible" : "")} >
                <ul className="mlinks">
                    <Menulink close_menu={this.props.close_menu} path="/" label="Home"></Menulink>
                    <Menulink close_menu={this.props.close_menu} path="/floorplan" label="Floor Plan"></Menulink>
                    <Menulink close_menu={this.props.close_menu} path="/manage" label="Manage"></Menulink>
                    <Menulink close_menu={this.props.close_menu} path="/login" label="Sign in" className={!this.props.firebaseDucks.login ? null : 'd-none'}></Menulink>
                    <li className={this.props.firebaseDucks.login ? null : 'd-none'}><a onClick={this.props.signout} >Sign out</a></li>
                </ul>
                <a className="cross" onClick={this.props.close_menu}> <i className="fa fa-times"></i></a>
            </div >
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)