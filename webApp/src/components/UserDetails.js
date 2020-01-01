import React from 'react';
import userpic from '../img/userfotodefault.jpg'

var countpage = 0 + ' '

class UserDetails extends React.Component {

   render() {      

      const Table1 = () => {
        return(        

              this.props.useritems._embedded.myUserDetails.map ((row, index) =>                   
                   {
                     if(row.myuser.name == this.props.username)
                     {
                        return(
                          <table key={index} className = 'tableuser1'>
                              <thead>
                                  <tr key='001'>
                                      <th className = 'userdetailsheader' height='120px'><center><img src={userpic} className='userpic' alt='O'></img></center></th>
                                  </tr>
                                  <tr key='002'>
                                      <th className = 'userdetailsheader' height='30px'>{row.firstName} {row.lastName}
                                      <h4 className = 'userdetailsheader'>({row.myuser.email})</h4>
                                      <h4 className = 'userdetailsheader'>Member since: n/a</h4>
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
                                                    <td className = 'userlist'>Games Played</td>
                                                    <td className = 'userlist'>{row.playedcount}</td>
                                                </tr>
                                                <tr key='3' height='30px'>
                                                    <td className = 'userlist'>Games Missed</td>
                                                    <td className = 'userlist'>{row.noShowCount}</td>
                                                </tr>
                                                <tr  key='4' height='30px'>
                                                    <td className = 'userlist'>Phone number</td>
                                                    <td className = 'userlist'>{row.phone}</td>
                                                </tr>
                                                <tr key='5' height='30px'>
                                                    <td className = 'userlist'>Email</td>
                                                    <td className = 'userlist'>{row.myuser.email}</td>
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
                           
          return (
                    <Table1 />            
                 );
     }
 }
 
export default UserDetails;