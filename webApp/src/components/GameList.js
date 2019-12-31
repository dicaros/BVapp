import React from 'react';
import { currentday, timedash, todaydash } from '../functions/functions'

var countpage = 0 + ' '

class GameList extends React.Component {

 
   async handleChange(event) {
         await this.props.setSize(event.target.value);
         await this.props.setPage('prev', this.props.listurl, 1, this.props.items.page.totalPages)
   };

/*   switchPage (direction) {
         this.props.setPage(direction, this.props.items.page.totalPages)
           };*/

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
                                                 Upcoming games near your location</div>
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
                             <div className='gameorganizer'><a key={index} href='#' className='gamelist'><li className='gamelist' key={index}>
                               <span className='today'> 
                               {(row.gamedate == todaydash(currentday())) && 'Today, '}
                               {(row.gamedate == todaydash(currentday(tomorrow))) && 'Tomorrow, '}
                               {(row.gamedate > todaydash(currentday(tomorrow))) && row.gamedate+ ', '}
                               {String(row.gametime).substring(0, 5) + ' '}

                                 @{(row._embedded.sportcenter.name) + ', '} </span> 
                               {row._embedded.sportcenter.street}
                               <br/><i>{row.description}</i>
                               <span className='gameorganizer'>Organized by: {row.myuser.name}</span>
                             </li></a></div>
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
                   <table className='tablelist1'>
                       <TableHeader />
                       <TableBody  />
    
                   </table>
                 );
     }
 }
 
export default GameList;