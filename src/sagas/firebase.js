import firebase from 'firebase';
import { call, put, takeLatest } from 'redux-saga/effects'
import { SIGNOUT, signOutSuccess, signOutFail } from '../ducks/firebase'

function* logout() {
    try {
        yield call(() => { firebase.auth().signOut() })
        yield put(signOutSuccess());
    } catch (err) {
        yield put(signOutFail());
    }
}

export default function* () {
    yield takeLatest(SIGNOUT, logout);
}
