import React from 'react';
import { monthstring } from '../functions/functions.js'

class Monthpicker extends React.Component {

  render() {

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
              <Montharray />
     );
  }

}

export default Monthpicker;



