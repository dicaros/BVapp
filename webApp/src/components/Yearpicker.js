import React from 'react';
import { currentday } from '../functions/functions.js'

var thisday = currentday();
const monthstring = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const daystring = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

function SquareTop(props) {
 
    return (
      <div className='square'>
          {props.value}
      </div>)
}

function Square(props) {
    var classname = 'square'
    if (props.value == props.day) classname = 'redsquare'
    return (
        <div className={classname} 
        onClick={props.onClick}
      >
        {props.value}       
      </div>
    );
  }

function convertmonthtostring (monthint) {
    return monthstring[monthint-1]
}

function convertmonthtoint(monthstring) {
    var monthint = 1;
    if (monthstring == 'February') monthint = 2;
    else if (monthstring == 'March') monthint = 3;
    else if (monthstring == 'April') monthint = 4;
    else if (monthstring == 'May') monthint = 5;
    else if (monthstring == 'June') monthint = 6;
    else if (monthstring == 'July') monthint = 7;
    else if (monthstring == 'August') monthint = 8;
    else if (monthstring == 'September') monthint = 9;
    else if (monthstring == 'October') monthint = 10;
    else if (monthstring == 'November') monthint = 11;
    else if (monthstring == 'December') monthint = 12;

    return monthint
}

function dayoftheweek(day, month, year)
{
    var d = new Date(year, month-1, day);
    var dayoftheweek = [daystring[d.getDay()], d.getDay()]
    return dayoftheweek;
}

class Datepicker extends React.Component {

    constructor(props) {
        super(props);
              this.state = {
                    selectedyear: thisday[0],
                    selectedmonth: thisday[1],
                    selectedmonthstring: convertmonthtostring(thisday[1])
              }
        }

renderSquareTop(i) {
            return (
              <SquareTop
                value={i}
              />
            );
          } 

  renderSquare(i) {
    return (
      <Square
        value={i}
        day={this.props.selectedday}
        onClick={() => this.props.onClick(i)}
      />
    );
  } 


numberofdays(year, monthint) {
    var ndays = 31;
    var month = convertmonthtostring(monthint)
    if (month == 'November' || month == 'April' || month == 'June'  || month == 'September') ndays = 30
    else if (month == 'February' && year%4 == 0 && year%100 == 0 && year%400 != 0) ndays = 28;
    else if (month == 'February' && year%4 == 0) ndays = 29;    
    else if (month == 'February' && year%4 != 0) ndays = 28;

    return ndays
}

handleChangeMonth(event) {
    this.setState({
            selectedmonth: convertmonthtoint(event.target.value),
            selectedmonthstring: event.target.value
    })
};


render() {


  var ndays = this.numberofdays(this.state.selectedyear, this.state.selectedmonth)
  const items = [];
  var firstofthemonth = dayoftheweek(1, this.state.selectedmonth, this.state.selectedyear)
  var x = 0;
  var z = 0;
  for (z = 0; z<7; z++)
  {
    items.push(<div className="date1" />)
    items.push(this.renderSquareTop(daystring[z]))
  }
  for (x = 0; x<7; x++)
  {
    items.push(<div className="date1" />)
      var y = 0;
      var pushedvalue;
      for (y = 0; y<7; y++)   
      {
        var totalsquares = 1+y+x*7;
        if(totalsquares <= ndays+firstofthemonth[1])
          {
            if(totalsquares-firstofthemonth[1]>0)
                {
                    pushedvalue = totalsquares-firstofthemonth[1];
                }
                else pushedvalue = null;
            items.push(this.renderSquare(pushedvalue))
        }
      };
  };

    const Montharray = () => {
        return(
        monthstring.map ((row, index) =>                   
        {
          return(
          <option name='timeselect' key={index} value={row}>{row}</option>
          )
        })
        )
    }


    return (
          <center><a className = 'bodylink' href ='#' onClick={() => this.handleChangeYear(0)}> {' << '} </a>
          <select value={this.state.selectedmonthstring} onClick={this.handleChangeMonth.bind(this)}> 
            <Montharray />
          </select>
          {' ' + this.state.selectedyear}
          <span className = 'dateheader'><a className = 'bodylink' href ='#' onClick={() => this.handleChangeYear(1)}> {' >> '} </a></span>
          {items}</center>
    );
  }

}

export default Datepicker;



