import React from 'react';
import { handleDelete } from '../functions/functions'

var countpage = 0 + ' '
const url = 'http://localhost:8080/api/games'

class EmployeeList extends React.Component {

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
         await this.props.setPage('prev', url, 1, this.props.items.page.totalPages)
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

   refresh(){ this.props.fetchData(url, this.props.page, this.props.size) }
 
   render() {      

         const TableHeader = () => {
                         return (
                                       <thead>
                                           <tr> 
                                             <th className='thlist'>Game organizer</th>
                                             <th className='thlist'>Date</th>
                                             <th className='thlist'>Time</th>
                                             <th className='thlist'>Description</th>
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
                           <td>{row.myuser.name}</td>
                           <td>{row.gamedate}</td>
                           <td>{row.gametime}</td>
                           <td>{row.description}</td>
                   <td><button onClick={() => {handleDelete(row._links.self.href, this.props, url)}}>Delete</button></td>
                   <td><a  id = 'bodylink' href = '#' onClick={() => this.updateRecord('Dummy character', 'Surname', 'Job updated', row._links.self.href)}>Update</a></td>
                   </tr>)})
           )
         }
 
         const TableBody = () => {                       
                                    return (<tbody><Tablerow/></tbody>)
           }
 
                 const TableFooter = () => {
                                     return (
                                      countpage = this.props.items.page.totalPages + ' ',
                                       <tfoot><tr><td colSpan={4}>
                                                       <button onClick={() => this.switchPage('prev')}>Prev</button><span>&nbsp;&nbsp;</span>
                                                       <button onClick={() => this.switchPage('next')}>Next</button><span>&nbsp;&nbsp;</span>
                                  
                                                       {this.props.page+1}/{countpage}
                                                       
                                                        <select value={this.props.size} onChange={this.handleChange.bind(this)}>
                                                           <option value={5}>5</option>
                                                           <option value={10}>10</option>
                                                           <option value={20}>20</option>
                                                           <option value={50}>50</option>
                                                           <option value={100}>100</option>
                                                       </select>                                                   
 
                                     </td></tr></tfoot>
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
 
export default EmployeeList;