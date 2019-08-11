import {createStore} from 'redux';

//Initian state for my store
const initial =  { //start of board
    current: 'red', // player 1 starts
    board: [ // 7 col X 6 rows
        [], // col [0] //ex. ['red', 'blue', 'red', 'red']
        [], // col [1]
        [], // col [2]
        [], // col [3]
        [], // col [4]
        [], // col [5]
        [], // col [6]
    ],
    winner: null,
};

function reducer(state, action) {
    if (action.type === 'DROP_TILE') { //if a tile is dropped
        console.log('Tile dropped in column ' + action.payload);
        console.log('This tile was ' + state.current) // color of tile dropped

        const tile = state.current; // 'red' or 'blue'
        const col = state.board[action.payload].concat(tile); // new column          

        const board = state.board.slice(); // copy board (cant use initial one))   
        board[action.payload] = col; // combines column + board = updates with a new tile

        calculateWinner(board);

        return {
            current: state.current === 'red' ? 'blue' : 'red',
            board: board,       
        };
    }
    return state;
}

  //==================== checkWinner ====================
    
const rowSize = 7;
const columnSize = 6;
    
function calculateWinner(board) {

    for (let x = 0; x < rowSize; x++) {
        for (let y = 0; y < columnSize; y++) {

            // Get current tile
            let currentColor = board[x][y];
            
            // if no tile continue
            if (!currentColor) { continue; }

            let rowHas4equals = checkRowHas4Equals(board, currentColor, x, y);
            let colHas4equals = checkColHas4Equals(board, currentColor, y, x);
            let diagonalHas4equals = checkDiagonalHas4Equals(board, currentColor, x, y)

            if (rowHas4equals === true || colHas4equals === true  || diagonalHas4equals === true ) {
                alert('we have a WINNER!');
            }
        }
    }
}

function checkRowHas4Equals(board, currentColor, startX, y) {
    // check out of bounds for end
    let endX = (startX + 4 < rowSize) ? startX + 4 : rowSize;
    let countEqualColors = 0;


    // Step along row
    for (let x = startX; x < endX; x++){

        // get currentColorToCheck to check
        let currentColorToCheck = board[x][y];


        // Check if color is the one we are looking for
        if (currentColorToCheck === currentColor) {
            
            countEqualColors++;
        }
    }

    // return boolean for if we have found 4 of equal color
    return countEqualColors === 4;
}


function checkColHas4Equals(board, currentColor, startY, x) {
    // check out of bounds for end
    let endY = (startY + 4 < columnSize) ? startY + 4 : columnSize;
    let countEqualColors = 0;


    // Step along row
    for (let y = startY; y < endY; y++){

        // get currentColorToCheck to check
        let currentColorToCheck = board[x][y];
        //console.log('tileToCheck ' + currentColorToCheck)

        // Check if color is the one we are looking for
        if (currentColorToCheck === currentColor) {
            
            countEqualColors++;
            //console.log('countEqualColors ' + countEqualColors);
        }
    }

    // return boolean for if we have found 4 of equal color
    return countEqualColors === 4;
}

function checkDiagonalHas4Equals(board, currentColor, startX, startY ) {
    return checkDiagonalHas4EqualsUp(board, currentColor, startX, startY) || checkDiagonalHas4EqualsDown(board, currentColor, startX, startY);
}

function checkDiagonalHas4EqualsUp(board, currentColor, startX, startY) {
    let endX = (startX + 4 < rowSize) ? startX + 4 : rowSize;    
    let endY = (startY + 4 < columnSize) ? startY + 4 : columnSize;
    
    let countEqualColors = 0;
    let x = startX;
    let y = startY;

    while( x < endX && y < endY ) {
         // get currentColorToCheck to check
         let currentColorToCheck = board[x][y];

         // Check if color is the one we are looking for
         if (currentColorToCheck === currentColor) {
             
             countEqualColors++;
             console.log('countEqualColors ' + countEqualColors);
         }
         x++;
         y++;
    }

    // return boolean for if we have found 4 of equal color
    return countEqualColors === 4;
}

function checkDiagonalHas4EqualsDown(board, currentColor, startX, startY) {
    let endX = (startX + 4 < rowSize) ? startX + 4 : rowSize;    

    let endY = (startY - 4 > 0) ? startY - 4 : 0;
    
    let countEqualColors = 0;
    let x = startX;
    let y = startY;

    while( x < endX && y >= endY ) {
         // get currentColorToCheck to check
         let currentColorToCheck = board[x][y];
         
         // Check if color is the one we are looking for
         if (currentColorToCheck === currentColor) {
             
             countEqualColors++;
             //console.log('countEqualColors ' + countEqualColors);
         }
         x++;
         y--;
    }

    // return boolean for if we have found 4 of equal color
    return countEqualColors === 4;
}



export default createStore (reducer, initial);