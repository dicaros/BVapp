import React from 'react';
import { handleDelete } from '../functions/functions'

var countpage = 0 + ' '

class GameList extends React.Component {

    componentDidMount() { 
      console.log(this.props.loginsuccess)    
                 this.refresh();
   };
 
    componentDidUpdate(prevProps) {
       if(this.props.page != prevProps.page || this.props.size != prevProps.size || this.props.loginsuccess != prevProps.loginsuccess || this.props.nitems != prevProps.nitems)
       {
        this.refresh();
      }
     } 
 
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

   refresh(){ this.props.fetchData(this.props.listurl, this.props.page, this.props.size) }
 
   render() {      

         const TableHeader = () => {
                         return (
                                       <thead>
                                           <tr> 
                                             <th>Game organizer</th>
                                             <th>Date</th>
                                             <th>Time</th>
                                             <th>Description</th>
                                           </tr>
                                       </thead>
                                 )
           };
 
 
         const Tablerow = () => {
           return(        
                   this.props.items._embedded.games.map ((row, index) =>                   
                   {
                     return(
                           <tr key={index}>
                           <td id = 'tdgamelist1' width='20%'>{row.myuser.name} {row.myuser.surname}</td>
                           <td id = 'tdgamelist1' width='10%'>{row.gamedate}</td>
                           <td id = 'tdgamelist1' width='10%'>{row.gametime}</td>
                           <td width='40%'>{row.description}</td>
                   <td width='5%'><button id='button_delete' onClick={() => {handleDelete(row._links.self.href, this.props, this.props.listurl)}}>Delete</button></td>
                   <td width='5%'><a  id = 'bodylink' href = '#' onClick={() => this.updateRecord('Dummy character', 'Surname', 'Job updated', row._links.self.href)}>Update</a></td>
                   </tr>)})
           )
         }
 
         const TableBody = () => {                       
                                    return (<tbody><Tablerow/></tbody>)
           }
 
                 const TableFooter = () => {
                                     return (
                                      countpage = this.props.items.page.totalPages + ' ',
                                       <tfoot>
                                         <tr><td colSpan='6'>
                                           <br></br>
                                           </td>
                                         </tr>
                                         <tr id = 'trfooter'>
                                           <td colSpan='6'>
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
                               
                                     </tr></tfoot>
                                       );   
                           }
         if(this.props.loginsuccess && typeof this.props.items._embedded != 'undefined') {
          
          return (
                   <table className='tablelist'>
                       <TableHeader />
                       <TableBody  />
                       <TableFooter  />
                   </table>
                 );
         }
         else {
          return ''
        }
     }
 }
 
export default GameList;