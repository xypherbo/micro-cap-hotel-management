import React, { Component } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

class FloorDisplay extends Component {

    constructor(props) {
        super(props)
        this.props = props;
        console.log(this.props)
    }

    render() {

        return (
            <Stage width={800} height={600}>
                <Layer>
                    {this.props.rooms.map((room, i) => {
                        return <Rect
                            key={i}
                            x={room.x}
                            y={room.y}
                            fill={'green'}
                            width={room.width}
                            height={room.height}
                            draggable={this.props.dragable}
                            onDragMove={this.props.onDrop}
                        />
                    })}
                    {this.props.rooms.map((room, i) => {
                        return <Text
                            text={"R:" + i}
                            x={room.x + (room.width / 2)}
                            y={room.y + (room.height / 2)}
                        />
                    })}
                </Layer>
            </Stage>
        )
    }
}

export default FloorDisplay