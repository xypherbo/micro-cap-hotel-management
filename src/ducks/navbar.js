const OPEN_MENU = 'OPEN_MENU';
const CLOSE_MENU = 'CLOSE_MENU';
const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS'

const initialState = {
    menu_opened: false,
    signed_in: false
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case OPEN_MENU:
            return Object.assign({}, state, { menu_opened: true });
        case CLOSE_MENU:
            return Object.assign({}, state, { menu_opened: false });
        case SIGNIN_SUCCESS:
            return Object.assign({}, state, { signed_in: true });
        case SIGNOUT_SUCCESS:
            return Object.assign({}, state, { signed_in: false });
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

export function signIn() {
    return { type: SIGNIN_SUCCESS };
}

export function signOut() {
    return { type: SIGNOUT_SUCCESS }
}