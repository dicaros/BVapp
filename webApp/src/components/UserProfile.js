import React from 'react';
import { url } from '../constants/constants'

class UserProfile extends React.Component {
 
 
 
   render() {      
 
    const Tablerow = () => {
      return(                    
            this.props.items._embedded.games.map ((row, index) =>                   
             {
                if(row.myuser.name == 'dicaros')
                {
               return(
                       <div key={index} className='gameorganizer'>
                            <li onClick={() => this.handleSelectGame(row.id)} 
                                className='gamelist' key={index}>
                                  <span className='today'> 

                                      {row.gamedate+ ', '}
                                      {String(row.gametime).substring(0, 5) + ' '}
                                      {(row.isprivate && ' - Private')}
                                      {(row.gameiscancelled && ' - Cancelled')}
                                      </span> 
                                      
                                     <br></br>
                                     @{(row._embedded.sportcenter.name) + ', '} 
                                      {row._embedded.sportcenter.street}
                                  <span className='gameorganizer'>Organized by: {row.myuser.name}</span>
                            </li>
                      </div>
                   )
                }
              }
            )
     )
   }
  
   const TableBody = () => {                       
                              return (<tbody> 
                                          <tr>
                                               <td className = 'gamelist' width='20%'>
                                                    <ul className='gamelist'><Tablerow/></ul>
                                               </td>    
                                          </tr>                         
                                      </tbody>)
     }
  

          return (
                   <table className='tablegames'>
                           <TableBody  />
                   </table>
                 );
     }
 }
 
export default UserProfile;