import { getUser, loadData, newGame, newUser, setCurrentGame, setCurrentPage, setCurrentSize,
          setNavigate, signupGame, thelogin, thelogout, updateRecord } from './store/actions/actions';

import { connect } from 'react-redux';

import AppHeader from './components/AppHeader';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';
import UserDetails from './components/UserDetails';
import LoginPage from './components/LoginPage';
import RegisterUser from './components/RegisterUser';
import CreateGame from './components/CreateGame';
import MainContainer from './components/MainContainer';

const mapStateToProps = (state) => {
    return {
         gameparticipantsitems: state.gameparticipantsitems,
         isError: state.isError,
         isLoading: state.isLoading,
         loginsuccess: state.loginsuccessfull,
         listsportcenter: state.listsportcenter,
         items: state.items,
         joingame: state.joingame,
         nitems: state.nitems,
         navigate: state.navigate,
         page: state.page,
         size: state.size,
         singlegameitems: state.singlegameitems,         
         sportcenteritems: state.sportcenteritems,
         useritems: state.useritems,
         username: state.username,
         registration: state.registration,
         currentgame: state.currentgame
       };
  };
  
  const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (request, url, sort, page, size) => dispatch(loadData(request, url, sort, page, size)),
      doLogin: (loginurl, target) => dispatch(thelogin(loginurl, target)),                                    
      doLogout: (logouturl) => dispatch(thelogout(logouturl)),
      setNavigate: (navigate) => dispatch(setNavigate(navigate)),
      setGame: (id) => dispatch(setCurrentGame(id)),
      setSize: (size) => dispatch(setCurrentSize(size)),
      setPage: (direction, pagenum) => dispatch(setCurrentPage(direction, pagenum)),                              
      signupGame: (url, noshow, game_id) => dispatch(signupGame(url, noshow, game_id)),
      addNew: (sportcenterid, isPrivate, gameDate, gameTime, description, url, nitems, priceperperson, kurt) => dispatch(newGame(sportcenterid, isPrivate, gameDate, gameTime, description, url, nitems, priceperperson, kurt)),
      getUser: () => dispatch(getUser()),
      updateRecord: (firstName, lastName, description, url) => dispatch(updateRecord(firstName, lastName, description, url)),
      newUsers: (url, target) => dispatch(newUser(url, target)),
    };
  };

  export const CreateComponent = connect(mapStateToProps, mapDispatchToProps)(CreateGame);
  export const GameComponent = connect(mapStateToProps, mapDispatchToProps)(GameList);
  export const GameDetailsComponent = connect(mapStateToProps, mapDispatchToProps)(GameDetails);
  export const HeaderComponent = connect(mapStateToProps, mapDispatchToProps)(AppHeader);
  export const LoginComponent = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
  export const MainComponent = connect(mapStateToProps, mapDispatchToProps)(MainContainer);
  export const RegisterComponent = connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
  export const UserComponent = connect(mapStateToProps, mapDispatchToProps)(UserDetails);
