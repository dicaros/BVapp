import React from 'react';
import { url } from '../store/actions/action-type';

class CreateGame extends React.Component {

    handleSubmit(event) {
      event.preventDefault();
      this.props.newUsers(url+'signup', event.target);
    }
  
 
   render() {      

      const Tablerow = () => {
            return(        
                    this.props.sportcenteritems._embedded.sportcenters.map ((row, index) =>                   
                    {
                      return(
                              <a href='/' className='agamelist'><li className='ligamelist' key={index}>{row.name}<br/>
                              </li></a>
                          )})
            )
          }

    const RegisterForm = () => {
      return(
      <form className='tablelist1' method='POST' onSubmit={this.handleSubmit.bind(this)}> 
      <div className='closewindowdiv' >
            <span className='closewindowspan'><a id='bodylink'href = '/' onClick={() => this.props.setNavigate('create')}>X</a></span>
            </div>
          <table>
            <thead>
            <tr>
                    <th colSpan={4}><Tablerow /></th>
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
                    <td className='signuperror'></td>
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
                    <td className='signuperror'></td>
              </tr>
              <tr height='25px'>
                    <td>Password*</td>
                    <td><input type='password' name='password'/></td>
                    <td></td>
                    <td className='signuperror'></td>
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
                    <td className='tdloginbutton' colSpan={4}><button name="register"   type="submit" className='submitbutton' >Register</button></td>
              </tr>
            </tfoot>
          </table>
</form>
)
}

if(this.props.loginsuccess && typeof this.props.sportcenteritems._embedded != 'undefined' && this.props.navigate == 'create') {
          
          return (
                       <center>
                         <RegisterForm />
                       </center>
                 );
         }
         else {
          return '';
        }
     }
 }
 
export default CreateGame;