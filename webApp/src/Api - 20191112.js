import React, { Component } from 'react';
import { AppContainer } from './AppContainer';

const url = 'http://localhost:8080/api/employees'


class App extends React.Component {

   
  componentDidMount() {                  
                this.props.fetchData(url, this.props.page, 10);
  };

  handleChange() {};
  handleDelete() {};
  prevPage() {};
  
  async switchPage (direction) {
        await this.props.setPage(direction, url, this.props.page, this.props.items.page.totalPages)
        this.props.fetchData(url, this.props.page, 10)
          };

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


        const TableBody = (props) => {
                        if (this.props.hasErrored) {
                                  return <div>Error: failed to load</div>
                                }
                        else if (this.props.isLoading) {
                                  return <div>Loading...</div>
                                }                         
                        else if(typeof this.props.items._embedded !== 'undefined') {
                        
                                  return (
                                            this.props.items._embedded.employees.map ((row, index) => 
                                                {
                                                    return (
                                                            <tbody>
                                                                  <tr key={index}>
                                                                        <td>{row.firstName}</td>
                                                                        <td>{row.lastName}</td>
                                                                        <td>{row.description}</td>
                                                                        <button onClick={() => {this.handleDelete(row._links.self.href, this.props, url, this.state)}}>Delete</button>
                                                                  </tr>
                                                            </tbody>                  
                                                            )
                                                }
                                        )
                                    );
                                  }
                          //         console.log(this.props.items);
                          else { 
                            return                                 <tbody>
                                                                  <tr >
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <button >Delete</button>
                                                                  </tr>
                                                            </tbody>                  
                                }
          }

                const TableFooter = () => {
                      if (this.props.hasErrored || typeof this.props.items._embedded == 'undefined') {return <div></div>}
                            else {
                                  return (
                                      <tfoot>
                                                <tr key="footer">
                                                      <button onClick={() => this.switchPage('prev')}>Prev</button><span>&nbsp;&nbsp;</span>
                                                      <button onClick={() => this.switchPage('next')}>Next</button><span>&nbsp;&nbsp;</span>
                                                      <button onClick={() => this.sendcredential()}>Post</button><span>&nbsp;&nbsp;</span>
                                                      <button onClick={() => this.logout()}>Post</button><span>&nbsp;&nbsp;</span>

                                                      {this.props.page+1}
                                                      
                                                       <select value={this.props.size} onChange={this.handleChange.bind(this)}>
                                                          <option value={10}>10</option>
                                                          <option value={20}>20</option>
                                                          <option value={50}>50</option>
                                                          <option value={100}>100</option>
                                                      </select>                                                   
                                                </tr>
                                      </tfoot>
                                      );
                                  }
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
