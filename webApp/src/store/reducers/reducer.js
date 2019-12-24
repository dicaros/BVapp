import { combineReducers } from 'redux';
import { url } from '../actions/action-type';

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

}

export function isLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;        default:
            return state;
    }
}

export function listurl(state = url+'api/games', action) {
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

export function myuserurl(state = url+'api/myUserDetails', action) {
    switch (action.type) {
        case 'MYUSER_URL':
            return action.myuserurl;        default:
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

export function useritems(state = [], action) {
    switch (action.type) {
        case 'USER_FETCH_DATA_SUCCESS':
            return action.useritems;        default:
            return state;
    }
}

export function registration(state = [], action) {
    switch (action.type) {
        case 'REGISTRATION_STATUS':
            return action.registration;        default:
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
    myuserurl,
    nitems,
    page,
    registration,
    size,
    useritems,
    username,
});