import React from 'react';
import logo from '../img/BEVolej.gif';
import usericon from '../img/UserIcon.png';
import { url } from '../constants/constants'

const logouturl = url+'logout'

class AppHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          showMenu: false,
      }
      this.menuShowToggle = this.menuShowToggle.bind(this);
    }

    componentDidMount() { 
            //(request, url, params)
            this.props.fetchData('api/games', url, '?page=0&size=1000&sort=gamedate&sort=gametime')
            this.props.fetchData('api/sportcenters', url, '?page=0&size=1000&sort=name')
            this.props.fetchData('api/myUserDetails', url, '')
            this.props.getUser()
          };
  
    componentDidUpdate(prevProps) {

     if(!this.props.isLoading && (this.props.page != prevProps.page || this.props.size != prevProps.size || this.props.loginsuccess != prevProps.loginsuccess || this.props.nitems != prevProps.nitems))
        {
          this.props.fetchData('api/games', url, '?page=0&size=1000&sort=gamedate&sort=gametime')
        }
     if(this.props.loginsuccess != prevProps.loginsuccess && !this.props.isLoading) 
        {
          this.props.fetchData('api/sportcenters', url, '?page=0&size=1000&sort=name')
          this.props.fetchData('api/myUserDetails', url, '')
          this.props.getUser()  
       }  
    }

    handleNavigate(param) {
          this.props.setNavigate(param)
          this.setState({showMenu: !this.state.showMenu})   
        }

    menuShowToggle = () => {
      this.setState({showMenu: !this.state.showMenu})   
     }
  

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
    }

    render() {

      const NavMenu = () => { 
        return(

          <nav>
              <ul>

                  <li>
                    <center>
                      <img src={usericon} className='userlogo' alt='O'></img></center>
                </li>     
                <li>
                  
                <div className="container" onClick={this.menuShowToggle}>
                      {this.state.showMenu && <span className='ics'>X</span>} 
                      {!this.state.showMenu && <center><div className='bar1'></div>
                      <div className='bar1'></div>
                      <div className='bar1'></div></center>}
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
                          <li><a href = '#' onClick={() => this.handleNavigate('create')}>Create New</a></li>
                          <li><div className='line'></div></li>
                          <li><a href="#">{ this.props.username }</a></li>
                      </ul> }
                </li>
            </ul>
      </nav>
          
       
        )
      
      }

      return(
     
     <div className = 'topheader' ref = 'header'>
       <table className = 'tableheader'>
         <thead>
         <tr>
            <td className = 'headermenu_left'>
                 <a href='/'><img src = {logo} className='logo' alt='Logo'></img></a>
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
