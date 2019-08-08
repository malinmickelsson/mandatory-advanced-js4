import React, { Component} from 'react';

class GridCell extends Component {
    render() {
        return (
            <div>  
                <p> {this.props.x}, {this.props.y} </p>
            </div>
        );
    }
}

export default GridCell;

// x = row,  y = col