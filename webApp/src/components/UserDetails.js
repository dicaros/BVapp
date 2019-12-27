import React from 'react';
import userpic from '../img/userfotodefault.jpg';

var countpage = 0 + ' '

class UserDetails extends React.Component {

   render() {      

        const Table1 = () => {
           return(        
              this.props.useritems._embedded.myUserDetails.map ((row) =>                   
                   {
                     if(row.myuser.name == this.props.username)
                     {
                        let udetails = [row.playedcount, row.noShowCount, row.lastName, row.phone, 'n/a'];
                        return(
                          <table className = 'tablelist2'>
                              <thead>
                                  <tr key='001'>
                                      <th className = 'userdetailsheader' height='120px'><center><img src={userpic} id='userpic' alt='O'></img></center></th>
                                  </tr>
                                  <tr key='002'>
                                      <th className = 'userdetailsheader' height='30px'>{row.firstName} {row.lastName}
                                      <h4 className = 'userdetailsheader2'>({row.myuser.email})</h4>
                                      <h4 className = 'userdetailsheader2'>Member since: n/a</h4>
                                      </th>
                                  </tr>
                              </thead>
                              <tbody>
                                <tr key='0'>
                                  <td>
                                      <table className='userdetails'>

                                            <tbody>
                                              <tr key='1'>
                                                    <td height = '15px' colSpan='2'> </td>
                                                </tr>
                                                <tr  key='2' height='30px'>
                                                    <td id = 'tduserlist'>Games Played</td>
                                                    <td id = 'tduserlist'>{row.playedcount}</td>
                                                </tr>
                                                <tr key='3' height='30px'>
                                                    <td id = 'tduserlist'>Games Missed</td>
                                                    <td id = 'tduserlist'>{row.noShowCount}</td>
                                                </tr>
                                                <tr  key='4' height='30px'>
                                                    <td id = 'tduserlist'>Phone number</td>
                                                    <td id = 'tduserlist'>{row.phone}</td>
                                                </tr>
                                                <tr key='5' height='30px'>
                                                    <td id = 'tduserlist'>Email</td>
                                                    <td id = 'tduserlist'>{row.myuser.email}</td>
                                                </tr>
                                  </tbody>
                                          </table>
                                    </td>
                                  </tr>
                               </tbody>
                               <tfoot>
                                   <tr key='003'>
                                      <td></td>                             
                                   </tr>
                              </tfoot>
                          </table>
                  )}
               })
           )
         }
                           
         if(this.props.loginsuccess && typeof this.props.useritems._embedded != 'undefined' && this.props.navigate == 'games') {
          return (
                    <Table1 />            
                 );
         }
         else {
          return ''
        }
     }
 }
 
export default UserDetails;