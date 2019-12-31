import React from 'react';
import { GameComponent, UserComponent, CreateComponent, LoginComponent } from '../AppContainer';

class MainContainer extends React.Component {
  
   render() {
     return (<center>
                {this.props.loginsuccess && typeof this.props.items._embedded != 'undefined' 
                && this.props.navigate == 'games' && <UserComponent />}
                
                {this.props.loginsuccess && typeof this.props.items._embedded != 'undefined' && 
                this.props.navigate == 'games' && <GameComponent />}                
                
                {this.props.loginsuccess && typeof this.props.items._embedded != 'undefined' 
                && this.props.navigate == 'create' && <CreateComponent />}

                {!this.props.loginsuccess && this.props.loginsuccess != null 
                 && <LoginComponent />}

              </center>)
    }
}
 
export default MainContainer;