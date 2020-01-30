import React from 'react';
import { CreateComponent, GameComponent, LoginComponent, UserComponent, GameDetailsComponent, UserProfileComponent, RegisterComponent } from '../AppContainer';

class MainContainer extends React.Component {
  

   componentDidMount() { 
      //(request, url, params)
            this.props.doNavigate('games')
   };

   
    
   render() {

      const Displaycomponent = () => {
            if(this.props.loginsuccess && this.props.isLoading)
               return ('Loading...')

            if(this.props.isError && !this.props.isLoading)
               return('Server connection error, please try again later')

            if(this.props.loginsuccess && !this.props.isLoading)
               {
                  if(this.props.navigate[this.props.navigate.length-1] == 'games' && 
                  typeof this.props.items._embedded != 'undefined' && typeof this.props.useritems[0].id != 'undefined')
                     {
                        return(<div className='maindiv'><UserComponent /><GameComponent /></div>)
                     }
                   if(this.props.navigate[this.props.navigate.length-1] == 'userp' && 
                   typeof this.props.usergamesitems != 'undefined' && typeof this.props.useritems[0].id != 'undefined')
                     {
                        return(<div className='maindiv'><UserComponent /><UserProfileComponent /></div>)
                     }
                  if(this.props.navigate[this.props.navigate.length-1] == 'gamedetails' &&
                  typeof this.props.singlegameitems != 'undefined')
                       {
                        return(<GameDetailsComponent />)
                       }
                  if(this.props.navigate[this.props.navigate.length-1] == 'create' && 
                  typeof this.props.sportcenteritems._embedded != 'undefined')
                            {
                              return(<CreateComponent />)
                            }
                     }
            
            if(!this.props.loginsuccess && !this.props.isLoading && !this.props.isError && this.props.navigate[this.props.navigate.length-1] != 'register')
               {
                  return(<LoginComponent />)
               }

               if(!this.props.loginsuccess && !this.props.isLoading && !this.props.isError && this.props.navigate[this.props.navigate.length-1] == 'register')
               {
                  return(<RegisterComponent />)   
               }

            else return null

      }

     return (
               <center><Displaycomponent /></center>
              )
    }
}
 
export default MainContainer;