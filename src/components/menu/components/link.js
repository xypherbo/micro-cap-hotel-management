import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menulink extends Component {

    constructor(props) {
        super(props)
        this.props = props;
    }

    render() {
        return (
            <li>
                <Link to={this.props.path} onClick={this.props.close_menu}>{this.props.label}</Link>
            </li>
        )
    }
}

export default Menulink