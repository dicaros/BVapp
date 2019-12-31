import React from 'react';
import logo from '../img/BEVolej.gif';
import usericon from '../img/UserIcon.png';
import { url } from '../store/actions/action-type';


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
      console.log(this.props.loginsuccess)    
            this.props.fetchSportCenters(this.props.listsportcenter, this.props.page, this.props.size) 
            this.props.fetchUserDetails(this.props.myuserurl)
            this.props.getUser()   
          
      };
  
    componentDidUpdate(prevProps) {
       if(this.props.page != prevProps.page || this.props.size != prevProps.size || this.props.loginsuccess != prevProps.loginsuccess || this.props.nitems != prevProps.nitems)
        {
        this.props.fetchGames(this.props.listurl, this.props.page, this.props.size)
        }
      if(this.props.loginsuccess != prevProps.loginsuccess)
         {
        this.props.fetchSportCenters(this.props.listsportcenter, this.props.page, this.props.size) 
        this.props.fetchUserDetails(this.props.myuserurl)
        this.props.getUser()   
        }
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
                          <li><a href = '#' onClick={() => this.addNew(true, '2019-10-05', '15:00:00', 'ciao a tutti')}>Create New</a></li>
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
