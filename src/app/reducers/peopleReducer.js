import { PEOPLE } from "../constants";


const peopleReducer = (state = {}, action) => {
    switch (action.type) {
        case PEOPLE.LOAD:
            return state
        case PEOPLE.LOAD_SUCCESS:
            return [...state, action.people]
        case PEOPLE.LOAD_FAIL:
            return state
        default:
            return state
    }
}
const loadingPeopleReducer = (state = false, action) => {
    switch (action.type) {
        case PEOPLE.LOAD:
            return true
        case PEOPLE.LOAD_SUCCESS:
            return false
        case PEOPLE.LOAD_FAIL:
            return false
        default:
            return state
    }
}
const errorPeopleReducer = (state = {}, action) => {
    switch (action.type) {
        case PEOPLE.LOAD:
            return null
        case PEOPLE.LOAD_SUCCESS:
        case PEOPLE.LOAD_FAIL:
            return action.error    
        default:
            return state
    }
}

export { peopleReducer, errorPeopleReducer, loadingPeopleReducer }