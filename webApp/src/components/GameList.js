import React from 'react';
import { currentday, timedash, todaydash } from '../functions/functions'
import { url } from '../constants/constants'

class GameList extends React.Component {

    // not used
/* 
   async handleChange(event) {
         await this.props.setSize(event.target.value);
         await this.props.setPage('prev', this.props.listurl, 1, this.props.items.page.totalPages)
   };
*/
 
/*   switchPage (direction) {
         this.props.setPage(direction, this.props.items.page.totalPages)
           };*/

async handleSelectGame(id) {
    await this.props.setGame(id)
    this.props.doNavigate('gamedetails')           
}

async handleCreateGame() {
    this.props.doNavigate('create')           
}

 async updateRecord(firstName, lastName, description, url) {  
    if (this.props.loginsuccess) {
       await  this.props.updateRecord(firstName, lastName, description, url)
         this.refresh();
      }
    }
 
   render() {      
     var tomorrow = new Date(Date.now()+1*24*60*60*1000);

         const TableHeader = () => {
                         return (
                                       <thead>
                                           <tr> 
                                              <th className = 'gamelist'>
                                              <div className='closewindowdiv'><span className = 'createbuttonspan'><button onClick={() => this.handleCreateGame()}>+ Create New</button></span>
                                                 <br></br>Games near your location</div>
                                              </th>
                                           </tr>
                                       </thead>
                                 )
           };
 
         const Tablerow = () => {
            return(                    
                  this.props.items._embedded.games.map ((row, index) =>                   
                   {
                     if(row.gamedate > todaydash(currentday()) || (row.gamedate == todaydash(currentday()) && row.gametime >= timedash(currentday())))
                     {
                     return(
                             <div key={index} className='gameorganizer'>
                                  <li onClick={() => this.handleSelectGame(row.id)} 
                                      className='gamelist' key={index}>
                                        <span className='today'> 
                                            {(row.gamedate == todaydash(currentday())) && 'Today, '}
                                            {(row.gamedate == todaydash(currentday(tomorrow))) && 'Tomorrow, '}
                                            {(row.gamedate > todaydash(currentday(tomorrow))) && row.gamedate+ ', '}
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
                       <TableHeader />
                       <TableBody  />
    
                   </table>
                 );
     }
 }
 
export default GameList;