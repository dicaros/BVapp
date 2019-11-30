import React from 'react';
import logo from '../img/BEVolej.gif';

const logouturl = "http://localhost:8080/logout"

class AppHeader extends React.Component {

  componentDidMount() { 
    this.props.getUser();
 };


  logout(logouturl) {
    if (this.props.loginsuccess) {
       this.props.doLogout(logouturl);
      }
    }

async addNew(isPrivate, gameDate, gameTime, description) {
      if (this.props.loginsuccess) {
        await  this.props.addNew(isPrivate, gameDate, gameTime, description, this.props.listurl, this.props.items.page.totalElements)
      }
      this.refresh();
    }

    refresh(){ this.props.fetchData(this.props.listurl, this.props.page, this.props.size) }

    render() {

      return(
     
     <div id = 'topheader' ref = 'header'>
       <table className = 'tableheader'>
         <thead>
         <tr>
            <td className = 'headermenu_left'>
                  <img src = {logo} id='logo' alt='Logo'></img>
            </td>
            <td className = 'headermenu_center'>
            </td>
            <td className = 'headermenu_right'>
                  { this.props.loginsuccess && <span><a  id = 'topheaderlink' href = '#' onClick={() => this.logout(logouturl)}>Logout</a> | </span>}
                  { !this.props.loginsuccess && <span><a  id = 'topheaderlink' href = '#' onClick={() => this.logout(logouturl)}>Sign in</a> | </span>}
                  <a  id = 'topheaderlink' href = '#' onClick={() => this.addNew(true, '2019-10-05', '15:00:00', 'this is a game that I just created')}>Create New</a> |&nbsp;
                  <a  id = 'topheaderlink' href = '#' >{ this.props.username }</a><span>&nbsp;&nbsp;</span>                
            </td>
          </tr>
          </thead>
        </table>
    </div>)
 }
}

export default AppHeader;