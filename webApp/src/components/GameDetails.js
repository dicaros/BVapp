import React from 'react';
import userpic from '../img/userfotodefault.jpg'

class GameDetails extends React.Component {

    

   render() {      
         const TableHeader = () => {
                return(
                  <thead>
                    <tr>
                      <th colSpan = {4}>
                      <div className='closewindowdiv' >
                          <span className='closewindowspan'>
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
              var placeholder = 'join this game'
            return(      

              <tr>
                      <td className = 'gamelist' width='25%'>
                                  
                                  <li className='gameparticipant'>
                                  <center> 
                                  {typeof this.props.gameparticipantsitems[0] != 'undefined' && 
                                   <img src = {userpic}  className='userpic' alt='O'></img>}
                                   
                                   1
                                   <br />
                                     {typeof this.props.gameparticipantsitems[0] != 'undefined' && 
                                     this.props.gameparticipantsitems[0].myuser.firstName + ' '
                                      + this.props.gameparticipantsitems[0].myuser.lastName}
                                     
                                     {typeof this.props.gameparticipantsitems[0] == 'undefined' 
                                     && <a href='#'>{placeholder}</a>}
                                     </center>
                                  </li>
                          </td>            
              <td className = 'gamelist' width='25%'>
                          
                          <li className='gameparticipant'>
                          <center>
                          {typeof this.props.gameparticipantsitems[1] != 'undefined' && 
                           <img src = {userpic}  className='userpic' alt='O'></img>}
                           
                            2
                           <br />
                             {typeof this.props.gameparticipantsitems[1] != 'undefined' && 
                             this.props.gameparticipantsitems[1].myuser.firstName + ' ' 
                             + this.props.gameparticipantsitems[1].myuser.lastName}
                             
                             {typeof this.props.gameparticipantsitems[1] == 'undefined' && 
                             <a href='#'>{placeholder}</a>}
                             </center>
                          </li>
                  </td>            
                  <td className = 'gamelist' width='25%'>
                          
                          <li className='gameparticipant'>
                          <center>
                          {typeof this.props.gameparticipantsitems[2] != 'undefined' && 
                           <img src = {userpic}  className='userpic' alt='O'></img>}
                           
                            3
                           <br />
                             {typeof this.props.gameparticipantsitems[2] != 'undefined' && 
                             this.props.gameparticipantsitems[2].myuser.firstName + ' ' 
                             + this.props.gameparticipantsitems[2].myuser.lastName}
                             
                             {typeof this.props.gameparticipantsitems[2] == 'undefined' && 
                             <a href='#'>{placeholder}</a>}
                             </center>
                          </li>
                  </td>            
                  <td className = 'gamelist' width='25%'>
                          
                          <li className='gameparticipant'>
                          <center>
                          {typeof this.props.gameparticipantsitems[3] != 'undefined' && 
                           <img src = {userpic}  className='userpic' alt='O'></img>}
                           
                            4
                           <br />
                             {typeof this.props.gameparticipantsitems[3] != 'undefined' && 
                             this.props.gameparticipantsitems[3].myuser.firstName + ' ' 
                             + this.props.gameparticipantsitems[3].myuser.lastName}
                             
                             {typeof this.props.gameparticipantsitems[3] == 'undefined' && 
                             <a href='#'>{placeholder}</a>}
                             </center>
                          </li>
                  </td>            


                </tr>                      

      )
            
}


         const GameDetails = () => {

          return(
              <tr>
                  <td className = 'gamelist' width='25%' colSpan = {4}>
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
                                                          <PlayersDetail/>
                                            </tbody>)
           }
/*                 const TableFooter = () => {
                                     return (
                                      countpage = this.props.items.page.totalPages + ' ',
                                       <tfoot>
                                         <tr id = 'trfooter'>
                                           <td>
                                                     <center>  <button onClick={() => this.switchPage('prev')}>Prev</button><span>&nbsp;&nbsp;</span>
                                                       <button onClick={() => this.switchPage('next')}>Next</button><span>&nbsp;&nbsp;</span>
                                  
                                                       {this.props.page+1}/{countpage}
                                                       
                                                        <select value={this.props.size} onChange={this.handleChange.bind(this)}>
                                                           <option value={5}>5</option>
                                                           <option value={10}>10</option>
                                                           <option value={20}>20</option>
                                                           <option value={50}>50</option>
                                                           <option value={100}>100</option>
                                                       </select>                                                   </center>
                                       </td>
                               
                                     </tr>
                                 </tfoot>
                              );   
                           }
  */      
          return (
                   <table className='tablegames'>
                       <TableHeader />
                       <TableBody  />
                   </table>
                 );
     }
 }
 
export default GameDetails;