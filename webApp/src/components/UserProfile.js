import React from 'react';
import { currentday, todaydash } from '../functions/functions'


class UserProfile extends React.Component {

constructor(props) {
          super(props);
          this.state = {
                buttonclass1: 'tabbedheaderbutton1',
                buttonclass2: 'tabbedheaderbutton2',
                userboxvisible: 1
            }
            //this.menuShowToggle = this.menuShowToggle.bind(this);
          }

        handleSelectTab1() {
               this.setState({
                       buttonclass1: 'tabbedheaderbutton1',
                       buttonclass2: 'tabbedheaderbutton2',
                       userboxvisible: 1
             })
        }

        handleSelectTab2() {
          this.setState({
                  buttonclass1: 'tabbedheaderbutton2',
                  buttonclass2: 'tabbedheaderbutton1',
                  userboxvisible: 2
        })
   }

        async handleSelectGame(id) {
            await this.props.setGame(id)
            this.props.doNavigate('gamedetails')           
        }

   render() {      
 
     const TabbedMenu = () => {
          return(
                    <left>
                          <div className='closewindowdiv'>
                              <div className="tabbedheader">
                                   <button className={this.state.buttonclass1} onClick={() => this.handleSelectTab1()}>Your games</button>
                                   <button className={this.state.buttonclass2} onClick={() => this.handleSelectTab2()}>Your data</button>
                              </div>
                              <span className='closewindowspantop'>
                                   <button className='bodylink'href = '#' onClick={() => this.props.doNavigate('')}>
                                                X
                                   </button>
                              </span>
                         </div>
                    </left>
               )
     }

      const List1 = () => {
            return (
                  <thead className='userboxhead' width='100%'>
                         <tr>
                              <th>                                    
                                   <TabbedMenu />
                              </th>
                         </tr>
                   </thead>           
                    )
      };

    const Tablerow1 = () => {
      return(                    
            this.props.usergamesitems.map ((row, index) => 
             {
                if(row.game.gamedate < todaydash(currentday()))
                {
                          return(
                              <div key={index} className='gameorganizer'>

                                          <li onClick={() => this.handleSelectGame(row.game.id)} 
                                           className='gamelist' key={index}>
                                           <span className='today'> 

                                          {row.game.gamedate+ ', '}
                                          {String(row.game.gametime).substring(0, 5) + ' '}
                                          {(row.isprivate && ' - Private')}
                                          {(row.gameiscancelled && ' - Cancelled')}
                                          </span> 
                                      
                                          @{(row.game.sportcenter.name) + ', '} 
                                          {row.game.sportcenter.street}
                                    <span className='gameorganizer2'>Organized by: {row.game.myuser.name}</span>
                            </li>
                      </div>
                   )
                }
              }
            )
     )
}

const UserGames = () => {
      return (
            <tbody>
                 <tr> 
                           <th className = 'gamelist'>
                                <div className='closewindowdiv'>
                                    <br></br>Games you recently played</div>
                               </th>
                              </tr>
                   <tr>
                        <td className = 'gamelist' width='20%'>
                             <ul className='gamelist1'><Tablerow1 /></ul>
                        </td>    
                   </tr>              
               <tr> 
                         <th className = 'gamelist'>
                                   <div className='closewindowdiv'>       
                                   Upcoming games</div>
                              </th>
                         </tr>
               <tr>
                    <td className = 'gamelist' width='20%'>
                         <ul className='gamelist1'><Tablerow2 /></ul>
                    </td>    
               </tr>      
             </tbody>                   
              )
};

const UserRow1 = () => {
     return(                    
                             <div  className='gameorganizer'>
<ul>
                              <li>
                            
                              </li>
                              </ul>
                         </div>

    )
}

const UserStuff = () => {
     return (
           <tbody>
                <tr> 
                          <th className = 'gamelist'>
                               <div className='closewindowdiv'>
                                   <br></br>Your user details</div>
                              </th>
                             </tr>
               <tr>
                        <td className = 'gamelist' width='20%'>
                             <ul className='gamelist1'><UserRow1 /></ul>
                        </td>    
                   </tr>           
  
            </tbody>                   
             )
};

const Tablerow2 = () => {
      return(                    
            this.props.usergamesitems.map ((row, index) => 
             {
                if(row.game.gamedate > todaydash(currentday()))
                {
                          return(
                              <div key={index} className='gameorganizer'>

                                          <li onClick={() => this.handleSelectGame(row.game.id)} 
                                           className='gamelist' key={index}>
                                           <span className='today'> 

                                          {row.game.gamedate+ ', '}
                                          {String(row.game.gametime).substring(0, 5) + ' '}
                                          {(row.isprivate && ' - Private')}
                                          {(row.gameiscancelled && ' - Cancelled')}
                                          </span> 
                                      
                                          @{(row.game.sportcenter.name) + ', '} 
                                          {row.game.sportcenter.street}
                                    <span className='gameorganizer2'>Organized by: {row.game.myuser.name}</span>
                            </li>
                      </div>
                   )
                }
              }
            )
     )
}



          return (<table className='tablegames'>     
                                          <List1 />
                                          {this.state.userboxvisible == 2 && 
                                          <UserStuff />}
                                          {this.state.userboxvisible == 1 && 
                                          <UserGames />}
                </table>
                 );
     }
 }
 
export default UserProfile;