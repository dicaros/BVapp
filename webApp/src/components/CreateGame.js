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
                  kurtsize: null,
                  kurtselection: 1,
                  selectedday: thisday[2],
                  selectedmonth: thisday[1],
                  selectedmonthstring: convertmonthtostring(thisday[1]),
                  selectedyear: thisday[0],
                  selectedCenter: 1
            }
      }

       Error1 = () => {
                  if (typeof this.props.gameresponse.datepast != 'undefined' && this.props.gameresponse.datepast) 
                        {
                         return (' the selected date is in the past')
                         }
                  else
                        return ''
            }
 
        Error2 = () => {
             if (typeof this.props.gameresponse.priceinvalid != 'undefined' && this.props.gameresponse.priceinvalid) 
                   {
                    return (' invalid price')
                    }
             else
                   return ''
       }
 

      
      handleSubmit(event) {
            event.preventDefault();
             this.props.addNew(this.state.selectedCenter, event.target.isprivate.checked, this.state.selectedyear+'-'+("00" + this.state.selectedmonth).slice(-2)+'-'+("00" + this.state.selectedday).slice(-2), this.state.timeselection+':00', event.target.comments.value, url+'api/newgame', this.props.nitems, event.target.priceperperson.value, this.state.kurtselection)
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
            this.setState({selectedCenter: id,
            })
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
                                    <li key={index} className={ this.classNameCenter(row.id) } onClick={() => this.handleChangeSportCenter(row.id)}><b>{this.state.selectedCenter}{row.id}{row.name}</b> ({row.street} - <a  target="_blank" href={row.website} className='bodylink'>{row.website}</a>)></li>
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
                  <td className='newgame'>Where? </td>
            </tr>
            <tr>
                  <td className = 'sportcenterlist'>
                        <ul className='sportcenterlist'><SportCenterList /></ul>
                  </td>
            </tr>
      
            <tr height='30px'>
                  <td className='newgame'>Which day?
                  </td>
            </tr>
            
            <tr height='25px'>
                  
                  <td>
                  
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

            </tr>
            <tr>
                  <td className='signuperror'><this.Error1 /></td>
            </tr>
            <tr height='30px'>

                  <td className='newgame'>What time?
                  {this.props.sportcenteritems._embedded.sportcenters[this.state.selectedCenter-1].name}
                  </td>
            </tr>
            <tr height='25px'>
                  <td>  
                        <select value={this.state.timeselection} onChange={this.handleChangeTime.bind(this)}>
                              <Hourselect />
                        </select>
                  </td>
            </tr>
            <tr height='30px'>
                  <td className='newgame'>Which court?</td>
            </tr>
            <tr height='25px'>
                  <td>  
                        <select value={this.state.kurtselection} onChange={this.handleChangeKurt.bind(this)}>
                              <Kurtselect 
                                    number = {this.props.sportcenteritems._embedded.sportcenters[this.state.selectedCenter-1].kurtmax}
                                    />
                        </select>
                  </td>
            </tr>
            <tr height='30px'>
                  <td className='newgame'>How much per person?</td>
            </tr>
            <tr height='25px'>
                  <td><input type='text' name='priceperperson'/> CZK</td>
          </tr>
          <tr>
                  <td className='signuperror'><this.Error2 /></td>
            </tr>
          <tr height='30px'>
                  <td className='newgame' >Private game? <input type='checkbox' name='isprivate'/></td>
            </tr>

          <tr height='30px'>
                  <td className='newgame'>Extra comments (500 chars max)</td>
            </tr>
            <tr height='25px'>
                  <td><textarea className = 'description' name='comments'/></td>
          </tr>
        </tbody>
        <tfoot>
              <tr height='60px'>
                    <td className='loginbutton'>
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
                                          <button className='bodylink'href = '#' onClick={() => this.props.doNavigate('')}>
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