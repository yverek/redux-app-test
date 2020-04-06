import { filmsListSrv, peopleListSrv } from "./api/Api";

export const GET_FILMS_LIST = 'GET_FILMS_LIST';
export const GET_PEOPLE_LIST = 'GET_PEOPLE_LIST';

export const fetchGetFilmsList = () => {
    console.log('sto facendo partire la chiamata per i film nella action');
    
    return dispatch => {
        dispatch(getFilms())
        return filmsListSrv(res=> res, err => err) 
    }
}
export const fetchGetPeopleList = () => {
    console.log('sto facendo partire la chiamata per i film nella action');

    return dispatch => {
        dispatch(getPeople())
        return peopleListSrv(res=> res, err => err)
    }
}

function getFilms( ) {
    return {
        type: GET_FILMS_LIST
    }
}
function getPeople( ) {
    return {
        type: GET_PEOPLE_LIST
    }
}