import React from 'react';
import userpic from '../img/userfotodefault.jpg'
import { url } from '../constants/constants'
import { handleQuit } from '../functions/functions'

class GameDetails extends React.Component {

  constructor(props) {
    super(props);
          this.state = {
                alreadysigned: 0,
                mypos: 0,
          }
        }


async jointhisgame () {
      await this.props.signupGame(url+'api/gameparticipantspost', false, this.props.singlegameitems.id)
      this.props.setNavigate('games')
  }

async quitthisgame (id) {
    await handleQuit(url+'api/gameparticipants/'+id)
    this.props.setNavigate('games')
}


   render() {      
         const TableHeader = () => {
                return(
                  <thead>
                    <tr>
                      <th colSpan = {4}>
                      <div className='closewindowdiv' >
                          <span className='closewindowspantop'>
                              <button className='bodylink'href = '#' onClick={() => this.props.setNavigate('games')}>
                              X</button>
                          </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                  )
         }

         const PlayerDetailsHeader = () => {
                         return (
                                       <tr> 
                                              <td className = 'gamelist' colSpan={4}>
                                                    <div className='closewindowdiv'>                                            
                                                    Players for this game</div>
                                              </td>
                                           </tr>
                                 )
                          };
 
         const PlayersDetail = () => {
            var x = [1, 2, 3, 4];
            var placeholder = 'join this game'
            var leavegame = 'cancel registration'

            var z = 0;
            
          if(this.state.alreadysigned==0)
            for(z==0;z<this.props.gameparticipantsitems.length;z++)      
            {
                if(this.props.gameparticipantsitems[z].myuser.name == this.props.username)
                   {
                      this.setState({alreadysigned: 1,
                      mypos: z+1 })                    
                  }
            }

            return(  

                x.map ((row, index) =>                   
                {
                  var y = index;
                    return(
                      <td key={index} className = 'gamelist' width='25%'>                                 
                                  <li className='gameparticipant'>
                                  <center> 
                                  {typeof this.props.gameparticipantsitems[y] != 'undefined' && 
                                   <img src = {userpic}  className='userpic' alt='O'></img>}                        
                                   {row}
                                   <br />
                                     {typeof this.props.gameparticipantsitems[y] != 'undefined' && 
                                     this.props.gameparticipantsitems[y].myuser.firstName + ' '
                                      + this.props.gameparticipantsitems[y].myuser.lastName}
                                      <br></br>                               
                                     {typeof this.props.gameparticipantsitems[y] == 'undefined' /*&& this.state.alreadysigned == 0
                                     && (row-1)==this.props.gameparticipantsitems.length*/ && 
                                     <a href='#' onClick={() => this.jointhisgame()}>{placeholder}</a>}

                                    {/*(row == this.state.mypos) && */typeof this.props.gameparticipantsitems[y] != 'undefined' 
                                     && <a href='#' onClick={() => this.quitthisgame(this.props.gameparticipantsitems[y].id)}> {leavegame}</a>}
                                    
                                     </center>
                                  </li>
                          </td>            
                        )
                      }
                 )
                )     
              }


         const GameDetails = () => {

          return(
              <tr>
                  <td className = '' width='25%' colSpan = {4}>
                        {   typeof this.props.singlegameitems.id != 'undefined'
                            && 
                             this.props.singlegameitems.sportcenter.name + ' ' + 
                              this.props.singlegameitems.id }
                           <br />   
                        {   typeof this.props.singlegameitems.id != 'undefined'
                            && this.props.singlegameitems.gamedate
                              } 
                           <br />
                        { typeof this.props.singlegameitems.id != 'undefined'
                            && 'Starts at '+String(this.props.singlegameitems.gametime).substring(0, 5)}                    
                          <br />{'You will pay: '}   
                        {   typeof this.props.singlegameitems.id != 'undefined'
                            && this.props.singlegameitems.priceperperson + ' CZK'
                              } 
   
                           <br />{'Message from the organizer: '}   
                        {   typeof this.props.singlegameitems.id != 'undefined'
                            && this.props.singlegameitems.description
                              } 

                  </td>
              </tr>
              )
         }

         const TableBody = () => {                       
                                    return (<tbody> 
                                                          <GameDetails />
                                                          <PlayerDetailsHeader />
                                                          <tr><PlayersDetail/></tr>
                                            </tbody>)
           }

          return (
                   <table className='tablegamesdetail'>
                       <TableHeader />
                       <TableBody  />
                   </table>
                 );
     }
 }
 
export default GameDetails;