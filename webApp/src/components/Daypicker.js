import React from 'react';
import { currentday } from '../functions/functions.js'
import { daystring } from '../functions/functions.js'
import { dayoftheweek } from '../functions/functions.js'
import { convertmonthtostring } from '../functions/functions.js'

var thisday = currentday();

function SquareTop(props) {
 
    return (
      <div className='square'>
          {props.value}
      </div>)
}

function Square(props) {
    var classname = 'square'
    if (props.value == props.day) classname = 'squareselected'
    return (
        <div className={classname} 
        onClick={props.onClick}
      >
        {props.value}       
      </div>
    );
  }

class Daypicker extends React.Component {

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

render() {


  var ndays = this.numberofdays(this.props.selectedyear, this.props.selectedmonth)
  const items = [];
  var firstofthemonth = dayoftheweek(1, this.props.selectedmonth, this.props.selectedyear)
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

    return (
          <center>
          {items}</center>
    );
  }

}

export default Daypicker;



