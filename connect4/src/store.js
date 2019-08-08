import {createStore} from 'redux';

//Initial state for my store
const initial =  {
    current: 'red', // kan även vara blå
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
    if (action.type === 'DROP_TILE') {
        //do a thing
        console.log('Tile placed in column ' + action.payload);
    }

    return state;
}

export default createStore (reducer, initial);