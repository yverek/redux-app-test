import { RENDER_FACTS_LIST } from './actions'

const initialState = {
    factsList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RENDER_FACTS_LIST:
            return {
                ...state,
                factsList: action.factsList
            }
        default:
            return state;
    }
}

export default reducer
