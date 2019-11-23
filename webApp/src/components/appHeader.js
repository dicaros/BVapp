import React from 'react'

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

    addNew(firstName, lastName, description) {
      if (this.props.loginsuccess) {
         this.props.addNew(firstName, lastName, description, this.props.listurl, this.props.items.page.totalElements)
         this.refresh();
      }
    }

    refresh(){ this.props.fetchData(this.props.listurl, this.props.page, this.props.size) }

    render() { 
      return(
     <div id = 'topheader'>
        <a  id = 'topheaderlink' href = '#' onClick={() => this.logout(logouturl)}>Logout</a> |&nbsp;
        <a  id = 'topheaderlink' href = '#' onClick={() => this.addNew('Dummy character', 'Surname', 'Job')}>Create New</a> |&nbsp;
        <a  id = 'topheaderlink' href = '#' >{ this.props.username }</a><span>&nbsp;&nbsp;</span>    
    </div>)
 }
}

export default AppHeader;