import firebase from 'firebase';
import { call, put, takeLatest } from 'redux-saga/effects'
import { SAVE_FLOOR, saveFloorSuccess, saveFloorFail } from '../ducks/manage'

function* saveFloor(action) {
    try {
        let payload = action.payload;
        yield call(() => {
            firebase.database().ref('floors/' + payload.floor_name).set(payload.floor_plan)
        })
        yield put(saveFloorSuccess());
    } catch (err) {
        console.log(err);
        yield put(saveFloorFail());
    }
}

export default function* () {
    yield takeLatest(SAVE_FLOOR, saveFloor);
}
