import React, { Component } from 'react';
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    openAddFloorModal,
    closeAddFloorModal,
    addRoom,
    dropRoom,
    saveFloor,
    fetchFloor
} from '../../ducks/manage'

import FloorDisplay from './components/floor_display'

const mapStateToProps = (state, props) => {
    return Object.assign({}, state)
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        open_modal: bindActionCreators(openAddFloorModal, dispatch),
        close_modal: bindActionCreators(closeAddFloorModal, dispatch),
        add_room: bindActionCreators(addRoom, dispatch),
        drop_room: bindActionCreators(dropRoom, dispatch),
        save_floor: bindActionCreators(saveFloor, dispatch),
        fetch_floor: bindActionCreators(fetchFloor, dispatch)
    }
}

class Manage extends Component {

    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            floor_name: ""
        }
    }

    componentDidMount() {
        this.props.fetch_floor();
    }

    handleChange = (event) => {
        this.setState({ floor_name: event.target.value });
    }

    save = () => {
        this.props.save_floor({
            floor_name: this.state.floor_name,
            floor_plan: this.props.manageDucks.rooms
        })
    }

    render() {

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h3>Manage</h3>
                    </div>
                    <div className="col-12">
                        <button
                            className="btn btn-primary"
                            onClick={this.props.open_modal}>
                            Add floor</button>
                        <Modal
                            isOpen={this.props.manageDucks.add_floor_modal_opened}
                            onRequestClose={this.props.close_modal}>
                            <h1>Floor plan</h1>
                            Name :<input type="text" value={this.state.floor_name} onChange={this.handleChange} />
                            <button onClick={this.props.add_room}>Add room</button>
                            <FloorDisplay
                                rooms={this.props.manageDucks.rooms}
                                onDrop={this.props.drop_room}
                                dragable={false}
                            ></FloorDisplay>
                            <button onClick={this.props.close_modal}>Close</button>
                            <button onClick={this.save}>Save</button>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Manage)