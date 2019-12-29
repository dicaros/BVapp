import React from 'react'
import { GameComponent } from './AppContainer';
import { CreateComponent } from './AppContainer';
import { HeaderComponent } from './AppContainer';
import { LoginComponent } from './AppContainer';
import { UserComponent } from './AppContainer';
import { RegisterComponent } from './AppContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {


  render () {
    
    

    const HeaderRender = () => {
      return (<header><HeaderComponent /></header>)
    }

    const BodyRender = () => {
              return(<section className = 'appbody'>
              <Router>
                     <Switch>
                            <Route path="/register" loginsuccess={this.props.loginsuccess}>
                                    <RegisterComponent />
                            </Route>
                            <Route path="/">
                                       <center><GameComponent /><CreateComponent /><UserComponent /><LoginComponent /></center>
                            </Route>
                    </Switch>
              </Router>
                    </section>
                    
                )
    }

    
    return (  <div><HeaderRender />
    <BodyRender /></div>)   
          }

}

export default App;