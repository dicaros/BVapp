import React from 'react';
import { url } from '../store/actions/action-type';

class CreateGame extends React.Component {

      componentDidMount() { 
      console.log(this.props.loginsuccess)    
                 this.refresh();
   };
 
    componentDidUpdate(prevProps) {
       if(this.props.page != prevProps.page || this.props.size != prevProps.size || this.props.loginsuccess != prevProps.loginsuccess || this.props.nitems != prevProps.nitems)
       {
        this.refresh();
      }
     } 
 
   async handleChange(event) {
         await this.props.setSize(event.target.value);
         await this.props.setPage('prev', this.props.listurl, 1, this.props.items.page.totalPages)
   };

   createnewgame () {
        this.props.setNavigate('create');
   }
 
   switchPage (direction) {
         this.props.setPage(direction, this.props.items.page.totalPages)
           };

   async updateRecord(firstName, lastName, description, url) {  
    if (this.props.loginsuccess) {
       await  this.props.updateRecord(firstName, lastName, description, url)
         this.refresh();
      }
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.newUsers(url+'signup', event.target);
    }
  

   refresh(){ this.props.fetchGames(this.props.listurl, this.props.page, this.props.size) }
 
   render() {      

    const RegisterForm = () => {
      return(
      <form className='tablelist1' method='POST' onSubmit={this.handleSubmit.bind(this)}> 
          <table>
            <thead>
            <tr>
                    <th colSpan={4}></th>
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

if(this.props.loginsuccess && typeof this.props.items._embedded != 'undefined' && this.props.navigate == 'create') {
          
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