import React, { Component } from 'react';

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
  fetch("http://localhost:8080/api/employees")
      .then(res => res.json())
      .then(result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        })
      .catch(error => 
            this.setState({
              isLoaded: true,
              error: error
        })
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(this.state.items);
      return (
        
          this.state.items._embedded.employees[0].firstName
        
      );
    }
  }
}

export default App