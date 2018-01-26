import firebase from 'firebase';
import { call, put, takeLatest } from 'redux-saga/effects'
import { SIGNOUT, signOutSuccess, signOutFail } from '../ducks/firebase'

function* logout() {
    try {
        console.log("aaaa");
        yield call(signOut)
        yield put(signOutSuccess());
    } catch (err) {
        yield put(signOutFail());
    }
}

function signOut() {
    firebase.auth().signOut();
}

export default function* watchLogout() {
    yield takeLatest(SIGNOUT, logout);
}