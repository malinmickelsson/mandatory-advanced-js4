import {createStore} from 'redux';

//Initial state for my store
const initial =  {
    current: 'red',
    board: [ // 7 col X 6 rows
        [], // col 1   [0]
        [], // col 2   [1]
        [], // col 3   [2]
        [], // col 4   [3]
        [], // col 5   [4]
        [], // col 6   [5]
        [], // col 7   [6]
    ],
};

function reducer(state, action) {
    if (action.type === 'DROP_TILE') { //if a tile is dropped
        console.log('Tile droped in column ' + action.payload);

        const tile = state.current; // aningen röd eller blå
        const col = state.board[action.payload].concat(tile); // ny kolumn
                                              //concat() joins strings

        const board = state.board.slice(); // kopiera board (kan inte använda befintliga)   
        board[action.payload] = col; // kombinera kolumn + board = uppdatera kolumnen med ny bricka (tile)

        return {
            current: state.current === 'red' ? 'blue' : 'red',
            board: board,       
        };
    }

    return state;
}

export default createStore (reducer, initial);