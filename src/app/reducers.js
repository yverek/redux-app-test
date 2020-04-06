const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_FILMS_LIST':
            return { ...state };
        case 'GET_PEOPLE_LIST':
            return { ...state }
        default:
            return state;
    }
}

export default reducer