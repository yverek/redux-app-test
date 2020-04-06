import { combineReducers } from "@reduxjs/toolkit";
import { loadingFilmsReducer, filmsReducer, errorFilmsReducer } from "./filmsReducer";
import { loadingPeopleReducer, errorPeopleReducer, peopleReducer } from "./peopleReducer";

const rootReducer = combineReducers({
    isLoadingFilms: loadingFilmsReducer,
    films: filmsReducer,
    errorFilms: errorFilmsReducer,
    isLoadingPeople: loadingPeopleReducer,
    people: peopleReducer,
    errorPeople: errorPeopleReducer
})

export  default rootReducer;