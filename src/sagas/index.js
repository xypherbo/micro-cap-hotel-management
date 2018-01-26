import { fork, all } from 'redux-saga/effects'

import watchFirebase from './firebase'


export default function* root() {
    yield all([
        fork(watchFirebase)
    ])
}