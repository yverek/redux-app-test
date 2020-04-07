import { put, takeEvery, call } from 'redux-saga/effects';
import { PEOPLE, FILMS } from './constants';
import { peopleListSrv } from './api/Api';

function* workerSaga() {

    
    console.log("pippo dell'inps");
    console.log(put({ type: 'ACTION_FROM_WORKER' }))
    console.log('load people')    
    yield call (peopleListSrv(res=> res, err => err) )

    yield put({ type: 'ACTION_FROM_WORKER' })
}

function* loadPeopleSaga() {
    console.log('load people')
    const data = peopleListSrv(res=> res, err => err)
    console.log(data);

    

}
function* loadFilmsSaga() {
    console.log('load films');
    
}
function* rootSaga() {
    
    console.log('rootSaga is work')
    yield takeEvery('HELLO', workerSaga)
    yield takeEvery(PEOPLE.LOAD, loadPeopleSaga)
    yield takeEvery(FILMS.LOAD, loadFilmsSaga)

}
export default rootSaga;