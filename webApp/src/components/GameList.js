import React from 'react';
import { currentday, timedash, todaydash } from '../functions/functions'
import { url } from '../constants/constants'

var countpage = 0 + ' '

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
    await this.props.fetchData('api/gameparticipantsget', url, '?id='+id)
    await this.props.fetchData('api/game2', url, '?id='+id)
    this.props.setNavigate('gamedetails')           
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
                                              <div className='closewindowdiv'><span className = 'createbuttonspan'><button onClick={() => this.props.setNavigate('create')}>+ Create New</button></span>                                            
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
                     if(true || row.gamedate > todaydash(currentday()) || (row.gamedate == todaydash(currentday()) && row.gametime >= timedash(currentday())))
                     {
                     return(
                             <div key={index} className='gameorganizer'>
                                  <li onClick={() => this.handleSelectGame(row.id)} 
                                      className='gamelist' key={index}>
                                        <span className='today'> 
                                            {(row.gamedate == todaydash(currentday())) && 'Today, '}
                                            {(row.gamedate == todaydash(currentday(tomorrow))) && 'Tomorrow, '}
                                            {(row.gamedate > todaydash(currentday(tomorrow))) && row.gamedate+ ', '}
                                            {String(row.gametime).substring(0, 5) + ' '}</span> 
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
/*                 const TableFooter = () => {
                                     return (
                                      countpage = this.props.items.page.totalPages + ' ',
                                       <tfoot>
                                         <tr id = 'trfooter'>
                                           <td>
                                                     <center>  <button onClick={() => this.switchPage('prev')}>Prev</button><span>&nbsp;&nbsp;</span>
                                                       <button onClick={() => this.switchPage('next')}>Next</button><span>&nbsp;&nbsp;</span>
                                  
                                                       {this.props.page+1}/{countpage}
                                                       
                                                        <select value={this.props.size} onChange={this.handleChange.bind(this)}>
                                                           <option value={5}>5</option>
                                                           <option value={10}>10</option>
                                                           <option value={20}>20</option>
                                                           <option value={50}>50</option>
                                                           <option value={100}>100</option>
                                                       </select>                                                   </center>
                                       </td>
                               
                                     </tr>
                                 </tfoot>
                              );   
                           }
  */      
          return (
                   <table className='tablegames'>
                       <TableHeader />
                       <TableBody  />
    
                   </table>
                 );
     }
 }
 
export default GameList;