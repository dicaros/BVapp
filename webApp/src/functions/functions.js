export const monthstring = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const daystring = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

export function currentday () {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      var todaydate = [yyyy, mm, dd];
    return todaydate;
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

export function handleDelete(deleteurl, props, url) {
                  fetch(deleteurl,
                  {
                    method: 'DELETE',
                    headers: {'content-type': 'application/json'},
                    credentials: 'include'
                  })
                  .then(res => {
                        res.json();
                        props.fetchData(url, props.page, 10);
                  })
                  .then(res => {
                     console.log()
                    })                  

};

export function convertmonthtostring (monthint) {
  return monthstring[monthint-1]
}

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
