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
          list1: 'listmenuhidden',
          bar3: 'bar3',
          bar2: 'bar2',
          bar1: 'bar1'
      }
      //this.menuShowToggle = this.menuShowToggle.bind(this);
    }

  handleNavigate(param) {
          this.props.doNavigate(param)
          this.setState({showMenu: !this.state.showMenu})   
          this.menuShowToggle();
        }

  async menuShowToggle () {
      await this.setState({showMenu: !this.state.showMenu})

      if(this.state.showMenu)
        this.setState({list1: 'listmenu',
                      bar3: 'bar3clicked',
                      bar2: 'listmenuhidden',
                      bar1: 'bar1clicked'
                    })
      else if (!this.state.showMenu)
        this.setState({list1: 'listmenuhidden',
                        bar3: 'bar3',
                        bar2: 'bar2',
                        bar1: 'bar1'})
       }
  

  async logout(logouturl) {
    if (this.props.loginsuccess) {
     await this.menuShowToggle()
     await this.setState({list1: 'listmenuhidden'})
      this.props.doLogout(logouturl);
      }
    }

    render() {

      const NavMenu = () => { 
        return(

          <nav>
              <ul>

                  <li>
                      <img src={usericon} onClick={() => this.props.doNavigate('userp')} className='userlogo' alt='O'></img>
                </li>     
                <li>
                  
                <div className="container" onClick={() => this.menuShowToggle()}>                    
                      <div className={this.state.bar1}></div>
                      <div className={this.state.bar2}></div>
                      <div className={this.state.bar3}></div>
                 </div> 


                    <ul className={this.state.list1}>
                          {!this.props.loginsuccess && <li><a href = '/' onClick={() => this.logout(logouturl)}>Login</a></li>}
                          {this.props.loginsuccess && <li><a  href = '/' onClick={() => this.logout(logouturl)}>Logout</a></li>}
                          {!this.props.loginsuccess && !this.props.isError && <li><a href="#" onClick={() => this.props.doNavigate('register')}>Register</a></li>}

                          {this.props.loginsuccess && <li><a href="#" onClick={() => this.handleNavigate('games')}>Game list</a></li>}
                          {this.props.loginsuccess && <li><a href="#" onClick={() => this.handleNavigate('create')}>Create game</a></li>}

                          <li><div className='line'></div></li>
                          <li><a href="#" onClick={() => this.handleNavigate('userp')}>{ this.props.username }</a></li>
                      </ul> 

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
