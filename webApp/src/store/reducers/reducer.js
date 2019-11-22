import { combineReducers } from 'redux';

// reducers.js
export function isError(state = false, action) {
    switch (action.type) {
        case 'IS_ERROR':
            return action.hasErrored;        default:
            return state;
    }

}export function isLoading(state = false, action) {
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
export function loginsuccessfull(state = null, action) {
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
    isError,
    isLoading,
    page,
    size,
    loginsuccessfull
});