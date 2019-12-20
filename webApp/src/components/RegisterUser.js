import React from 'react';

const url = "http://localhost:8080/signup"


class RegisterUser extends React.Component {
 
  handleSubmit(event) {
    event.preventDefault();
    this.props.newUser(url, event.target);
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
                            <th colSpan={2}>Fill in your details:</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr height='25px'>
                            <td width='200px'>UserName*</td>
                            <td><input type='text' name='username'/></td>
                      </tr>
                      <tr height='25px'>
                            <td>Password*</td>
                            <td><input type='password' name='password'/></td>
                      </tr>
                      <tr height='25px'>
                            <td>Repeat Password*</td>
                            <td><input type='passwordrepeat' name='password2'/></td>
                      </tr>
                      </tbody>
                    <tfoot>

                      <tr height='60px'>
                            <td className='tdloginbutton' colSpan={2}><button type="submit" className='submitbutton' >Register</button></td>
                      </tr>
                    </tfoot>
                  </table>
        </form>
     )
    }

   
      return(
            <center>
                <table width = '80%'><tbody><tr><td>
                        <LoginForm />
                        <br></br>
                        <div>New user? Register at this <a href='/register'>link</a></div>
                    </td></tr></tbody></table>
            </center>
            
        )
        
    }
   
}

export default RegisterUser;