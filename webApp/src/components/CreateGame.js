import React from 'react';
import { url } from '../constants/constants'
import { Hourselect } from '../functions/functions.js'
import { Kurtselect } from '../functions/functions.js'
import { currentday } from '../functions/functions.js'
import { convertmonthtoint } from '../functions/functions.js'
import { convertmonthtostring } from '../functions/functions.js'


import Daypicker from './Daypicker.js'
import Monthpicker from './Monthpicker.js'

var thisday = currentday()

class CreateGame extends React.Component {

      constructor(props) {
      super(props);
            this.state = {
                  timeselection: '20:00',
                  kurtselecton: 1,
                  selectedday: thisday[2],
                  selectedmonth: thisday[1],
                  selectedmonthstring: convertmonthtostring(thisday[1]),
                  selectedyear: thisday[0],
                  selectedCenter: null,
            }
      }

async handleSubmit(event) {
               await this.props.addNew(this.state.selectedCenter, event.target.isprivate.checked, this.state.selectedyear+'-'+("00" + this.state.selectedmonth).slice(-2)+'-'+("00" + this.state.selectedday).slice(-2), this.state.timeselection+':00', event.target.comments.value, url+'api/games', this.props.nitems, event.target.priceperperson.value, this.state.kurtselection)
               await this.props.setNavigate('games')
               window.location.reload();
      }

      handleChangeTime(event) {
            this.setState({
                  timeselection: event.target.value,
            })
                   
      };
  
    handleChangeKurt(event) {
            this.setState({
                  kurtselection: event.target.value,
                  })                   
      };
 
    handleChangeDay(i) {
            this.setState({
                selectedday: i,
        })
        }

        
    handleChangeMonth(event) {
            this.setState({
                  selectedmonth: convertmonthtoint(event.target.value),
                  selectedmonthstring: event.target.value
            })
      };

    handleChangeYear(i) {
            if(i == 0)
                    this.setState({selectedyear: this.state.selectedyear-1})
            else if (i == 1) this.setState({selectedyear: this.state.selectedyear+1})
        }
        
      handleChangeSportCenter(id) {
            this.setState({selectedCenter: id})
        }

        classNameCenter(id) {
                  if(this.state.selectedCenter == id)
                        return ('gamelistselected')
                  else return ('gamelist')
        }

   render() {      
      const SportCenterList = () => {
            return(  
                    this.props.sportcenteritems._embedded.sportcenters.map ((row, index) =>                   
                    {
                      return(
                                    <li key={index} className={ this.classNameCenter(row.id) } onClick={() => this.handleChangeSportCenter(row.id)}><b>{row.name}</b> ({row.street} - <a  target="_blank" href={row.website} className='bodylink'>{row.website}</a>)></li>
                          )})
            )
      }

      const RegisterForm = () => {
return (
      <div>
      <form method='POST' onSubmit={this.handleSubmit.bind(this)}> 
      <table>
      <tbody>
            <tr height='30px'>
                  <td className='newgame' colSpan={4}>Where? </td>
            </tr>
            <tr>
                  <td className = 'sportcenterlist' colSpan={4}>
                        <ul className='sportcenterlist'><SportCenterList /></ul>
                  </td>
            </tr>
      
            <tr height='30px'>
                  <td className='newgame' colSpan={4}>Which day?</td>
            </tr>
            
            <tr height='25px'>
                  
                  <td colSpan={3}>
                  
                        <div className ='squarebox'>
                              <center>
                                    <a className = 'bodylink' href ='#' onClick={() => this.handleChangeYear(0)}> {' << '} </a>
                                    
                                    <select value={this.state.selectedmonthstring} onChange={this.handleChangeMonth.bind(this)}> 
                                                <Monthpicker />
                                    </select>

                                    <span> </span>{this.state.selectedyear}
                                          
                                    <a className = 'bodylink' href ='#' onClick={() => this.handleChangeYear(1)}> {' >> '} </a>
                                    
                                    <Daypicker 
                                                selectedday ={this.state.selectedday}
                                                selectedmonth = {this.state.selectedmonth}
                                                selectedyear = {this.state.selectedyear}
                                                onClick={(i) => this.handleChangeDay(i)}
                                    />
                              </center>
                        </div>
                        
                  </td>

                  <td className='signuperror'></td>
            </tr>
            <tr height='30px'>

                  <td className='newgame' colSpan={4}>What time?</td>
            </tr>
            <tr height='25px'>
                  <td colSpan={3}>  
                        <select value={this.state.timeselection} onChange={this.handleChangeTime.bind(this)}>
                              <Hourselect />
                        </select>
                  </td>
                  <td className='signuperror'></td>
            </tr>
            <tr height='30px'>
                  <td className='newgame' colSpan={4}>Which court?</td>
            </tr>
            <tr height='25px' colSpan={3}>
                  <td>  
                        <select value={this.state.kurtselection} onChange={this.handleChangeKurt.bind(this)}>
                              <Kurtselect />
                        </select>
                  </td>
                  <td className='signuperror'></td>
            </tr>
            <tr height='30px'>
                  <td className='newgame' colSpan={4}>How much per person?</td>
            </tr>
            <tr height='25px'>
                  <td colSpan={3}><input type='text' name='priceperperson'/> CZK</td>
                  <td className='signuperror'></td>
          </tr>
          <tr height='30px'>
                  <td className='newgame' colSpan={3}>Private game? <input type='checkbox' name='isprivate'/></td>
                  <td ></td>
            </tr>

          <tr height='30px'>
                  <td className='newgame' colSpan={4}>Extra comments</td>
            </tr>
            <tr height='25px'>
                  <td colSpan={3}><textarea className = 'description' name='comments'/></td>
                  <td className='signuperror'></td>
          </tr>
        </tbody>
        <tfoot>
              <tr height='60px'>
                    <td className='loginbutton' colSpan={4}>
                          <button name="done"  type="submit" className='submitbutton' >
                          Done
                          </button>
                     </td>
              </tr>
            </tfoot>

        </table>
        </form></div>

)

      }

     const RegisterPage = () => {
      return(      
          <table className='tablesportcenters'>
            <thead width = '100%'><tr>
                  <th>
                              <div className='closewindowdiv' >
                                    <span className='closewindowspantop'>
                                          <button className='bodylink'href = '#' onClick={() => this.props.setNavigate('games')}>
                                                X
                                          </button>
                                    </span>
                              </div>
                   </th>
                   </tr>
            </thead>
            <tbody><tr><td>
                  <RegisterForm />
                  </td></tr>
            </tbody>
            <tfoot>
                  <tr>
                        <td>
                        </td>
                  </tr>
            </tfoot>
          </table>
      )
}         
          return (<RegisterPage />);
 }
}
 
export default CreateGame;