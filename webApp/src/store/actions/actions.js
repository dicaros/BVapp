import { encode } from "base-64";
import { store } from '../store'
import { url } from '../../constants/constants'
import { CURRENT_GAME, CURRENT_PAGE, CURRENT_SIZE, IS_ERROR, IS_LOADING, GAMERESPONSE_STATUS, 
            ITEMS_FETCH_DATA_SUCCESS, JOINGAME_STATUS, LOGIN_SUCCESS, MYUSER_FETCH_DATA_SUCCESS, N_ITEMS, REGISTRATION_STATUS, 
            SET_NAVIGATE, USERGAMES_FETCH_DATA_SUCCESS, 
            SET_USER, SINGLEGAME_FETCH_DATA_SUCCESS, SPORTCENTER_FETCH_DATA_SUCCESS, 
            USER_FETCH_DATA_SUCCESS, GAMEPARTICIPANT_FETCH_DATA_SUCCESS, LOGIN_ERROR } from './action-type';

// cancel a game, remove a player from a game
export function updateGame(urlupdate, param)  {
                var updatedrecord = []; 
                
                if (param == 'cancel')
                            updatedrecord = {
                                        gameiscancelled: true
                                    }
                else if (param == 'open')
                            updatedrecord = {
                                            gameisfull: false
                                }
                    
                return (dispatch) => {
                fetch(urlupdate, {
                         method: "PATCH",
                         credentials: 'include',
                         headers: { 
                           'Content-Type': 'application/json',
                        },
                         body: JSON.stringify(updatedrecord)
                      })
                      .then(res => res.json())
                      .then(items => {            
                    // reload and update game list after the changes
                          dispatch(loadData('api/games', url, '?page=0&size=1000&sort=gamedate&sort=gametime'))
                    })
                    .catch(error => {
                        console.log('error: ' + error);
                    })
                }
            }
            

export function gameparticipantFetchDataSuccess(gameparticipantsitems) {
    return {
               type: GAMEPARTICIPANT_FETCH_DATA_SUCCESS,
               gameparticipantsitems: gameparticipantsitems
               };
           }
            
export function myuserFetchDataSuccess(myuseritems) {
            return {
                       type: MYUSER_FETCH_DATA_SUCCESS,
                       myuseritems: myuseritems
                       };
                   }

export function usergamesFetchDataSuccess(usergamesitems) {
                    return {
                               type: USERGAMES_FETCH_DATA_SUCCESS,
                               usergamesitems: usergamesitems
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
       // in case of error 401 put the application in "not logged" status
        if(res.status=='401') {
            dispatch(loginsuccessfull(false));
            dispatch(isError(false));
            return ('Guest')        
        }
        else {
            dispatch(loginsuccessfull(true));
            return res.text()       
        }        
    // if the user data fetch is successful update the current username in the store
    }).then((data) => {
                if(typeof data!= 'undefined') {
                    dispatch(setuser(data))
                }
                console.log("data value " + data)
        })                    
    .catch(error => {
                        if(typeof error.status == 'undefined')
                                {
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
                                        if(res.status == '401') {
                                                                        console.log("unauthorized " + res.status);
                                                                        dispatch(loginsuccessfull(false));
                                                                   if(request == 'api/user') {
                                                                        dispatch(setuser('Guest'));
                                                                    }
                                                                }
                                        else {
                                                                        console.log("success " + res.status);
                                                                        if(request == 'api/user') 
                                                                        {
                                                                            dispatch(loginsuccessfull(true));    
                                                                            }
                                                                        
                                        }
                                        return res.json();  
                                })
                    //.then(res => res.json())
                    // get result based on keyword
                    .then((items) => {
                            if(request == 'api/games')
                                dispatch(itemsFetchDataSuccess(items))
                            if(request == 'api/sportcenters')
                                dispatch(sportcenterFetchDataSuccess(items));                                                
                            if(request == 'api/myUserDetails' || request == 'api/myuserdet')
                                dispatch(userFetchDataSuccess(items));
                            if(request == 'api/gameparticipantsget')
                                dispatch(gameparticipantFetchDataSuccess(items));
                            if(request == 'api/singlegame')
                                dispatch(singlegameFetchDataSuccess(items));
                            if(request == 'api/user')
                                {
                                     dispatch(myuserFetchDataSuccess(items));
                                     if(store.getState().loginsuccessfull)
                                        dispatch(setuser(items.name));
                                 }
                            if(request == 'api/gameparticipantsbyuser')
                                 dispatch(usergamesFetchDataSuccess(items));
                                 }
                        )
                    // error handling
                    .catch(error => {
                        if(typeof error.status == 'undefined' && request == 'api/user')
                                {
                                    dispatch(isError(true));
                                    console.log("connection to server failed: " + error)
                                }
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

// create a new game and read the response for error handling
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
            if(!response.checkfailed)
                dispatch(setNavigate('games'));
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

// update user information (i.e. password, phone number)
export function updateUser(url, payload)  {
    return (dispatch) => {
    fetch(url, {
             method: "PATCH",
             credentials: 'include',
             headers: { 
               'Content-Type': 'application/json',
            },
             body: JSON.stringify(payload)
          })
          .then(res => res.json())
          .then(items => {            
                var response = items;
                dispatch(setregistration(response));
                // in case of success go to the user details page
                if(response.error=='Success')
                     dispatch(setNavigate('userp'));
        })
    }
}

// create a new user and handle registration errors
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

// sign in for a game
export function signupGame(url,  noshow, game_id)  {
    // noshow for a single game defaults to "false"
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

// pagination is not being used in this version of the application
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

// manage page navigation within the app
export function setNavigate(input) {
        return(dispatch) => {var tempvar = []
        
        dispatch(isLoading(true));
        tempvar = store.getState().navigate;
        // if no input then go to previous page (remove first element from the stack)
        if(input == '')
            tempvar.pop();
        // if input is not blank then add a page to the stack
        else if (tempvar[tempvar.length-1] != input)
             tempvar.push(input);
            
        dispatch(loadData('api/user', url, ''))

            // based on pageinput refresh the data as needed
            if(tempvar[tempvar.length-1] == 'games')
            {
                dispatch(loadData('api/games', url, '?page=0&size=1000&sort=gamedate&sort=gametime'))
                dispatch(loginsuccessfull(true));
                dispatch(loadData('api/myuserdet', url, ''))
            }

            if(tempvar[tempvar.length-1] == 'userp')
                {
                dispatch(loadData('api/gameparticipantsbyuser', url, '?name=' + store.getState().username))
                dispatch(loadData('api/myuserdet', url, ''))
                }
            if(tempvar[tempvar.length-1] == 'create')
                    dispatch(loadData('api/sportcenters', url, '?page=0&size=1000&sort=name'))

            if(tempvar[tempvar.length-1] == 'gamedetails')
                    {    
                        dispatch(loadData('api/gameparticipantsget', url, '?id='+store.getState().currentgame))
                        dispatch(loadData('api/singlegame', url, '?id='+store.getState().currentgame))
                    }
            dispatch(isLoading(false))
            
            return {
                type: SET_NAVIGATE,
                navigate: tempvar,
            };
        }
    
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
                            dispatch(setNavigate('games'))
                                       }
                        else {dispatch(loginerror(true))}
                            console.log("log in " + res.status);
                        }
                    )
            .then(res => {
                if(res.status != '401')
                {
                        dispatch(setuser(target.username.value));
                        dispatch(loginsuccessfull(true))
                        dispatch(setNavigate('games'))
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

export function userFetchDataSuccess(useritems) {
    return {
        type: USER_FETCH_DATA_SUCCESS,
        useritems
    };
}