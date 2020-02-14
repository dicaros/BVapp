import React from 'react';
import { currentday, todaydash } from '../functions/functions'
import { url } from '../constants/constants'


class UserProfile extends React.Component {

constructor(props) {
          super(props);
          this.state = {
                buttonclass1: 'tabbedheaderbutton2',
                buttonclass2: 'tabbedheaderbutton1',
                userboxvisible: 2,
            }
          }

        handleSubmitPassword = (event) => {
               event.preventDefault();
               this.props.updateUsers(url+'api/updatepassword', {password: event.target.password.value, confirmpassword: event.target.password2.value});
          }

          handleSubmitPhone = (event) => {
               event.preventDefault();
               this.props.updateUsers(url+'api/updatedetails', {phone: event.target.phone.value});
               this.props.doNavigate('userp')
          }
  
        handleSelectTab1() {
               this.setState({
                       buttonclass1: 'tabbedheaderbutton1',
                       buttonclass2: 'tabbedheaderbutton2',
                       userboxvisible: 1
             })
        }



        handleSelectTab2() {
          this.setState({
                  buttonclass1: 'tabbedheaderbutton2',
                  buttonclass2: 'tabbedheaderbutton1',
                  userboxvisible: 2
        })
   }

        async handleSelectGame(id) {
            await this.props.setGame(id)
            this.props.doNavigate('gamedetails')           
        }


  

