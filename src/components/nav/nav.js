import React from 'react';
import Headroom from 'react-headroom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { open_menu } from '../../ducks/navbar'
import './nav.css';

const mapDispatchToProps = (dispatch, props) => {
    return {
        open: bindActionCreators(open_menu, dispatch)
    }
}

const Navbar = props => {
    return (
        <Headroom>
            <nav className="navbar navbar-dark bg-dark custom">
                <a className="navbar-brand">Lorem ipsum</a>
                <a className="menu" onClick={props.open}><i className="fa fa-bars"></i> Menu</a>
            </nav>
        </Headroom>
    )
}

export default connect(null, mapDispatchToProps)(Navbar)