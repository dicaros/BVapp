import React from 'react'
import { MainComponent } from './AppContainer';
import { HeaderComponent } from './AppContainer';

import { Provider } from 'react-redux';
import { store } from './store/store';

class App extends React.Component {


  render () {   

    const HeaderRender = () => {
      return (<header><HeaderComponent /></header>)
    }

    const BodyRender = () => {
              return(<section className = 'appbody'>
                                      <MainComponent />
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