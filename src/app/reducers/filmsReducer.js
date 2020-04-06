import { FILMS } from "../constants";


const filmsReducer = (state = {}, action) => {
    switch (action.type) {
        case FILMS.LOAD:
            return state
        case FILMS.LOAD_SUCCESS:
            return [...state, action.films]
        case FILMS.LOAD_FAIL:
            return state
        default:
            return state
    }
}
const loadingFilmsReducer = (state = false, action) => {
    switch (action.type) {
        case FILMS.LOAD:
            return true
        case FILMS.LOAD_SUCCESS:
            return false
        case FILMS.LOAD_FAIL:
            return false
        default:
            return state
    }
}
const errorFilmsReducer = (state = {}, action) => {
    switch (action.type) {
        case FILMS.LOAD:
            return null
        case FILMS.LOAD_SUCCESS:
        case FILMS.LOAD_FAIL:
            return action.error    
        default:
            return state
    }
}

export { filmsReducer, errorFilmsReducer, loadingFilmsReducer }