import React from 'react';
import logo from '../img/BEVolej.gif';
import usericon from '../img/UserIcon.png';

const logouturl = "http://localhost:8080/logout"

class AppHeader extends React.Component {
 
constructor(props) {
    super(props);
    this.state = {
          showMenu: false
      }
      this.menuShowToggle = this.menuShowToggle.bind(this);
    }

    menuShowToggle = () => {
      this.setState({showMenu: !this.state.showMenu})
  }

  componentDidUpdate(){
    this.props.getUser();    
  }

  componentDidMount() { 
    this.props.getUser();
 };



  logout(logouturl) {
    if (this.props.loginsuccess) {
       this.setState({showMenu: false})
       this.props.doLogout(logouturl);
      }
    }

async addNew(isPrivate, gameDate, gameTime, description) {
      if (this.props.loginsuccess) {
        await  this.props.addNew(isPrivate, gameDate, gameTime, description, this.props.listurl, this.props.items.page.totalElements)
      }
      this.refresh();
    }

    refresh(){ this.props.fetchGames(this.props.listurl, this.props.page, this.props.size) }


    render() {

      const NavMenu = () => { 
        return(

          <nav>
              <ul>

                  <li>
                    <center>
                      <img src={usericon} id='userlogo' alt='O'></img></center>
                </li>     
                <li>
                  
                <div className="container" onClick={this.menuShowToggle}>
                      <div className="bar1"></div>
                      <div className="bar2"></div>
                      <div className="bar3"></div>
                </div> 
                    { this.state.showMenu && !this.props.loginsuccess && 
                    <ul>
                          <li><a href = '/' onClick={() => this.logout(logouturl)}>Login</a></li>
                          <li><a href="/register">Register</a></li>
                          <li><a href="#">About...</a></li>
                      </ul> }

                      { this.state.showMenu && this.props.loginsuccess && 
                    <ul>
                          <li><a  href = '#' onClick={() => this.logout(logouturl)}>Logout</a></li>
                          <li><a href="#">About...</a></li>
                          <li><a id = 'topheaderlink' href = '#' onClick={() => this.addNew(true, '2019-10-05', '15:00:00', 'this is a game that I just created')}>Create New</a></li>
                          <li><div id='line'></div></li>
                          <li><a href="#">{ this.props.username }</a></li>
                      </ul> }
                </li>        
            </ul>
      </nav>
          
       
        )
      
      }

      return(
     
     <div id = 'topheader' ref = 'header'>
       <table className = 'tableheader'>
         <thead>
         <tr>
            <td className = 'headermenu_left'>
                 <a href='/'><img src = {logo} id='logo' alt='Logo'></img></a>
            </td>
            <td className = 'headermenu_center'>
            </td>
            <td className = 'headermenu_right'>
                    <NavMenu />
            </td>
          </tr>
          </thead>
        </table>
    </div>)
 }
}

export default AppHeader;