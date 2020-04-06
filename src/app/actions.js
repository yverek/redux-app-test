import { filmsListSrv, peopleListSrv } from "./api/Api";

export const GET_FILMS_LIST = 'GET_FILMS_LIST';
export const GET_PEOPLE_LIST = 'GET_PEOPLE_LIST';
export const RENDER_FILMS_LIST = 'RENDER_FILMS_LIST';
export const RENDER_PEOPLE_LIST = 'RENDER_PEOPLE_LIST';

export  function getFilms( ) {
    return {
        type: GET_FILMS_LIST
    }
}
export function getPeople( ) {
    return {
        type: GET_PEOPLE_LIST
    }
}