import React from 'react';
import { handleDelete } from '../functions/functions'

var countpage = 0 + ' '

class UserDetails extends React.Component {

    componentDidMount() { 
      console.log(this.props.loginsuccess)    
                 this.refresh();
   };

   componentDidUpdate(prevProps) {
    if(this.props.loginsuccess != prevProps.loginsuccess)
    {
     this.refresh();
   }
  } 


   refresh(){ this.props.fetchUserDetails(this.props.myuserurl) }

   render() {      

         const TableHeader = () => {
                         return (
                                       <thead>
                                           <tr> 
                                             <th>Name</th>
                                             <th>Surname</th>
                                             <th>Phone</th>
                                             <th>GPSx</th>
                                             <th>GPSy</th>
                                             <th># Games</th>
                                             <th># No Show</th>
                                           </tr>
                                       </thead>
                                 )
           };
 
 
         const Tablerow = () => {
           return(        
              this.props.useritems._embedded.myUserDetailses.map ((row, index) =>                   
                   {
                     return(
                           <tr key={index}>
                           <td id = 'tdgamelist1' width='20%'>{row.firstName}</td>
                           <td id = 'tdgamelist1' width='10%'>{row.lastName}</td>
                           <td id = 'tdgamelist1' width='10%'>{row.phone}</td>
                           <td id = 'tdgamelist1' width='10%'>{row.gpsx}</td>
                           <td id = 'tdgamelist1' width='10%'>{row.gpsy}</td>
                           <td id = 'tdgamelist1' width='10%'>{row.playedcount}</td>
                           <td id = 'tdgamelist1' width='10%'>{row.noShowCount}</td>

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
                                          <tfoot>
                                              <tr>
                                                  <td colSpan='6'>
                                                  </td>                             
                                              </tr>
                                          </tfoot>
                                       );   
                           }
                           
         if(this.props.loginsuccess && typeof this.props.useritems._embedded != 'undefined') {
          return (
            
                   <table>
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
 
export default UserDetails;