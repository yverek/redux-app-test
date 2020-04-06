import { GET_FILMS_LIST, GET_PEOPLE_LIST } from "./actions";

const initialState = {
    films:[],
    people:[]
}

export default function starwarsApp (state =  initialState, action){
    switch (action.type){
        case GET_FILMS_LIST:

        case GET_PEOPLE_LIST:
            
        default:
            return state;
    }
}