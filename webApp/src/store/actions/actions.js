import { encode } from "base-64";
import { store } from '../store'
import { url } from '../../constants/constants'
import { CURRENT_GAME, CURRENT_PAGE, CURRENT_SIZE, IS_ERROR, IS_LOADING, GAMERESPONSE_STATUS, 
            ITEMS_FETCH_DATA_SUCCESS, JOINGAME_STATUS, LOGIN_SUCCESS, N_ITEMS, REGISTRATION_STATUS, SET_NAVIGATE, 
            SET_USER, SINGLEGAME_FETCH_DATA_SUCCESS, SPORTCENTER_FETCH_DATA_SUCCESS, 
            USER_FETCH_DATA_SUCCESS, GAMEPARTICIPANT_FETCH_DATA_SUCCESS, LOGIN_ERROR } from './action-type';

export function cancelGame(cancelurl)  {
                var updatedrecord = {gameiscancelled: true}
                return (dispatch) => {
                fetch(cancelurl, {
                         method: "PATCH",
                         credentials: 'include',
                         headers: { 
                           'Content-Type': 'application/json',
                        },
                         body: JSON.stringify(updatedrecord)
                      })
                      .then(res => res.json())
                      .then(items => {            
                            var response = items;
                            console.log(response);
                            dispatch(loadData('api/games', url, '?page=0&size=1000&sort=gamedate&sort=gametime'))
                    })
                }
            }
            

export function gameparticipantFetchDataSuccess(gameparticipantsitems) {
    return {
               type: GAMEPARTICIPANT_FETCH_DATA_SUCCESS,
               gameparticipantsitems: gameparticipantsitems
               };
           }
            
export function singlegameFetchDataSuccess(singlegameitems) {
            return {
                       type: SINGLEGAME_FETCH_DATA_SUCCESS,
                       singlegameitems: singlegameitems
                       };
                   }

// getUser gets the current username and checks if the application is still logged
export function getUser() {
    return (dispatch) => {
        dispatch(isError(false));
        fetch(url+'username', {
        method: 'GET',
        credentials: 'include',
        headers: { 
                'Content-Type': 'application/json',
              },
     })
     .then((res) => {
        console.log("res stage " + res.status)
        
        if(res.status=='401') {
            dispatch(loginsuccessfull(false));
            dispatch(isError(false));
            return ('Guest')        
        }
        else {
            dispatch(loginsuccessfull(true));
            return res.text()       
        }        
    }).then((data) => {
                if(typeof data!= 'undefined') {
                    dispatch(setuser(data))
                }
                console.log("data value " + data)
        })                    
    .catch(error => {
                        if(typeof error.status == 'undefined')
                                {
                                    dispatch(isLoading(false))
                                    dispatch(isError(true));
                                    console.log("connection to server failed: " + error.status)
                                }
                    }
            );
    }
}

export function isError(bool) {
    return {
        type: IS_ERROR,
        isError: bool
    };
}

export function isLoading(input) {
    return {
        type: IS_LOADING,
        isLoading: input
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        items: items
    };
}

export function loadData(request, url, params) {

            return (dispatch) => {

                    dispatch(isLoading(true)); 
                    dispatch(isError(false));
                // start GET request
                    fetch(url+request+params  , {
                                                                method: 'GET',
                                                                credentials: 'include',
                                                                headers: { 
                                                                            'Content-Type': 'application/json',
                                                                },
                    })
                // evaluate get request
                    .then((res) => {
                                        dispatch(isLoading(true));
                                        if(res.status == '401') {
                                                                        console.log("unauthorized " + res.status);
                                                                }
                                        else {
                                                                        console.log("success " + res.status);
                                                                        return res;                                          
                                        }
                                })
                    .then(res => res.json())
                    // get result based on keyword
                    .then((items) => {
                            if(request == 'api/games')
                                dispatch(itemsFetchDataSuccess(items))
                            if(request == 'api/sportcenters')
                                dispatch(sportcenterFetchDataSuccess(items));                                                
                            if(request == 'api/myUserDetails')
                                dispatch(userFetchDataSuccess(items));
                            if(request == 'api/gameparticipantsget')
                                dispatch(gameparticipantFetchDataSuccess(items));
                            if(request == 'api/singlegame')
                                dispatch(singlegameFetchDataSuccess(items));
                                dispatch(isLoading(false))
                            }
                                )
                    // error handling
                    .catch(error => {
                                        dispatch(isLoading(false))
                                        console.log("fail loading data: " + error.status)
                                    
                            }
                       );
            };
}

