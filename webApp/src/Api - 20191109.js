import React, { Component } from 'react';
import EmployeeTable from './EmployeeTable'

var data = "http://localhost:8080/api/employees";

 class App extends React.Component {
    

  constructor(props) {
    super(props);
 //   this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      links: [],
      employees: null,
      page: 0,
      size: 10,
      totalPages: 0
          };
  }; 
 
  componentDidMount() {  
                this.refreshPage();
  };
 
  loadFromServer(currentPage, currentSize) {
                  fetch(data+'?'+'page='+currentPage+'&size='+currentSize+'&manager=greg')
                 .then((res) => {
                      if (res.ok) {
                        return res.json();
                      }
                 throw res;
               }).then(res => {
                     this.setState({
                        isLoaded: true,
                        items: res,
                        employees: res._embedded.employees,
                        links: res._links,
                        totalPages: res.page.totalPages
                     }); 
                     console.log()
                    })               
                    .catch(error =>
                      { 
                    if (error.status=='401') {
                      alert(error.status);  
                      }
                          this.setState({
                          error: error,
                          isLoaded: true
                        })                                           
                   })
              }

  refreshPage() {this.loadFromServer(this.state.page, this.state.size);}

  handleDelete(ref) {
                  fetch(ref,
                  {
                    method: 'DELETE',
                    headers: {'content-type': 'application/json'}
                  })
                  .then(res => {
                        res.json();
                        this.refreshPage();
                  })
                  .then(res => {
                     console.log()
                    })                  
  }

  nextPage(currentPage, currentSize) {
                if(currentPage+1<this.state.totalPages)
                {   this.setState ({
                          page: currentPage+1,
                          size: currentSize
                                        });
                      currentPage = ++currentPage;
                        this.loadFromServer(currentPage, currentSize)
                      }
  };

  prevPage(currentPage, currentSize) {

                if(currentPage>0)
                {
                this.setState ({
                    page: currentPage-1,
                    size: currentSize
                });
                currentPage = --currentPage;
                this.loadFromServer(currentPage, currentSize)
                }
  };

  handleChange(event) {
         this.setState({size: event.target.value});
         this.loadFromServer(this.state.page, event.target.value)
  }

  render() {
        

 
        const { error, isLoaded, items, employees, links, page, totalPages, size } = this.state;
        
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
                      if (error) {
                            return <div>Error: {error.message}</div>} 
                            else if (!isLoaded) {return <div>Loading...</div>}
                            else {
                                  console.log(this.state.items);
                                return (
                                      employees.map ((row, index) => 
                                        {
                                            return (

                                              <tbody>
                                                <tr key={index}>
                                                      <td>{row.firstName}</td>
                                                      <td>{row.lastName}</td>
                                                      <td>{row.description}</td>
                                                      <button onClick={() => {this.handleDelete(row._links.self.href)}}>Delete</button>
                                                </tr>
                                              </tbody>
                                        )}
                                        )
                                      );
                                  }
                            }

        const TableFooter = () => {
                      if (!isLoaded) {return <div></div>}
                            else {
                                  console.log(this.state.items);
                                  return (
                                      <tfoot>
                                                <tr key="footer">
                                                      <button onClick={() => this.prevPage(this.state.page, this.state.size)}>Prev</button><span>&nbsp;&nbsp;</span>
                                                      <button onClick={() => this.nextPage(this.state.page, this.state.size)}>Next</button><span>&nbsp;&nbsp;</span>
                                                      {this.state.page+1}
                                                      
                                                       <select value={this.state.size} onChange={this.handleChange.bind(this)}>
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
              <TableFooter />
            </table>
           );
        }
}

export default App