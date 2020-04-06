import { all, put, takeEvery } from 'redux-saga/effects';
import { RENDER_FILMS_LIST, GET_FILMS_LIST, RENDER_PEOPLE_LIST,GET_PEOPLE_LIST } from './actions';
import { peopleListSrv, filmsListSrv } from './api/Api';

export function* fetchGetFilmsList() {
    console.log('sto facendo partire la chiamata per i film nella action');
    
    let data = filmsListSrv(res=> res, err => err) 
    yield put({type: RENDER_FILMS_LIST, films: data})
    
}
export function* loadFilmsListSaga (){
    console.log('parte la saga loadFilm');
    
    yield takeEvery(GET_FILMS_LIST, fetchGetFilmsList())

}
export function* fetchGetPeopleList ()  {
    console.log('sto facendo partire la chiamata per i film nella action');
    let data =  peopleListSrv(res => res, err =>err )
    yield put({type:RENDER_PEOPLE_LIST, people: data})
}

export function*  loadPeopleListSaga(){
    console.log('parte la saga loadPeople');
    yield takeEvery (GET_PEOPLE_LIST, fetchGetPeopleList())

}
export function* rootSaga(){
    yield all([loadFilmsListSaga(),loadPeopleListSaga()])
}