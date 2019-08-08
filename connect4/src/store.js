import {createStore} from 'redux';

//Initial state for my store
const initial =  {
    
};

function reducer(state, action) {
    if (action.type === 'DROP_TILE') {
        //do a thing
    }

    return state;
}

export default createStore (reducer, initial);