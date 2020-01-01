import React from 'react';
import { Redirect } from 'react-router-dom';
import { url } from '../constants/constants'

class RegisterUser extends React.Component {
 
 handleSubmit(event) {
    event.preventDefault();
    this.props.newUsers(url+'signup', event.target);
  }

  render() {      
    const Redir = () => {
      if (this.props.registration.checkfailed == false || this.props.loginsuccess)
        return (<Redirect to='/' />)                
      else return('');
  }

  const Error1 = () => {
        if (this.props.registration.nameblank) {
          return (' please enter a username')
        }
        else if (this.props.registration.nameexists) {
          return(' the username already exist')
        }
        else {return ''}
  }

  const Error2 = () => {
    if (this.props.registration.psswblank) {
    return (' the password cannot be blank')}
    else if (this.props.registration.psswshort) {
      return (' the password must be at least 8 chars long')}
    else {return ''}
}

const Error3 = () => {
  if (this.props.registration.psswmismatch) {
  return (' you have typed two different passwords')}
  else {return ''}
}

const Error4 = () => {
  if (this.props.registration.emailvalid) {
  return (' please provide a valid email address')}
  else if (this.props.registration.emailexists) {
    return (' a user with this email address already exists')}
  
  else {return ''}
}

    const RegisterForm = () => {
              return(
              <form method='POST' onSubmit={this.handleSubmit.bind(this)}> 
                  <table>
                    <thead>
                    <tr>
                            <th colSpan={4}><br></br></th>
                      </tr>
                      <tr height='50px'>
                            <th colSpan={4}>Fill in your details:</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr height='25px'>
                            <td width='200px'>Username*</td>
                            <td><input type='text' name='username'/></td>
                            <td width = '20px'> </td>
                            <td className='signuperror'> <Error1 /></td>
                      </tr>
                      <tr height='25px'>
                            <td width='200px'>First Name*</td>
                            <td><input type='text' name='firstname'/></td>
                            <td width = '20px'> </td>
                            <td className='signuperror'></td>
                      </tr>
                      <tr height='25px'>
                            <td width='200px'>Last Name*</td>
                            <td><input type='text' name='lastname'/></td>
                            <td width = '20px'> </td>
                            <td className='signuperror'></td>
                      </tr>
                      <tr height='25px'>
                            <td>Email*</td>
                            <td><input type='text' name='email'/></td>
                            <td></td>
                            <td className='signuperror'> <Error4 /></td>
                      </tr>
                      <tr height='25px'>
                            <td>Password*</td>
                            <td><input type='password' name='password'/></td>
                            <td></td>
                            <td className='signuperror'> <Error2 /></td>
                      </tr>
                      <tr height='25px'>
                            <td>Repeat Password*</td>
                            <td><input type='password' name='password2'/></td>
                            <td></td>
                            <td className='signuperror'><Error3 /></td>
                      </tr>
                      </tbody>
                    <tfoot>

                      <tr height='60px'>
                            <td className='tdloginbutton' colSpan={4}><button name="register"   type="submit" className='submitbutton' >Register</button></td>
                      </tr>
                    </tfoot>
                  </table>
        </form>
     )
    }

      return(
            <center>
                        <RegisterForm /><Redir />
                        <br></br>
            </center>
        )
        
    }
   
}

export default RegisterUser;