import { loademployees } from './store/actions/actions';
import { setCurrentPage } from './store/actions/actions';
import { setCurrentSize } from './store/actions/actions';
import { thelogin } from './store/actions/actions';
import { thelogout } from './store/actions/actions';

import { connect } from 'react-redux';


import App from './App';


const mapStateToProps = (state) => {
             return {
                  items: state.items,
                  hasErrored: state.itemsHasErrored,
                  isLoading: state.itemsIsLoading,
                  page: state.page,
                  size: state.size,
                  loginsuccess: state.loginsuccessfull
                };
          };

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, page, size) => dispatch(loademployees(url, page, size)),
        setSize: (size) => dispatch(setCurrentSize(size)),
        setPage: (direction, url, page, pagenum) => dispatch(setCurrentPage(direction, page, pagenum)),
        doLogin: (loginurl, targeturl) => dispatch(thelogin(loginurl)),                               
        doLogout: (logouturl) => dispatch(thelogout(logouturl))                               
         };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;