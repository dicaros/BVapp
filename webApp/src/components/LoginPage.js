import React from 'react';
import { url } from '../constants/constants'

class LoginPage extends React.Component {

//  componentDidMount() {  
 //       console.log(this.props.loginsuccess)    
  //      this.refresh();
  // };
 
 handleSubmit(event) {
     event.preventDefault();
     this.props.doLogin(url, event.target);
}
 
   render() {      
 
         const LoginForm = () => {
                   return(
                   <form method='POST' onSubmit={this.handleSubmit.bind(this)}> 
                       <table>
                         <thead>
                         <tr>
                                 <th colSpan={2}><br></br></th>
                           </tr>
                           <tr height='50px'>
                                 <th colSpan={2}>You are not logged. Please login</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr height='25px'>
                                 <td>User</td>
                                 <td><input type='text' name='username'/></td>
                           </tr>
                           <tr height='25px'>
                                 <td>Password</td>
                                 <td><input type='password' name='password'/></td>
                           </tr>
                           <tr height='25px'>
                                    <td colSpan={2} className='signuperror'>{this.props.loginerror && 'Wrong username or password'}</td>
                           </tr>
                           </tbody>
                         <tfoot>

                           <tr height='60px'>
                                 <td name="login" className='tdloginbutton' colSpan={2}><button type="submit" className='submitbutton' >Login</button></td>
                           </tr>
                         </tfoot>
                       </table>
             </form>
          )
         }
 
        if(!this.props.loginsuccess && this.props.loginsuccess != null) {
           return(
                 <center><LoginForm />
                    <br></br>
                    <div>New user? Register at this <a href='#' onClick = {() => this.props.doNavigate('register')}>link</a></div>
                 </center>
             )
             
         }
        else {
          return ''
        }
     }
 }

export default LoginPage;