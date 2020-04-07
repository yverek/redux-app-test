import {put, takeEvery } from 'redux-saga/effects';

function* workerSaga() {
    debugger
    console.log("pippo dell'inps");
    console.log(put({type: 'ACTION_FROM_WORKER'}))
    yield put({type: 'ACTION_FROM_WORKER'})
}
export default function* rootSaga(){
    debugger
    console.log('rootSaga is work')
    yield takeEvery('HELLO', workerSaga())

}
