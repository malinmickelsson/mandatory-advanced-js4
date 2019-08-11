import React, { Component} from 'react';
import { connect } from 'react-redux';
import { dropTile } from './actions';


class GridCell extends Component { // x = col,  y = row
    handleClick() {
        console.log('Clicked on column ' + this.props.x);

        this.props.sendTileDrop(this.props.x);
    }

    render() {
        const board = this.props.board;
        const x = this.props.x;
        const y = this.props.y;

        let classes = 'cell'; // default har className = 'cell'

        // if slot is full, stop tiles from adding to array, but keep game going.
        if (board[x].length > 6) { 
            console.log('COLUMN IS FULL');
            alert('This column is full.');
            board[x].pop(); // removes unvanted tiles
        } 

        // if slot is empty, place a tile
        if(board[x][y] !== undefined) {
            if (board[x][y] === 'red') {
                classes += ' p2';
            } else {
                classes += ' p1';
            }
        } 

        return ( // <p>{this.props.x}, {this.props.y}</p> = coordinates  ex. 2,4 (column [2], row [4])
            <div className={classes} onClick={() => this.handleClick()}> 
                <div board={board}></div>
            </div>
        
        );
    }
}

const stateToProps = state => {
    return {
        board: state.board,
    };
};

const dispatchToProps = dispatch => {
    return {
        sendTileDrop: col => dispatch(dropTile(col)), //(col) = payload 
    };
};

export default connect(stateToProps, dispatchToProps) (GridCell);