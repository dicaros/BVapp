import React from 'react';
import userpic from '../img/userfotodefault.png'
import { url } from '../constants/constants'
import { handleQuit } from '../functions/functions'
import { currentday, timedash, todaydash } from '../functions/functions'

class GameDetails extends React.Component {
 
constructor(props) {
    super(props);
          this.state = {
                alreadysigned: 0,
                mypos: 0,
          }
        }

async cancelthisgame() {
       await this.props.updateGame(url+'api/games/'+this.props.singlegameitems.id, 'cancel')
       this.props.doNavigate('games')
      }

async jointhisgame () {
      await this.props.signupGame(url+'api/gameparticipantspost', false, this.props.singlegameitems.id)
      this.props.doNavigate('games')
  }

async quitthisgame (id) {
    await handleQuit(url+'api/gameparticipants/'+id)
    await this.props.updateGame(url+'api/games/'+this.props.singlegameitems.id, 'open')
    this.props.doNavigate('games')
}


   render() {      
         const TableHeader = () => {
                return(
                  <thead>
                    <tr>
                      <th colSpan = {4}>
                      <div className='closewindowdiv' >
                            {typeof this.props.singlegameitems.id != 'undefined' && this.props.singlegameitems.gameiscancelled && 'This game is cancelled'}
                          <span className='closewindowspantop'>
                              <button className='bodylink'href = '#' onClick={() => this.props.doNavigate('')}>
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
                                              <td colSpan={4}>
                                                    <div className='closewindowdiv'>                                            
                                                    <center>Players for this game</center></div>
                                              </td>
                                           </tr>
                                 )
                          };
 
         const PlayersDetail = () => {
            var tomorrow = new Date(Date.now()+1*24*60*60*1000);
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

                  if(typeof this.props.gameparticipantsitems[y] != 'undefined') {
                    return(
                      <td key={index} className = 'gameparticipant'>                                 
                                  <li key={index} className='gameparticipant'>
                                      <center> 
                                      {row}
                                          { <img src = {userpic}  className='userpic' alt='O'></img>}                        

                                          <br />
                                          { this.props.gameparticipantsitems[y].myuser.firstName + ' '
                                            + this.props.gameparticipantsitems[y].myuser.lastName}
                                          <br></br>                               
                               
                                          {((row == this.state.mypos) && 
                                            (this.props.singlegameitems.gamedate > todaydash(currentday(tomorrow)) || 
                                            (this.props.singlegameitems.gamedate == todaydash(currentday(tomorrow)) && this.props.singlegameitems.gametime >= timedash(currentday(tomorrow)))))
                                            && <a href='#' onClick={() => this.quitthisgame(this.props.gameparticipantsitems[y].id)}> {leavegame}</a>}
                                    
                                        {  ((row == this.state.mypos) && 
                                            (this.props.singlegameitems.gamedate < todaydash(currentday(tomorrow)) || 
                                            (this.props.singlegameitems.gamedate == todaydash(currentday(tomorrow)) && this.props.singlegameitems.gametime <= timedash(currentday(tomorrow)))))
                                            && <span className = 'signuperror'>'You can only sign out from a game at least 24 hours in advance'</span>
                                        }
                                     </center>
                                  </li>
                          </td>            
                        )
                      }
                      else {
                        return <td className = 'gameparticipant'> 

                              <li className='gameparticipant'>
                      {// <img src = {'../img/userfotodefault.jpg'}  className='userpic' alt='0' color = '#ffffff'></img>
                      }                     
                                <center>   
                                    <br></br>                               
                                          { this.state.alreadysigned == 0
                                            && (row-1)==this.props.gameparticipantsitems.length && 
                                            !this.props.singlegameitems.gameiscancelled &&
                                            <a href='#' onClick={() => this.jointhisgame()}>{placeholder}</a>}
                                </center> 
                              </li>

                          </td>;
                      }
                      }
                 )
                )     
              }


         const GameDetails = () => {
          if(typeof this.props.singlegameitems.id != 'undefined') {
          return(
              <tr className = 'gameparticipant2'>
                  <td className = 'gameparticipant2' colSpan = {3}>                                      
                            {this.props.singlegameitems.sportcenter.name} {this.props.singlegameitems.id}
                             <br />
                            {this.props.singlegameitems.gamedate}
                             <br />
                            Starts at {String(this.props.singlegameitems.gametime).substring(0, 5)}
                             <br />
                            Court n. {this.props.singlegameitems.kurt}
                             <br />You will pay: {this.props.singlegameitems.priceperperson} CZK
                             <br />Message from the organizer: {this.props.singlegameitems.description}
                             <br />
                             <br /><b>This game is 
                                        {this.props.singlegameitems.isprivate && ' private'}
                                        {!this.props.singlegameitems.isprivate && ' public'}
                             </b>
                  </td>
                  <td className = 'gameparticipant2' >
                            <p>This game is organized by: <br></br>
                            {this.props.singlegameitems.myuser.firstName + ' ' + this.props.singlegameitems.myuser.lastName}
                            </p>
                            <p>
                            {this.props.singlegameitems.myuser.name == this.props.myuseritems.name && 
                            !this.props.singlegameitems.gameiscancelled &&
                            <a href='#' onClick={() => this.cancelthisgame()}>Cancel this game</a>}
                            </p>
                  </td>
              </tr>
              )
            }
            else { return ( <tr>
                              <td className = '' colSpan = {4}> </td>
                            </tr>)
            }

         }

         const TableBody = () => {                       
                                    return (<tbody> 
                                                          <GameDetails />
                                                          <PlayerDetailsHeader />
                                                          <tr className='gameparticipant'><PlayersDetail/></tr>   
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