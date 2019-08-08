import React, { Component} from 'react';

//---------------------------------------
import './App.css';
//---------------------------------------

import GridCell from './GridCell';

class App extends Component {
  render() {
    const cells = [];

    // sortera rader och culumner
    for (let y = 5; y >= 0; y--) {
      const row =[];

      for (let x = 0; x < 7; x++) {
        row.push(<GridCell x={x} y={y} />);
      }

      cells.push(<div className='row'>{row}</div>)
    } 
    return (
      <div className="App">
        
        
        {cells}
      </div>
       
    );
  }
}

export default App;