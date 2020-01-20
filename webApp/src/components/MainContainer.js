import React from 'react';
import { CreateComponent, GameComponent, LoginComponent, UserComponent, GameDetailsComponent, UserProfileComponent } from '../AppContainer';

class MainContainer extends React.Component {
  
   render() {
     return (<center>

               
               {this.props.loginsuccess && this.props.isLoading && 'Loading...'}
               
               {this.props.isError && !this.props.isLoading && "Server connection error, please try again later"}
               

                {this.props.loginsuccess && !this.props.isLoading && 
                (this.props.navigate == 'games' || this.props.navigate == 'userp') && 
                typeof this.props.useritems._embedded != 'undefined' &&
                <UserComponent />}
                
                {this.props.loginsuccess && !this.props.isLoading && 
                (this.props.navigate == 'games') && 
                typeof this.props.items._embedded != 'undefined' &&
                <GameComponent />}          

                {this.props.loginsuccess && !this.props.isLoading && 
                (this.props.navigate == 'userp') && 
                typeof this.props.usergamesitems != 'undefined' &&
                <UserProfileComponent />}          

                {this.props.loginsuccess && !this.props.isLoading && this.props.navigate == 'gamedetails' &&
                typeof this.props.singlegameitems != 'undefined' && 
                <GameDetailsComponent />}

                {this.props.loginsuccess && !this.props.isLoading && this.props.navigate == 'create' && 
                typeof this.props.sportcenteritems._embedded != 'undefined' && 
                <CreateComponent />}

                {!this.props.loginsuccess && !this.props.isLoading && !this.props.isError
                 && <LoginComponent />
                 }

              </center>)
    }
}
 
export default MainContainer;