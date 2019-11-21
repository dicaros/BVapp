import React from 'react';
import { handleDelete } from './functions/functions'
import './css/index.css'
const loginurl = "http://localhost:8080"
var countpage = 0 + ' '
const url = 'http://localhost:8080/api/employees'
const logouturl = "http://localhost:8080/logout"

class App extends React.Component {

   
componentDidMount() {  
       console.log(this.props.loginsuccess)    
                this.refresh();
  };

  componentDidUpdate(prevProps) {
      if(this.props.page != prevProps.page || this.props.size != prevProps.size || this.props.loginsuccess != prevProps.loginsuccess)
      {
        this.refresh();
      }
    } 

  async handleChange(event) {
        await this.props.setSize(event.target.value);
        await this.props.setPage('prev', url, 1, this.props.items.page.totalPages)
  };

  switchPage (direction) {
        this.props.setPage(direction, this.props.page, this.props.items.page.totalPages)
          };

 logout(logouturl) {
      if (this.props.loginsuccess) {
         this.props.doLogout(logouturl);
      }
      }

 doLogin(loginurl) {
   if(this.props.loginsuccess)
   {console.log('Already logged in, nothing happens')}
      if (!this.props.loginsuccess) {
        console.log('Logging in') 
        this.props.doLogin(loginurl)
      }
}

addNew(firstName, lastName, description) {

  if (this.props.loginsuccess) {
     this.props.addNew(firstName, lastName, description, url)
     this.refresh();
  }
}

handleSubmit(event) {
  event.preventDefault();
  this.props.doLogin(loginurl, event.target);
}

  refresh(){        this.props.fetchData(url, this.props.page, this.props.size)       }

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
            </form>)
        }

        const TableHeader = () => {
                        return (
                                      <thead>
                                          <tr> 
                                            <th className='thlist'>First Name</th>
                                            <th className='thlist'>Last Name</th>
                                            <th className='thlist'>Description</th>
                                          </tr>
                                      </thead>
                                )
          };


        const Tablerow = () => {
          return(        
                  countpage = this.props.items.page.totalPages + ' ',
                  this.props.items._embedded.employees.map ((row, index) => 
                  
                  {
                    return(
                          <tr key={index}>
                          <td>{row.firstName}</td>
                          <td>{row.lastName}</td>
                          <td>{row.description}</td>
                  <td><button onClick={() => {handleDelete(row._links.self.href, this.props, url)}}>Delete</button></td>
                  </tr>)})
          )
        }

        const TableBody = () => {
                        
                        if(typeof this.props.items._embedded != 'undefined' && this.props.loginsuccess && !this.props.isLoading) {
                                   return (<tbody><Tablerow/></tbody>)
                                  }
                        else if (this.props.hasErrored) {
                                  return (<tbody><tr><td>Error: failed to load 1</td></tr></tbody>)
                                }
                        else if (this.props.isLoading) {
                                  return (<tbody><tr><td>loading...</td></tr></tbody>)
                                }                         
                        else { 
                                  return (<tbody><tr><td>Error: failed to load 2</td></tr></tbody>)
                                }
          }

                const TableFooter = () => {
                                    return (
                                    
                                      <tfoot><tr><td colSpan={4}>
                                                      <button onClick={() => this.switchPage('prev')}>Prev</button><span>&nbsp;&nbsp;</span>
                                                      <button onClick={() => this.switchPage('next')}>Next</button><span>&nbsp;&nbsp;</span>
                                                      <button onClick={() => this.doLogin(loginurl)}>Login</button><span>&nbsp;&nbsp;</span>
                                                      <button onClick={() => this.logout(logouturl)}>Logout</button><span>&nbsp;&nbsp;</span>
                                                      <button onClick={() => this.addNew('Stefano', 'Di Caro', 'Test')}>Create New</button><span>&nbsp;&nbsp;</span>

                                                      {this.props.page+1}/{countpage}
                                                      
                                                       <select value={this.props.size} onChange={this.handleChange.bind(this)}>
                                                          <option value={5}>5</option>
                                                          <option value={10}>10</option>
                                                          <option value={20}>20</option>
                                                          <option value={50}>50</option>
                                                          <option value={100}>100</option>
                                                      </select>                                                   

                                    </td></tr></tfoot>
                                      );   
                          }
        if(this.props.loginsuccess || this.props.isLoading) {
        return (
                  <table width='30%'>
                      <TableHeader />
                      <TableBody  />
                      <TableFooter  />
                  </table>
                );
        }
        else {
          return(
                <LoginForm />
            )
        }
    }
}

export default App;
