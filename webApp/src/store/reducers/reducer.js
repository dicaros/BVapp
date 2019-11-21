import { combineReducers } from 'redux';

// reducers.js
export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;        default:
            return state;
    }

}export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;        default:
            return state;
    }
}export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;        default:
            return state;
    }
}
export function loginsuccessfull(state = false, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return action.loginsuccess;        default:
            return state;
    }
}


export function page(state = 0, action) {
    switch (action.type) {
        case 'CURRENT_PAGE':
            return action.page;        default:
            return state;
    }
}
export function size(state = 10, action) {
    switch (action.type) {
        case 'CURRENT_SIZE':
            return action.size;        default:
            return state;
    }
}

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    page,
    size,
    loginsuccessfull
});