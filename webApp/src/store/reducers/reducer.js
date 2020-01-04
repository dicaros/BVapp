import { combineReducers } from 'redux';

export function navigate(state = 'games', action) {
    switch (action.type) {
        case 'SET_NAVIGATE':
            return action.navigate;        default:
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
export function size(state = 1000000, action) {
    switch (action.type) {
        case 'CURRENT_SIZE':
            return action.size;        default:
            return state;
    }
}

export function currentgame(state = 0, action) {
    switch (action.type) {
        case 'CURRENT_GAME':
            return action.currentgame;        default:
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
        case 'IS_LOADING':
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

export function loginsuccessfull(state = null, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return action.loginsuccessfull;        default:
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

export function gameparticipantsitems(state = [], action) {
    switch (action.type) {
        case 'GAMEPARTICIPANT_FETCH_DATA_SUCCESS':
            return action.gameparticipantsitems;        default:
            return state;
    }
}

export function sportcenteritems(state = [], action) {
    switch (action.type) {
        case 'SPORTCENTER_FETCH_DATA_SUCCESS':
            return action.sportcenteritems;        default:
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

export function joingame(state = [], action) {
    switch (action.type) {
        case 'JOINGAME_STATUS':
            return action.joingame;        default:
            return state;
    }
}

export function singlegameitems(state = [], action) {
    switch (action.type) {
        case 'SINGLEGAME_FETCH_DATA_SUCCESS':
            return action.singlegameitems;        default:
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
    currentgame,
    gameparticipantsitems,
    items,
    isError,
    isLoading,
    joingame,
    loginsuccessfull,
    navigate,
    nitems,
    page,
    registration,
    singlegameitems,
    size,
    sportcenteritems,
    useritems,
    username,
});