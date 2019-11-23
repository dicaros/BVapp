import { loademployees } from './store/actions/actions';
import { setCurrentPage } from './store/actions/actions';
import { setCurrentSize } from './store/actions/actions';
import { thelogin } from './store/actions/actions';
import { thelogout } from './store/actions/actions';
import { newItem } from './store/actions/actions';

import { connect } from 'react-redux';
import EmployeeList from './components/EmployeeList';
import LoginPage from './components/LoginPage';

const mapStateToProps = (state) => {
             return {
                  items: state.items,
                  isError: state.isError,
                  isLoading: state.isLoading,
                  page: state.page,
                  size: state.size,
                  loginsuccess: state.loginsuccessfull
                };
          };

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, page, size) => dispatch(loademployees(url, page, size)),
        setSize: (size) => dispatch(setCurrentSize(size)),
        setPage: (direction, pagenum) => dispatch(setCurrentPage(direction, pagenum)),
        doLogin: (loginurl, target) => dispatch(thelogin(loginurl, target)),                               
        doLogout: (logouturl) => dispatch(thelogout(logouturl)),                               
        addNew: (firstName, lastName, description, url) => dispatch(newItem(firstName, lastName, description, url))                               
         };
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(EmployeeList);

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default AppContainer;