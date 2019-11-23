import { combineReducers } from 'redux';

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

export function listurl(state = 'http://localhost:8080/api/employees', action) {
    switch (action.type) {
        case 'LIST_URL':
            return action.listurl;        default:
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

export function nitems(state = 0, action) {
    switch (action.type) {
        case 'N_ITEMS':
            return action.nitems;        default:
            return state;
    }
}

export function username(state = 'Guest', action) {
    switch (action.type) {
        case 'SET_USER':
            return action.username;        default:
            return state;
    }
}

export default combineReducers({
    items,
    isError,
    isLoading,
    listurl,
    loginsuccessfull,
    nitems,
    page,
    size,
    username
});