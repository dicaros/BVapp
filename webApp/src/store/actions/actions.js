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
                    dispatch(itemsIsLoading(false));
                    if(res.status == '401') {
                        console.log("unauthorized " + res.status);
                    }
                    else {
                        console.log("success " + res.status);
                        dispatch(itemsFetchDataSuccess(res));
                        dispatch(loginsuccessfull(true));
                        return res;
                }
             })
            .then((res) => res.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(error => {
                        dispatch(itemsHasErrored(true));
                        console.log("fail " + error.status)
            }
            
            );
    };
}

export function thelogout(logouturl){
             return dispatch =>
              { fetch(logouturl, {
                        method: "POST",
                       credentials: 'include'
                    })
            .then(res => { 
                            dispatch(loginsuccessfull(false));
                            console.log("log out " + res.status)
                })
            }  
}

export function thelogin(loginurl)  {
               return (dispatch) => {
                dispatch(loginsuccessfull(false));
                  fetch(loginurl, {
                        method: "POST",
                        credentials: 'include',
                        headers: { 
                          'Content-Type': 'application/json',
                          'Authorization': 'Basic ' + encode('greg' + ":" + 'turnquist'),
                        },
                        body: JSON.stringify({
                            username: 'xxxxxxxxx',
                            password: 'xxxxxxxxx'
                       })
                  })
           .then(res => { 
                            dispatch(loginsuccessfull(true));
                            console.log("log in " + res.status);
                }
                    ).catch(error =>
                      { 
                            dispatch(loginsuccessfull(false));
                            console.log("not logged " + error.status)
              })
      }
    }
