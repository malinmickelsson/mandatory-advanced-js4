import {createStore} from 'redux';

//Initial state for my store
const initial =  {
    current: 'red', // kan även vara blå
    board: [ // 7 col X 6 rows
        [], // col 1
        [], // col 2
        [], // col 3
        [], // col 4
        [], // col 5
        [], // col 6
        [], // col 7
    ],
};

function reducer(state, action) {
    if (action.type === 'DROP_TILE') {
        //do a thing
        console.log('landing in column ' + action.payload);
    }

    return state;
}

export default createStore (reducer, initial);