import { call, put, takeEvery } from 'redux-saga/effects'
import { getFilmsList, getPeopleList } from './api';

function* fetchFilmList(action) {
    try {
        const filmList = yield call(getFilmsList, action.payload.filmList)
        yield put({ type: "FILMS_FETCH_SUCCEEDED", filmList: filmList })
    } catch (e) {
        yield put({ type: "FILMS_FETCH_FAILED", message: e.message })
    }
}

function* fetchPeopleList(action) {
    try {
        const peopleList = yield call(getPeopleList, action.payload.peopleList)
        yield put({ type: "PEOPLE_FETCH_SUCCEEDED", peopleList: peopleList })
    } catch (e) {
        yield put({ type: "PEOPLE_FETCH_FAILED", message: e.message })
    }
}

function* swFilmSaga() {
    yield takeEvery("FILMS_FETCH_REQUESTED", fetchFilmList)
}

function* swPeopleSaga() {
    yield takeEvery("PEOPLE_FETCH_REQUESTED", fetchPeopleList)
}

export { swFilmSaga, swPeopleSaga }