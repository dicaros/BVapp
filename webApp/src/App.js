import React from 'react'
import { MainComponent } from './AppContainer';
import { HeaderComponent } from './AppContainer';
import { LoginComponent } from './AppContainer';
import { RegisterComponent } from './AppContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Provider } from 'react-redux';
import { store } from './store/store';

class App extends React.Component {


  render () {   

    const HeaderRender = () => {
      return (<header><HeaderComponent /></header>)
    }

    const BodyRender = () => {
              return(<section className = 'appbody'>
              <Router>
                     <Switch>
                            <Route path="/register">
                                    <RegisterComponent />
                            </Route>
                            <Route path="/">
                                      <MainComponent />
                            </Route>
                    </Switch>
              </Router>
                    </section>
                    
                )
    }
    
    return (  
            <Provider store={store}>
                    <HeaderRender />
                    <BodyRender />
            </Provider>
          )      
    }
}

export default App;