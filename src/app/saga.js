import { all, call, put, takeEvery } from 'redux-saga/effects'
import { LOAD_FACTS_LIST, RENDER_FACTS_LIST } from './actions'

const axios = require('axios')

async function fetchAPI(url) {
    return await axios.get(url)
        .then(response => response)
        .catch(error => {
            console.log(error)
        })
}

export function* fetchFactsList() {
    const url = 'https://cat-fact.herokuapp.com/facts'
    const response = yield call(fetchAPI, url)
    
    yield put({ type: RENDER_FACTS_LIST, factsList: response.data.all.slice(0, 20) });
}

export function* loadFactsList() {
    yield takeEvery(LOAD_FACTS_LIST, fetchFactsList);
}

export default function* rootSaga() {
    yield all([loadFactsList()]);
}
