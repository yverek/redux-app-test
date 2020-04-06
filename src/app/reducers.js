import { GET_FILMS_LIST, GET_PEOPLE_LIST, RENDER_PEOPLE_LIST, RENDER_FILMS_LIST } from "./actions";

const initialState = {
    films:{},
    people:{}
}

export default function starwarsApp (state =  initialState, action){
    switch (action.type){
        case RENDER_FILMS_LIST:
            return {
                ...state,
                films: action.films
            }
        case RENDER_PEOPLE_LIST:
            return {
                ...state,
                people: action.people    
            }
        default:
            return state;
    }
}