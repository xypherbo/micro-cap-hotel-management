export const OPEN_ADD_FLOOR_MODAL = 'OPEN_ADD_FLOOR_MODAL'
export const CLOSE_ADD_FLOOR_MODAL = 'CLOSE_ADD_FLOOR_MODAL'
export const SAVE_FLOOR = 'SAVE_FLOOR'
const ADD_ROOM = 'ADD_ROOM'
const ON_DROP_ROOM = 'ON_DROP_ROOM'

const initialState = {
    add_floor_modal_opened: false,
    floor: {},
    rooms: []
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case OPEN_ADD_FLOOR_MODAL:
            return Object.assign({}, state, {
                add_floor_modal_opened: true
            });
        case CLOSE_ADD_FLOOR_MODAL:
            return Object.assign({}, state, {
                add_floor_modal_opened: false
            });
        case ADD_ROOM:
            return Object.assign({}, state, {
                rooms: [...state.rooms, {
                    x: 20,
                    y: 20,
                    width: 50,
                    height: 50
                }]
            });
        case ON_DROP_ROOM:
            console.log(action.payload)
            return Object.assign({}, state, {
                rooms: state.rooms.map((room, index) => {
                    if (index === action.payload.target.index) {
                        return {
                            x: Math.round(action.payload.target._lastPos.x / 10) * 10,
                            y: Math.round(action.payload.target._lastPos.y / 10) * 10,
                            width: 50,
                            height: 50
                        };
                    }
                    return room;
                })
            });
        default:
            return state;
    }
}

export function openAddFloorModal() {
    return { type: OPEN_ADD_FLOOR_MODAL }
}

export function closeAddFloorModal() {
    return { type: CLOSE_ADD_FLOOR_MODAL }
}

export function addRoom() {
    return { type: ADD_ROOM }
}

export function saveFloor(floor) {
    return { type: SAVE_FLOOR, payload: floor }
}

export function dropRoom(pos) {
    return { type: ON_DROP_ROOM, payload: pos }
}