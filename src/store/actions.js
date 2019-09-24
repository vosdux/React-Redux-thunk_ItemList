import * as types from './actionsType';

export const itemsHasErrored = (bool) => {
    return {
        type: types.ITEMS_HAS_ERRORED,
        hasErrored: bool
    }   
}

export const itemsIsLoading = (bool) => {
    return {
        type: types.ITEMS_IS_LOADING,
        isLoading: bool
    }
}

export const itemsFetchDataSucces = (items) => {
    return {
        type: types.ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}

export const itemsFetchData = (url) => {
    return dispatch => {
        dispatch(itemsIsLoading(true))

        fetch(url)
            .then( response => {
                if (!response.ok) {
                    throw Error(response.statusText)
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(itemsFetchDataSucces(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}