import React from 'react'
import { EmployeeComponent } from './AppContainer';
import { HeaderComponent } from './AppContainer';
import { LoginComponent } from './AppContainer';

class App extends React.Component {
  render () {
    
    

    const HeaderRender = () => {
      return (<header><HeaderComponent /></header>)
    }

    const BodyRender = () => {
              return(<section><LoginComponent /><EmployeeComponent /></section>)
    }

    
    return (<div id = 'main'><HeaderRender />
    <BodyRender /></div>)   
          }

}

 export default App;