import React from 'react';
import { CreateComponent, GameComponent, LoginComponent, UserComponent, GameDetailsComponent } from '../AppContainer';

class MainContainer extends React.Component {
  
   render() {
     return (<center>
                {this.props.loginsuccess && !this.props.isLoading && 
                (this.props.navigate == 'games') && 
                typeof this.props.useritems._embedded != 'undefined' &&
                <UserComponent />}
                
                {this.props.loginsuccess && !this.props.isLoading && 
                (this.props.navigate == 'games') && 
                typeof this.props.items._embedded != 'undefined' &&
                <GameComponent />}                

                {this.props.loginsuccess && !this.props.isLoading && this.props.navigate == 'gamedetails' &&
                typeof this.props.singlegameitems != 'undefined' && 
                <GameDetailsComponent />}

                {this.props.loginsuccess && !this.props.isLoading && this.props.navigate == 'create' && 
                typeof this.props.sportcenteritems._embedded != 'undefined' && 
                <CreateComponent />}

                {!this.props.loginsuccess && this.props.loginsuccess != null 
                 && <LoginComponent />}

              </center>)
    }
}
 
export default MainContainer;