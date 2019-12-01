import { loadgames, loaduserdetails } from './store/actions/actions';
import { setCurrentPage } from './store/actions/actions';
import { setCurrentSize } from './store/actions/actions';
import { thelogin } from './store/actions/actions';
import { thelogout } from './store/actions/actions';
import { newItem } from './store/actions/actions';
import { getUser } from './store/actions/actions';
import { updateRecord } from './store/actions/actions';

import { connect } from 'react-redux';
import AppHeader from './components/AppHeader';

import GameList from './components/GameList';
import UserDetails from './components/UserDetails';
import LoginPage from './components/LoginPage';

const mapStateToProps = (state) => {
    return {
         isError: state.isError,
         isLoading: state.isLoading,
         loginsuccess: state.loginsuccessfull,
         listurl: state.listurl,
         items: state.items,
         myuserurl: state.myuserurl,
         nitems: state.nitems,
         page: state.page,
         size: state.size,
         useritems: state.useritems,
         username: state.username
       };
  };
  
  const mapDispatchToProps = (dispatch) => {
  return {
      fetchGames: (url, page, size) => dispatch(loadgames(url, page, size)),
      fetchUserDetails: (url, page, size) => dispatch(loaduserdetails(url, page, size)),
      doLogin: (loginurl, target) => dispatch(thelogin(loginurl, target)),                                    
      doLogout: (logouturl) => dispatch(thelogout(logouturl)),
      setSize: (size) => dispatch(setCurrentSize(size)),
      setPage: (direction, pagenum) => dispatch(setCurrentPage(direction, pagenum)),                              
      addNew: (isPrivate, gameDate, gameTime, description, url, nitems) => dispatch(newItem(isPrivate, gameDate, gameTime, description, url, nitems)),
      getUser: () => dispatch(getUser('http://localhost:8080/username')),
      updateRecord: (firstName, lastName, description, url) => dispatch(updateRecord(firstName, lastName, description, url))

    };
  };
  
  export const HeaderComponent = connect(mapStateToProps, mapDispatchToProps)(AppHeader);
  export const GameComponent = connect(mapStateToProps, mapDispatchToProps)(GameList);
  export const UserComponent = connect(mapStateToProps, mapDispatchToProps)(UserDetails);
  export const LoginComponent = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

  export default HeaderComponent;