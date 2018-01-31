import { fork, all } from 'redux-saga/effects'

import watchFirebase from './firebase'
import watchManage from './manage'


export default function* root() {
    yield all([
        fork(watchFirebase),
        fork(watchManage)
    ])
}