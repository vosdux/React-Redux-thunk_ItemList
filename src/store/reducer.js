import * as types from './actionsType'

const initialState = {
    hasErrored: false,
    isLoading: true,
    items: []
}

const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case types.ITEMS_HAS_ERRORED:
            return {
                ...state,
                hasErrored: action.hasErrored
            };
        case types.ITEMS_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case types.ITEMS_FETCH_DATA_SUCCESS:
            return {
                ...state,
                items: action.items
            };
        default:
            return state;
    }
}
export default reducer;