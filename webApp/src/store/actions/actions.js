import { CURRENT_PAGE } from './action-type';
import { CURRENT_SIZE } from './action-type';
import { encode } from "base-64";
import { IS_ERROR } from './action-type';
import { IS_LOADING } from './action-type';
import { ITEMS_FETCH_DATA_SUCCESS } from './action-type';
import { LIST_URL } from './action-type';
import { LOGIN_SUCCESS } from './action-type';
import { N_ITEMS } from './action-type';
import { SET_USER } from './action-type';
import { store } from '../store'

export function getUser(userurl) {
    return (dispatch) => {fetch(userurl, {
        method: 'GET',
        credentials: 'include',
        headers: { 
                'Content-Type': 'application/json',
              },
     })
     .then((res) => {
        if(res.status=='401') {
            return ('Guest')
        }
        else {
            return res.text()
        }
    }).then((data) => {
        dispatch(setuser(data))
        })
    }
}

export function isError(bool) {
    return {
        type: IS_ERROR,
        hasErrored: bool
    };
}

export function isLoading(bool) {
    return {
        type: IS_LOADING,
        isLoading: bool
    };
}

export function listurl(listurl) {
    return {
        type: LIST_URL,
        listurl: listurl
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}

export function loademployees(url, page, size) {
    return (dispatch) => {
    dispatch(isLoading(true)); 
    fetch(url+'?page='+page+'&size='+size, {
      method: 'GET',
      credentials: 'include',
      headers: { 
              'Content-Type': 'application/json',
            },
   })
     .then((res) => {
        dispatch(isLoading(false));
        if(res.status == '401') {
            dispatch(loginsuccessfull(false));
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
            dispatch(isError(true));
            console.log("fail " + error.status)
}

);
};
}

export function loginsuccessfull(bool) {
    return {
        type: LOGIN_SUCCESS,
        loginsuccess: bool
    };
}

export function newItem(firstName, lastName, description, url, nitems)  {
    var updatedrecord = {firstName: firstName, lastName: lastName, description: description}
    fetch(url, {
             method: "POST",
             credentials: 'include',
             headers: { 
               'Content-Type': 'application/json',
             },
             body: JSON.stringify(updatedrecord)
          })
.then(res => { 
                console.log('update request:' + res.status);
     }
         ).catch(error =>
           { 
                 console.log('update request error:' + error.status)
   })

   return {
    type: N_ITEMS,
    nitems: nitems+1
    }
}

export function setCurrentPage(direction, pagenum) {
    var thepage = store.getState().page
      if(direction == 'next' && store.getState().page+1<pagenum) {
      thepage = store.getState().page+1;
      }
      else if (direction == 'prev' && store.getState().page>0) {
      thepage = store.getState().page-1;
      }
      return {
        type: CURRENT_PAGE,
        page: thepage
      }
  
}

export function setCurrentSize(size) {
    return {
        type: CURRENT_SIZE,
        size: size
    };
}

export function setuser(username) {
    return {
        type: SET_USER,
        username: username
    };
}

export function thelogin(loginurl, target)  {
               return (dispatch) => {
                dispatch(loginsuccessfull(false));
                  fetch(loginurl, {
                        method: "POST",
                        credentials: 'include',
                        headers: { 
                          'Content-Type': 'application/json',
                          'Authorization': 'Basic ' + encode(target.username.value + ":" + target.password.value),
                        },
                        body: JSON.stringify({
                            username: 'xxxxxxxxx',
                            password: 'xxxxxxxxx'
                       })
                  })
           .then(res => { 
                        if(res.status != '401')
                        {
                            dispatch(loginsuccessfull(true))
                                       }
                        else {
                            dispatch(loginsuccessfull(false));
                        }
                            console.log("log in " + res.status);
                    })
            .then(res => {
                dispatch(setuser(target.username.value));
            })
                    .catch(error =>
                      { 
                          if(error.status=='401')
                          {
                            dispatch(loginsuccessfull(false));
                        }
                            console.log("not logged " + error.status)
              })
      }
    }

    export function thelogout(logouturl){
        return dispatch =>
         { fetch(logouturl, {
                   method: "POST",
                  credentials: 'include'
               })
       .then(res => { 
                       dispatch(loginsuccessfull(false));
                       dispatch(setuser('Guest'));
                       console.log("log out " + res.status)
           })
       }  
}

export function updateRecord(firstName, lastName, description, url) {
    var newrecord = {firstName: firstName, lastName: lastName, description: description}
    return (dispatch) => {fetch(url, {
             method: "PUT",
             credentials: 'include',
             headers: { 
               'Content-Type': 'application/json',
             },
             body: JSON.stringify(newrecord)
          })
.then(res => { console.log(res.status); }
         ).catch(error =>
           { console.log(error.status) })
    }
}