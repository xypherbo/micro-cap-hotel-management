import React, { Component } from 'react';
import Modal from 'react-modal'
import { Stage, Layer, Rect, Text } from 'react-konva';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    openAddFloorModal,
    closeAddFloorModal,
    addRoom,
    dropRoom,
    saveFloor
} from '../../ducks/manage'

const mapStateToProps = (state, props) => {
    return Object.assign({}, state)
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        open_modal: bindActionCreators(openAddFloorModal, dispatch),
        close_modal: bindActionCreators(closeAddFloorModal, dispatch),
        add_room: bindActionCreators(addRoom, dispatch),
        drop_room: bindActionCreators(dropRoom, dispatch),
        save_floor: bindActionCreators(saveFloor, dispatch)
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
                            <Stage width={800} height={600}>
                                <Layer>
                                    {this.props.manageDucks.rooms.map((room, i) => {
                                        return <Rect
                                            key={i}
                                            x={room.x}
                                            y={room.y}
                                            fill={'green'}
                                            width={room.width}
                                            height={room.height}
                                            draggable={true}
                                            onDragMove={this.props.drop_room}
                                        />
                                    })}
                                    {this.props.manageDucks.rooms.map((room, i) => {
                                        return <Text
                                            text={"R:" + i}
                                            x={room.x + (room.width / 2)}
                                            y={room.y + (room.height / 2)}
                                        />
                                    })}
                                </Layer>
                            </Stage>
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