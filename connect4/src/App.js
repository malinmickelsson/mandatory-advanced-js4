import React, { Component} from 'react';
import {Helmet} from "react-helmet";
import './App.css';
import GridCell from './GridCell'; 

class App extends Component {
  render() {

    //const board = this.props.board;
    const cells = [];

    // sorting
    for (let y = 5; y >= 0; y--) {
      const row =[];

      for (let x = 0; x < 7; x++) {
        row.push(<GridCell key={x} x={x} y={y} />);

      }

      cells.push(<div key={y} className='row'>{row}</div>)
    }

    return (
      <div>
        <div className="App">
        <Helmet>
                <title>Connect 4</title>
        </Helmet>

        {cells}
      </div>
      </div>       
    );
  }
}

export default App;
