import React from 'react'
import { GameComponent } from './AppContainer';
import { HeaderComponent } from './AppContainer';
import { LoginComponent } from './AppContainer';
import { UserComponent } from './AppContainer';

class App extends React.Component {
  render () {
    
    

    const HeaderRender = () => {
      return (<header><HeaderComponent /></header>)
    }

    const BodyRender = () => {
              return(<section><LoginComponent /><GameComponent /><UserComponent /></section>)
    }

    
    return (  <div id = 'main'><HeaderRender />
    <BodyRender /></div>)   
          }

}

 export default App;