export function loginerror(bool) {
    return {
        type: LOGIN_ERROR,
        loginerror: bool
    };
}

export function loginsuccessfull(bool) {
    return {
        type: LOGIN_SUCCESS,
        loginsuccessfull: bool
    };
}

export function nitems(nitems) {
    return {
        type: N_ITEMS,
        nitems: nitems+1
        }
}

export function newGame(sportcenterid, isPrivate, gameDate, gameTime, description, urlsport, nitems, priceperperson, kurt)  {
    var updatedrecord = {   sportcenterid: sportcenterid, kurt: kurt, priceperperson: priceperperson, isprivate: isPrivate, gamedate: gameDate, gametime: gameTime, gameisfull: false, gameispast: false, gameiscancelled: false, description: description }

    return (dispatch) => {   fetch(urlsport, {
             method: "POST",
             credentials: 'include',
             headers: { 
               'Content-Type': 'application/json',
             },
             body: JSON.stringify(updatedrecord)
          })
        .then(res => res.json())
        .then(items =>{
            var response = items;
            dispatch(setgameresponse(response));
            dispatch(nitems(nitems+1));
            console.log(response);
        })
        .catch(error =>
           { 
                 console.log(error.status)
        })
    
    }
}



export function newUser(url, target)  {
    var updatedrecord = {name: target.username.value, firstname: target.firstname.value, lastname: target.lastname.value, password: target.password.value, confirmpassword: target.password2.value, email: target.email.value}
    return (dispatch) => {
    fetch(url, {
             method: "POST",
             credentials: 'include',
             headers: { 
               'Content-Type': 'application/json',
            },
             body: JSON.stringify(updatedrecord)
          })
          .then(res => res.json())
          .then(items => {            
                var response = items;
                dispatch(setregistration(response));
        })
    }
}

export function signupGame(url,  noshow, game_id)  {
    var updatedrecord = { noshow: noshow, gameid: game_id }
    return (dispatch) => {
    fetch(url, {
             method: "POST",
             credentials: 'include',
             headers: { 
               'Content-Type': 'application/json',
            },
             body: JSON.stringify(updatedrecord)
          })
          .then(res => res.json())
          .then(items => {            
                var response = items;
                dispatch(setjoingame(response));
        })
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

export function setCurrentGame(id) {
    return {
        type: CURRENT_GAME,
        currentgame: id
    };
}

export function setCurrentSize(size) {
    return {
        type: CURRENT_SIZE,
        size: size
    };
}

export function setNavigate(navigate) {
    return {
        type: SET_NAVIGATE,
        navigate: navigate
    };
}

export function setregistration(registration) {
    return {
        type: REGISTRATION_STATUS,
        registration: registration
    };
}

export function setgameresponse(gameresponse) {
    return {
        type: GAMERESPONSE_STATUS,
        gameresponse: gameresponse
    };
}

export function setjoingame(param) {
    return {
        type: JOINGAME_STATUS,
        joingame: param
    };
}

export function setuser(username) {
    return {
        type: SET_USER,
        username: username
    };
}

export function sportcenterFetchDataSuccess(sportcenteritems) {
    return {
        type: SPORTCENTER_FETCH_DATA_SUCCESS,
        sportcenteritems: sportcenteritems
    };
}

export function thelogin(loginurl, target)  {
               return (dispatch) => {
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
                            dispatch(loginsuccessfull(true));
                            dispatch(loginerror(false))
                                       }
                        else {dispatch(loginerror(true))}
                            console.log("log in " + res.status);
                            dispatch(isLoading(false));
                        }
                    )
            .then(res => {
                dispatch(isLoading(false));
                if(res.status != '401')
                {
                        dispatch(setuser(target.username.value));
                        dispatch(loginsuccessfull(true))
                }
            })
                    .catch(error =>
                      { 
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
        .catch(error =>
            { 
                if(error.status=='401')
                {
                  dispatch(loginsuccessfull(false));
                }
                  dispatch(isLoading(false));
                  console.log("not logged " + error.status)
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

export function userFetchDataSuccess(useritems) {
    return {
        type: USER_FETCH_DATA_SUCCESS,
        useritems
    };
}