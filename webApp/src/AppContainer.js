import { loademployees } from './store/actions/actions';
import { setCurrentPage } from './store/actions/actions';
import { setCurrentSize } from './store/actions/actions';
import { thelogin } from './store/actions/actions';
import { thelogout } from './store/actions/actions';
import { newItem } from './store/actions/actions';
import { getUser } from './store/actions/actions';
import { updateRecord } from './store/actions/actions';

import { connect } from 'react-redux';
import AppHeader from './components/AppHeader';

import EmployeeList from './components/EmployeeList';
import LoginPage from './components/LoginPage';


const mapStateToProps = (state) => {
    return {
         isError: state.isError,
         isLoading: state.isLoading,
         loginsuccess: state.loginsuccessfull,
         listurl: state.listurl,
         items: state.items,
         nitems: state.nitems,
         page: state.page,
         size: state.size,
         username: state.username
       };
  };
  
  const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url, page, size) => dispatch(loademployees(url, page, size)),
      doLogin: (loginurl, target) => dispatch(thelogin(loginurl, target)),                               
      doLogout: (logouturl) => dispatch(thelogout(logouturl)),
      setSize: (size) => dispatch(setCurrentSize(size)),
      setPage: (direction, pagenum) => dispatch(setCurrentPage(direction, pagenum)),                              
      addNew: (firstName, lastName, description, url, nitems) => dispatch(newItem(firstName, lastName, description, url, nitems)),
      getUser: () => dispatch(getUser('http://localhost:8080/username')),
      updateRecord: (firstName, lastName, description, url) => dispatch(updateRecord(firstName, lastName, description, url))

    };
  };
  
  export const HeaderComponent = connect(mapStateToProps, mapDispatchToProps)(AppHeader);
  export const EmployeeComponent = connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
  export const LoginComponent = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

  export default HeaderComponent;