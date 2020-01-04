import React from 'react';

export const monthstring = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const daystring = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

export function convertmonthtoint(monthstring) {
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

export function convertmonthtostring (monthint) {
  return monthstring[monthint-1]
}

export function currentday (date) {
        var today = null;
        if(date==null || date == '')
          { today = new Date(); }
        else today = date;
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var hh = String(today.getHours()).padStart(2, '0');
        var min = String(today.getMinutes()).padStart(2, '0')
        var sec = String(today.getSeconds()).padStart(2, '0')
        var todaydate = [yyyy, mm, dd, hh, min, sec];
    return todaydate;
}

export function todaydash(datetime) { return (''+ datetime[0] + '-' + datetime[1] + '-' + datetime[2])}
export function timedash(datetime) { return (''+ datetime[3] + ':' + datetime[4] + ':' + datetime[5])}

export function dayoftheweek(day, month, year)
{
    var d = new Date(year, month-1, day);
    var dayoftheweek = [daystring[d.getDay()], d.getDay()]
    return dayoftheweek;
}

export function handleDelete(deleteurl, props, url) {
  fetch(deleteurl,
  {
    method: 'DELETE',
    headers: {'content-type': 'application/json'},
    credentials: 'include'
  })
  
  .then(res => {
        res.json();
        props.fetchData(url);
  })
  .then(res => {
     console.log()
    })                  
};

export function handleQuit(deleteurl) {
  fetch(deleteurl,
  {
    method: 'DELETE',
    headers: {'content-type': 'application/json'},
    credentials: 'include'
  })
  .then(res => {
     console.log()
    })                  
};

export const Hourselect = () => {
  var i = 0;
  var y = 0;
  var halfhour = ':00';
  var timearray = []
  for (i=0;i<24;i++)
  {
        for(y=0;y<=1;y++)  
        {
            if (y == 0) 
            { 
              halfhour = ':00';
            }
            else { 
              halfhour = ':30';
            };
            timearray[(i*2)+y]='' + i + '' + halfhour;
        }
  }
  return (
    timearray.map ((row, index) =>                   
        {
          return(
          <option name='timeselect' key={index} value={row}>{row}</option>
          )
        })

       )
}

export const Kurtselect = () => {
    var i = 0;
    var kurtarray = []

    for (i=0;i<40;i++)
      { kurtarray[i]=i+1; }

    return (
        kurtarray.map ((row, index) =>                   
      {
        return(<option name='kurtselect' key={index} value={row}>{row}</option>)
      })
    )
}

export function numberofdays(year, monthint) {
  var ndays = 31;
  var month = convertmonthtostring(monthint)
  if (month == 'November' || month == 'April' || month == 'June'  || month == 'September') ndays = 30
  else if (month == 'February' && year%4 == 0 && year%100 == 0 && year%400 != 0) ndays = 28;
  else if (month == 'February' && year%4 == 0) ndays = 29;    
  else if (month == 'February' && year%4 != 0) ndays = 28;

  return ndays
}