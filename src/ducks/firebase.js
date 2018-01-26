const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS'
const SIGNOUT_FAIL = 'SIGNOUT_FAIL'
export const SIGNOUT = 'SIGNOUT'

const initialState = {
    login: false,
    user_data: {}
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SIGNIN_SUCCESS:
            return Object.assign({}, state, {
                login: true,
                user_data: action.payload
            });
        case SIGNOUT_SUCCESS:
            return Object.assign({}, state, { login: false });
        case SIGNOUT_FAIL:
        default:
            return state;
    }
}

export function signInSuccess(user_data) {
    return { type: SIGNIN_SUCCESS, payload: user_data };
}

export function signOut() {
    return { type: SIGNOUT }
}

export function signOutSuccess() {
    return { type: SIGNOUT_SUCCESS }
}

export function signOutFail() {
    return { type: SIGNOUT_FAIL }
}