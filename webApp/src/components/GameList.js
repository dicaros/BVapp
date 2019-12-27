import React from 'react';
import { handleDelete } from '../functions/functions'

var countpage = 0 + ' '

class GameList extends React.Component {

 
   async handleChange(event) {
         await this.props.setSize(event.target.value);
         await this.props.setPage('prev', this.props.listurl, 1, this.props.items.page.totalPages)
   };

   switchPage (direction) {
         this.props.setPage(direction, this.props.items.page.totalPages)
           };

   async updateRecord(firstName, lastName, description, url) {  
    if (this.props.loginsuccess) {
       await  this.props.updateRecord(firstName, lastName, description, url)
         this.refresh();
      }
    }
 
   render() {      

         const TableHeader = () => {
                         return (
                                       <thead>
                                           <tr> 
                                              <th>
                                              <div className='closewindowdiv'><span className = 'createbuttonspan'><button onClick={() => this.props.setNavigate('create')}>+ Create New</button></span>                                            
                                                  Game organizer / Date / Time / Description</div>
                                              </th>
                                           </tr>
                                       </thead>
                                 )
           };
 
         const Tablerow = () => {
           return(        
                   this.props.items._embedded.games.map ((row, index) =>                   
                   {
                     return(
                             <a href='/' className='agamelist'><li className='ligamelist' key={index}>{row.myuser.name} - {row.gamedate}, {row.gametime}<br/>
                             <i>{row.description}</i>
                             </li></a>
                         )})
           )
         }

         const TableBody = () => {                       
                                    return (<tbody> 
                                                <tr>
                                                     <td id = 'tdgamelist1' width='20%'>
                                                          <Tablerow/>
                                                     </td>    
                                                </tr>                         
                                            </tbody>)
           }
                 const TableFooter = () => {
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
         if(this.props.loginsuccess && typeof this.props.items._embedded != 'undefined' && this.props.navigate == 'games') {
          
          return (
                   <table className='tablelist1'>
                       <TableHeader />
                       <TableBody  />
                       <TableFooter  />
                   </table>
                 );
         }
         else {
          return '';
        }
     }
 }
 
export default GameList;