import { FILMS, PEOPLE } from "./constants"
import { filmsListSrv, peopleListSrv } from './api/Api'


const getFilms = () =>( {
    type: FILMS.LOAD
})
const setFilms = () => {
    const films = filmsListSrv()
    console.log(films)
    return { type: FILMS.LOAD_SUCCESS,
    films
    }
}
const setErrorFilms = error => ({

    type: FILMS.LOAD_FAIL,
    error

})
const getPeople = () => ({
    type: PEOPLE.LOAD
})


const setPeople = () => {
    return{ type: PEOPLE.LOAD_SUCCESS,
    people
}
}

const setErrorPeople = error => ({
    type: PEOPLE.LOAD_FAIL,
    error

})

export { setErrorFilms, setErrorPeople, setFilms, setPeople, getFilms, getPeople }