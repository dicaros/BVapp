import React from 'react';
import { CreateComponent, GameComponent, LoginComponent, UserComponent, GameDetailsComponent, UserProfileComponent } from '../AppContainer';

class MainContainer extends React.Component {
  
   render() {
     return (<center>

               
               {this.props.loginsuccess && this.props.isLoading && 'Loading...'}
               
               {this.props.isError && !this.props.isLoading && "Server connection error, please try again later"}
               

                {this.props.loginsuccess && !this.props.isLoading && 
                (this.props.navigate[this.props.navigate.length-1] == 'games' || this.props.navigate[this.props.navigate.length-1] == 'userp') && 
                typeof this.props.useritems._embedded != 'undefined' &&
                <UserComponent />}
                
                {this.props.loginsuccess && !this.props.isLoading && 
                (this.props.navigate[this.props.navigate.length-1] == 'games') && 
                typeof this.props.items._embedded != 'undefined' &&
                <GameComponent />}          

                {this.props.loginsuccess && !this.props.isLoading && 
                (this.props.navigate[this.props.navigate.length-1] == 'userp') && 
                typeof this.props.usergamesitems != 'undefined' &&
                <UserProfileComponent />}          

                {this.props.loginsuccess && !this.props.isLoading && 
                this.props.navigate[this.props.navigate.length-1] == 'gamedetails' &&
                typeof this.props.singlegameitems != 'undefined' && 
                <GameDetailsComponent />}

                {this.props.loginsuccess && !this.props.isLoading && 
                this.props.navigate[this.props.navigate.length-1] == 'create' && 
                typeof this.props.sportcenteritems._embedded != 'undefined' && 
                <CreateComponent />}

                {!this.props.loginsuccess && !this.props.isLoading && !this.props.isError
                 && <LoginComponent />
                 }

              </center>)
    }
}
 
export default MainContainer;