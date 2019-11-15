import React, { Component } from 'react';

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  };

  componentDidMount() {  fetch("http://localhost:8080/api/employees")
      .then(res => res.json())
      .then(res => {
          this.setState({
            isLoaded: true,
            items: res,
            employees: res._embedded.employees,
            links: res._embedded._links
          }); 
        })
      .catch(error => 
            this.setState({
              isLoaded: true,
              error: error
        })
      );
  };

  render() {

        const TableHeader = () => {
                        return (
                                      <thead>
                                          <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Desription</th>
                                          </tr>
                                      </thead>
                                )
                              };


        const { error, isLoaded, items, employees, links } = this.state;
        
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
                                                </tr>
                                              </tbody>
                                        )}
                                        )
                                      );
                                  }
                            }

        const TableFooter = () => {
                      if (error) {
                            return <div>Error: {error.message}</div>} 
                            else if (!isLoaded) {return <div>Loading...</div>}
                            else {
                                  console.log(this.state.items);
                                  var name = links;
                                return (
                                      <tfoot>
                                                <tr key="footer">
                                                      <button >ciaone</button>
                                                </tr>
                                      </tfoot>
                                      );
                                  }
                            }

        return (
            <table>
              <TableHeader />
              <TableBody />
              <TableFooter />
            </table>
           );
        }
}

export default App