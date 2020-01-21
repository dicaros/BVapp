import React from 'react';
import { url } from '../constants/constants'
import { currentday, todaydash } from '../functions/functions'


class UserProfile extends React.Component {
 
      componentDidMount() { 
            if(this.props.loginsuccess) {
                  
            }
          };

 
        async handleSelectGame(id) {
            await this.props.setGame(id)
            await this.props.fetchData('api/gameparticipantsget', url, '?id='+id)
            await this.props.fetchData('api/singlegame', url, '?id='+id)
            this.props.doNavigate('gamedetails')           
        }

   render() {      
 
     const TabbedMenu = () => {
          return(
                    <div class="tab">
                         <button class="tablinks" onclick="openCity(event, 'London')">Your games</button>
                         <button class="tablinks" onclick="openCity(event, 'Paris')">Your data</button>
                    </div>
               )
     }

      const List1 = () => {
            return (
                  <thead width='100%'>
                         <tr>
                              <th>                                    
                                   <TabbedMenu />
                              </th>
                         </tr>
                         <tr> 
                              <th className = 'gamelist'>
                                    <div className='closewindowdiv'>
                                    <span className='closewindowspantop'>
                                          <button className='bodylink'href = '#' onClick={() => this.props.doNavigate('')}>
                                                X
                                          </button>
                                    </span>
                                    <br></br>Games you recently played</div>
                               </th>
                              </tr>
                   <tr>
                        <td className = 'gamelist' width='20%'>
                             <ul className='gamelist1'><Tablerow1 /></ul>
                        </td>    
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

const List2 = () => {
      return (
            <tbody>
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
                                          <List2 />
                </table>
                 );
     }
 }
 
export default UserProfile;