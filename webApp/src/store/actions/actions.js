import { applyMiddleware, combineReducers, createStore } from 'redux';
import { encode } from "base-64";
import thunk from 'redux-thunk';
import {
  ITEMS_IS_LOADING,
  ITEMS_HAS_ERRORED,
  ITEMS_FETCH_DATA_SUCCESS,
  CURRENT_SIZE,
  CURRENT_PAGE,
  LOGIN_SUCCESS

} from './actionsTypes.js'


export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function loginsuccessfull(bool) {
    return {
        type: 'LOGIN_SUCCESS',
        loginsuccess: bool
    };
}

export function currentpage(number) {
    return {
        type: 'CURRENT_PAGE',
        page: number
    };
}

export function currentsize(number) {
    return {
        type: 'CURRENT_SIZE',
        size: number
    };
}

// actions.js
export function setCurrentPage(direction, page, pagenum) {
    return (dispatch) => {
      if(direction == 'next' && page+1<pagenum) {
      page = ++page;
      dispatch(currentpage(page));
      }
      else if (direction == 'prev' && page>0) {
      page = --page;
      dispatch(currentpage(page)); 
      }
  }
}

export function setCurrentSize(size) {
    return (dispatch) => {    
      dispatch(currentsize(size));
      }
}


export function loademployees(url, page, size) {
                return (dispatch) => {
                dispatch(itemsIsLoading(true)); 

                fetch(url+'?'+'page='+page+'&size='+size, {
                  method: 'GET',
                  credentials: 'include',
                               headers: { 
                          'Content-Type': 'application/json',
                        },
               })
                 .then((res) => {
                      if (!res.ok) {
                        throw Error(res.statusText);
                      }
                    dispatch(itemsIsLoading(false));
                    return res;
             })
            .then((res) => res.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function thelogout(logouturl){
             return dispatch =>
              { fetch(logouturl, {
                        method: "POST",
                        credentials: "include",
                  })

            .then(res => { 
                            dispatch(loginsuccessfull(false));
                })
            .then(res => { 
                            dispatch(loginsuccessfull(false));
                })
            }  
}

export function thelogin(loginurl, targeturl)  {
               return (dispatch) => {
                dispatch(loginsuccessfull(false));
                  fetch(loginurl, {
                        method: "POST",
                    headers: { 
                          'Content-Type': 'application/json',
                          'Authorization': 'Basic ' + encode('greg' + ":" + 'turnquist'),
                        },
                        credentials: 'include',
                        body: JSON.stringify({
                            username: 'xxxxxxxxx',
                            password: 'xxxxxxxxx'
                       })
                  })
           .then(res => { 
             if (res.status == '404') {
                            dispatch(loginsuccessfull(true));
                      }
                }
                    ) 
       .then((res) => { 
           console.log();
        }).catch(error =>
                      { 
                                                    return true

              })

      }
    }
