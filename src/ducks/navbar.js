const OPEN_MENU = 'OPEN_MENU';
const CLOSE_MENU = 'CLOSE_MENU';

const initialState = {
    menu_opened: false
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case OPEN_MENU:
            return Object.assign({}, state, { menu_opened: true });
        case CLOSE_MENU:
            return Object.assign({}, state, { menu_opened: false });
        default:
            return state;
    }
}

export function open_menu() {
    return { type: OPEN_MENU };
}

export function close_menu() {
    return { type: CLOSE_MENU };
}

