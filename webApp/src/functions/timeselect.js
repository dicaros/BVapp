import React from 'react';

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
        {
                   kurtarray[i]=i+1;
              }
        
    return (
        kurtarray.map ((row, index) =>                   
              {
                return(
                <option name='kurtselect' key={index} value={row}>{row}</option>
                )
              })

              )
  }


