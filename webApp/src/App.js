import React, { Component } from 'react';
import { AppContainer } from './AppContainer';
import { handleDelete } from './functions/functions'
const loginurl = "http://localhost:8080"
var countpage = 0 + ' '
const url = 'http://localhost:8080/api/employees'
const logouturl = "http://localhost:8080/logout"

class App extends React.Component {

   
  componentDidMount() {                  
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
        this.props.setPage(direction, url, this.props.page, this.props.items.page.totalPages)
          };

 logout(logouturl) {
      if (this.props.loginsuccess) {
         this.props.doLogout(logouturl);
      }
      }

 doLogin(loginurl, url) {
      if (!this.props.loginsuccess) {
         this.props.doLogin(loginurl)
      }
}

  refresh(){        this.props.fetchData(url, this.props.page, this.props.size)       }

  render() {      

        const TableHeader = () => {
                        return (
                                      <thead>
                                          <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Description</th>
                                          </tr>
                                      </thead>
                                )
          };


        const TableBody = () => {
                        if(typeof this.props.items._embedded !== 'undefined' && this.props.loginsuccess && !this.props.isLoading) {
                                   return (
                                            countpage = this.props.items.page.totalPages + ' ',
                                            this.props.items._embedded.employees.map ((row, index) => 
                                                {
                                                    return (
                                                            <tbody>
                                                                  <tr key={index}>
                                                                        <td>{row.firstName}</td>
                                                                        <td>{row.lastName}</td>
                                                                        <td>{row.description}</td>
                                                                        <button onClick={() => {handleDelete(row._links.self.href, this.props, url)}}>Delete</button>
                                                                  </tr>
                                                            </tbody>                  
                                                            )
                                                }
                                        )
                                    );
                                  }
             
                        else if (this.props.hasErrored) {
                                  return <div>Error: failed to load 1</div>
                                }
                        else if (this.props.isLoading) {
                                  return <div>Loading...</div>
                                }                         
                        
                          else { 
                                  return (<div>Error: failed to load 2</div>)
                                }
          }

                const TableFooter = () => {
                                    return (
                                    
                                      <tfoot>
                                                <tr key="footer">
                                                      <button onClick={() => this.switchPage('prev')}>Prev</button><span>&nbsp;&nbsp;</span>
                                                      <button onClick={() => this.switchPage('next')}>Next</button><span>&nbsp;&nbsp;</span>
                                                      <button onClick={() => this.doLogin(loginurl, url)}>Login</button><span>&nbsp;&nbsp;</span>
                                                      <button onClick={() => this.logout(logouturl)}>Logout</button><span>&nbsp;&nbsp;</span>

                                                      {this.props.page+1}/{countpage}
                                                      
                                                       <select value={this.props.size} onChange={this.handleChange.bind(this)}>
                                                          <option value={5}>5</option>
                                                          <option value={10}>10</option>
                                                          <option value={20}>20</option>
                                                          <option value={50}>50</option>
                                                          <option value={100}>100</option>
                                                      </select>                                                   
                                                </tr>
                                      </tfoot>
                                      );
                                    
                          }


        return (
                  <table>
                      <TableHeader />
                      <TableBody  />
                      <TableFooter  />
                  </table>
                );
    }

}

export default App;