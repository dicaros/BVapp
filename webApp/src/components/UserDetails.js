import React from 'react';
import userpic from '../img/userfotodefault.jpg'

var countpage = 0 + ' '

class UserDetails extends React.Component {

   render() {      

      const Table1 = () => {
        return(        

                          <table className = 'tableuser1'>
                              <thead>
                                  <tr key='001'>
                                      <th className = 'userdetailsheader' height='120px'><center><img src={userpic} onClick={() => this.props.doNavigate('userp')} className='userpic' alt='O'></img></center></th>
                                  </tr>
                                  <tr key='002'>
                                      <th className = 'userdetailsheader' height='30px'>{this.props.useritems[0].myuser.firstName} {this.props.useritems[0].myuser.lastName}
                                      <h4 className = 'userdetailsheader'>({this.props.useritems[0].myuser.email})</h4>
                                      <h4 className = 'userdetailsheader'>Member since: {this.props.useritems[0].mydate}</h4>
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
                                                    <td className = 'userlist'>{this.props.useritems[0].playedcount}</td>
                                                </tr>
                                                <tr key='3' height='30px'>
                                                    <td className = 'userlist'>Games Missed</td>
                                                    <td className = 'userlist'>{this.props.useritems[0].noShowCount}</td>
                                                </tr>
                                                <tr  key='4' height='30px'>
                                                    <td className = 'userlist'>Phone number</td>
                                                    <td className = 'userlist'>{this.props.useritems[0].phone}</td>
                                                </tr>
                                                <tr key='5' height='30px'>
                                                    <td className = 'userlist'>Email</td>
                                                    <td className = 'userlist'>{this.props.useritems[0].myuser.email}</td>
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
                 
           )
    }
                           
          return (
                    <Table1 />            
                 );
     }
 }
 
export default UserDetails;