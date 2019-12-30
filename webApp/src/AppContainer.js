import { loadgames, loaduserdetails, loadsportcenters} from './store/actions/actions';
import { setCurrentPage } from './store/actions/actions';
import { setCurrentSize } from './store/actions/actions';
import { setNavigate } from './store/actions/actions';
import { thelogin } from './store/actions/actions';
import { thelogout } from './store/actions/actions';
import { newGame } from './store/actions/actions';
import { getUser } from './store/actions/actions';
import { updateRecord } from './store/actions/actions';
import { newUser } from './store/actions/actions';
import { url } from './store/actions/action-type';

import { connect } from 'react-redux';
import AppHeader from './components/AppHeader';

import GameList from './components/GameList';
import UserDetails from './components/UserDetails';
import LoginPage from './components/LoginPage';
import RegisterUser from './components/RegisterUser';
import CreateGame from './components/CreateGame';

const mapStateToProps = (state) => {
    return {
         isError: state.isError,
         isLoading: state.isLoading,
         loginsuccess: state.loginsuccessfull,
         listsportcenter: state.listsportcenter,
         listurl: state.listurl,
         items: state.items,
         myuserurl: state.myuserurl,
         nitems: state.nitems,
         navigate: state.navigate,
         page: state.page,
         size: state.size,
         sportcenteritems: state.sportcenteritems,
         useritems: state.useritems,
         username: state.username,
         registration: state.registration
       };
  };
  
  const mapDispatchToProps = (dispatch) => {
  return {
      fetchGames: (url, page, size) => dispatch(loadgames(url, page, size)),
      fetchUserDetails: (url) => dispatch(loaduserdetails(url)),
      fetchSportCenters: (url, page, size) => dispatch(loadsportcenters(url, page, size)),
      doLogin: (loginurl, target) => dispatch(thelogin(loginurl, target)),                                    
      doLogout: (logouturl) => dispatch(thelogout(logouturl)),
      setNavigate: (navigate) => dispatch(setNavigate(navigate)),
      setSize: (size) => dispatch(setCurrentSize(size)),
      setPage: (direction, pagenum) => dispatch(setCurrentPage(direction, pagenum)),                              
      addNew: (sportcenterid, isPrivate, gameDate, gameTime, description, url, nitems, priceperperson, kurt) => dispatch(newGame(sportcenterid, isPrivate, gameDate, gameTime, description, url, nitems, priceperperson, kurt)),
      getUser: () => dispatch(getUser(url+'username')),
      updateRecord: (firstName, lastName, description, url) => dispatch(updateRecord(firstName, lastName, description, url)),
      newUsers: (url, target) => dispatch(newUser(url, target)),
    };
  };
  
  export const HeaderComponent = connect(mapStateToProps, mapDispatchToProps)(AppHeader);
  export const GameComponent = connect(mapStateToProps, mapDispatchToProps)(GameList);
  export const UserComponent = connect(mapStateToProps, mapDispatchToProps)(UserDetails);
  export const LoginComponent = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
  export const RegisterComponent = connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
  export const CreateComponent = connect(mapStateToProps, mapDispatchToProps)(CreateGame);

  //export default HeaderComponent;