   render() {      
 

    const TabbedMenu = () => {
          return(
                    <h1>
                          <div className='closewindowdiv'>
                              <div className="tabbedheader">
                                   <button className={this.state.buttonclass1} onClick={() => this.handleSelectTab1()}>Your games</button>
                                   <button className={this.state.buttonclass2} onClick={() => this.handleSelectTab2()}>Your data</button>
                              </div>
                              <span className='closewindowspantop'>
                                   <button className='bodylink'href = '#' onClick={() => this.props.doNavigate('')}>
                                                X
                                   </button>
                              </span>
                         </div>
                    </h1>
               )
     }

      const List1 = () => {
            return (
                  <thead className='userboxhead' width='100%'>
                         <tr>
                              <th>                                    
                                   <TabbedMenu />
                              </th>
                         </tr>
                   </thead>           
                    )
      };

    const Tablerow1 = () => {
      return(                    
            this.props.usergamesitems.map ((row, index) => 
             {
                if(row.game.gamedate < todaydash(currentday()))
                {
                          return(
                              <div key={index} className='gameorganizer'>

                                          <li onClick={() => this.handleSelectGame(row.game.id)} 
                                           className='gamelist' key={index}>
                                           <span className='today'> 

                                          {row.game.gamedate+ ', '}
                                          {String(row.game.gametime).substring(0, 5) + ' '}
                                          {(row.isprivate && ' - Private')}
                                          {(row.gameiscancelled && ' - Cancelled')}
                                          </span> 
                                      
                                          @{(row.game.sportcenter.name) + ', '} 
                                          {row.game.sportcenter.street}
                                    <span className='gameorganizer2'>Organized by: {row.game.myuser.name}</span>
                            </li>
                      </div>
                   )
                }
              }
            )
     )
}

const Error1 = () => {
     if (this.props.registration.error == "Success") {
          return ("Change successful")}
     
     else if(this.props.registration.error != null)
          return (this.props.registration.error)

      else {return ''}
   }

const UserGames = () => {
      return (
            <tbody>
                 <tr> 
                           <th className = 'gamelist'>
                                <div className='closewindowdiv'>
                                    <br></br>Games you recently played</div>
                               </th>
                              </tr>
                   <tr>
                        <td className = 'gamelist' width='20%'>
                             <ul className='gamelist1'><Tablerow1 /></ul>
                        </td>    
                   </tr>              
               <tr> 
                         <th className = 'gamelist'>
                                   <div className='closewindowdiv'>       
                                   Upcoming games</div>
                              </th>
                         </tr>
               <tr>
                    <td className = 'gamelist' width='20%'>
                         <ul className='gamelist1'><Tablerow2 /></ul>
                    </td>    
               </tr>      
             </tbody>                   
              )
};

const UserRow1 = () => {
     return(                    
                              <table className = 'userprofile'>
                                   <tbody>
                                   <tr className='userprofile'>
                                        <td className='userprofile'>
                                        Name: {this.props.myuseritems.firstName} <br />
                                        Surname: {this.props.myuseritems.lastName}
                                        </td>
                                   </tr>
                                   <tr className='userprofile'>
                                   <td className='userprofile'>
                                        e-mail: {this.props.useritems[0].myuser.email}
                                        </td>
                                   </tr>
                                   <tr className='userprofile'>
                                        <td className='userprofile'>
                                        </td>
                                   </tr>
                                   <tr className='userprofile'>
                                   <td className='userprofile'>
                                        Games played: {this.props.useritems[0].playedcount}
                                        </td>
                                   </tr>
                                   <tr className='userprofile'>
                                   <td className='userprofile'>
                                        no-shows: {this.props.useritems[0].noShowCount}
                                        </td>
                                   </tr>
                                   <tr className='userprofile'>
                                        <td className='userprofile'>
                                        </td>
                                   </tr>
                                   <tr className='userprofile'>
                                                  <td className='userprofile'>
                                                            Phone: {this.props.useritems[0].phone}
                                                  </td>
                                   </tr>
                                   <tr className='userprofile'>
                                                  <td className='userprofile'>

                                                  </td>
                                   </tr>
                                   <tr className='userprofile'>
                                                  <td className='userprofile'>
                                                                 <button name="register" onClick={() =>  this.props.doNavigate('userp3')}  type="submit">
                                                                 Change Details</button>
                                                  </td>
                                   </tr>
                                   <tr className='userprofile'>
                                                  <td className='userprofile'>

                                                  </td>
                                   </tr>

                                   <tr className='userprofile'>
                                                  <td className='userprofile'>
                                                                 <button name="register" onClick={() =>  this.props.doNavigate('userp2')}  type="submit">
                                                                 Change Password</button>
                                                  </td>
                                   </tr>


                                   </tbody>
                              </table>

    )
}

const UserRow2 = () => {
     return(                    
          <table className = 'userprofile'>
               <tbody>
               <tr className='userprofile'>
                    <td className='userprofile'>
                    <form method='POST' onSubmit={this.handleSubmitPassword.bind(this)}> 
                                <table>
                                       <thead>
                                             <tr>
                                                  <th colSpan={4}><br></br></th>
                                             </tr>
                                             <tr height='50px'>
                                                  <th colSpan={4}>Change your password:</th>
                                             </tr>
                                                  </thead>
                                                  <tbody>
                                                  <tr height='25px'>
                                                       <td>Password*</td>
                                                       <td><input type='password' name='password'/></td>
                                                       <td></td>
                                                       <td className='signuperror'><Error1 /> </td>
                                                  </tr>
                                                  <tr height='25px'>
                                                       <td>Repeat Password*</td>
                                                       <td><input type='password' name='password2'/></td>
                                                       <td></td>
                                                       <td className='signuperror'></td>
                                                  </tr>
                                                  </tbody>
                                                  <tfoot>
                                                       <tr height='60px'>
                                                            <td className='tdloginbutton' colSpan={4}>
                                                                 <button name="register"   type="submit">
                                                                 Submit</button>
                                                            </td>
                                                       </tr>
                                                  </tfoot>
                                             </table>
                                   </form>
                              </td>
                         </tr>
                    </tbody>
               </table>

    )
}

const UserRow3 = () => {
     return(                    
          <table className = 'userprofile'>
               <tbody>
               <tr className='userprofile'>
                    <td className='userprofile'>
                    <form method='POST' onSubmit={this.handleSubmitPhone.bind(this)}> 
                                <table>
                                       <thead>
                                             <tr>
                                                  <th colSpan={4}><br></br></th>
                                             </tr>
                                             <tr height='50px'>
                                                  <th colSpan={4}>Change your user details:</th>
                                             </tr>
                                                  </thead>
                                                  <tbody>
                                                  <tr height='25px'>
                                                       <td>Phone</td>
                                                       <td><input type='text' name='phone'/></td>
                                                       <td></td>
                                                       <td className='signuperror'></td>
                                                  </tr>
                                    
                                                  </tbody>
                                                  <tfoot>
                                                       <tr height='60px'>
                                                            <td className='tdloginbutton' colSpan={4}>
                                                                 <button name="register"   type="submit">
                                                                 Submit</button>
                                                            </td>
                                                       </tr>
                                                  </tfoot>
                                             </table>
                                   </form>
                              </td>
                         </tr>
                    </tbody>
               </table>

    )
}

const UserStuff = () => {
     return (
           <tbody>
                <tr> 
                          <th className = 'gamelist'>
                               <div className='closewindowdiv'>
                                   Your user details</div>
                              </th>
                             </tr>
               <tr>
                        <td className = 'gamelist' width='20%'>
                             {this.props.navigate[this.props.navigate.length-1]=='userp' && <UserRow1 />}
                             {this.props.navigate[this.props.navigate.length-1]=='userp2' && <UserRow2 />}
                             {this.props.navigate[this.props.navigate.length-1]=='userp3' && <UserRow3 />}

                        </td>    
                   </tr>           
  
            </tbody>                   
             )
};

const Tablerow2 = () => {
      return(                    
            this.props.usergamesitems.map ((row, index) => 
             {
                if(row.game.gamedate > todaydash(currentday()))
                {
                          return(
                              <div key={index} className='gameorganizer'>

                                          <li onClick={() => this.handleSelectGame(row.game.id)} 
                                           className='gamelist' key={index}>
                                           <span className='today'> 

                                          {row.game.gamedate+ ', '}
                                          {String(row.game.gametime).substring(0, 5) + ' '}
                                          {(row.isprivate && ' - Private')}
                                          {(row.gameiscancelled && ' - Cancelled')}
                                          </span> 
                                      
                                          @{(row.game.sportcenter.name) + ', '} 
                                          {row.game.sportcenter.street}
                                    <span className='gameorganizer2'>Organized by: {row.game.myuser.name}</span>
                            </li>
                      </div>
                   )
                }
              }
            )
     )
}



          return (<table className='tablegames'>     
                                          <List1 />
                                          {this.state.userboxvisible == 2 && 
                                          <UserStuff />}
                                          {this.state.userboxvisible == 1 && 
                                          <UserGames />}
                </table>
                 );
     }
 }
 
export default UserProfile;