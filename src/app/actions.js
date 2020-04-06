import { FILMS, PEOPLE } from "./constants"


const getFilms = () =>( {
    type: FILMS.LOAD
})
const setFilms = films => ({

    type: FILMS.LOAD_SUCCESS,
    films

})
const setErrorFilms = error => ({

    type: FILMS.LOAD_FAIL,
    error

})
const getPeople = () => ({
    type: PEOPLE.LOAD
})


const setPeople = people => ({
    type: PEOPLE.LOAD_SUCCESS,
    people

})

const setErrorPeople = error => ({
    type: PEOPLE.LOAD_FAIL,
    error

})

export { setErrorFilms, setErrorPeople, setFilms, setPeople, getFilms, getPeople }