import React from 'react';

const loginurl = "http://localhost:8080"

class LoginPage extends React.Component {

//  componentDidMount() {  
 //       console.log(this.props.loginsuccess)    
  //      this.refresh();
  // };
 
  doLogin(loginurl) {
    if(this.props.loginsuccess)
    {console.log('Already logged in, nothing happens')}
       if (!this.props.loginsuccess) {
         console.log('Logging in') 
         this.props.doLogin(loginurl)
       }
 }
 
 handleSubmit(event) {
     event.preventDefault();
     this.props.doLogin(loginurl, event.target);
 }
 
   refresh(){ this.props.fetchData(this.props.listurl, this.props.page, this.props.size) }
 
   render() {      
 
         const LoginForm = () => {
                   return(
                   <form method='POST' onSubmit={this.handleSubmit.bind(this)}> 
                       <table>
                         <thead>
                           <tr>
                                 <th colSpan={2}>You are not logged. Please login</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                                 <td>User</td>
                                 <td><input type='text' name='username'/></td>
                           </tr>
                           <tr>
                                 <td>Password</td>
                                 <td><input type='password' name='password'/></td>
                           </tr>
                           </tbody>
                         <tfoot>
                           <tr>
                                 <td className='tdloginbutton' colSpan={2}><button type="submit" className='submitbutton' >Login</button></td>
                           </tr>
                         </tfoot>
                       </table>
             </form>
          )
         }
 
        if(!this.props.loginsuccess && this.props.loginsuccess != null) {
           return(
                 <LoginForm />
             )
             
         }
        else {
          return ''
        }
     }
 }

export default LoginPage;