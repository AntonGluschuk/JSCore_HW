/* 
    Tic-Tac-Toe Checker
    If we were to set up a Tic-Tac-Toe game, we would want
    to know whether the board's current state is solved,
    wouldn't we? Our goal is to create a function that will
    check that for us!

    Assume that the board comes in the form of a 3x3 array,
    where the value is 0 if a spot is empty, 1 if it is
    an "X", or 2 if it is an "O", like so:

    [[0, 0, 1],

    [0, 1, 2],

    [2, 1, 0]]

    We want our function to return:

    -1 if the board is not yet finished
    (there are empty spots),
    1 if "X" won,
    2 if "O" won,
    0 if it's a cat's game (i.e. a draw).
    You may assume that the board passed in is valid
    in the context of a game of Tic-Tac-Toe.
*/

const ticTacBoard = [[1, 0, 1],
                     [0, 1, 1],
                     [0, 1, 1]];

function checkBoardCondition(ttBoard) {    
    let result = '';
    let firstVertical1 = [];
    let secondVertical1 = [];
    let thirdVertical1 = [];
    let firstVertical2 = [];
    let secondVertical2 = [];
    let thirdVertical2 = [];

    // let verticalForX = [];
    // for(let i = 0; i < ttBoard.length; i++) {
    //     switch (true) {
    //         case (ttBoard[i].every(singlePos => singlePos === 1)):
    //             result += '"X" won';
    //             break;
    //         case (ttBoard[i].every(singlePos => singlePos === 2)):
    //             result += '"O" won';
    //             break;
    //         default:
    //             break;
    //     }     
    // }
    
    // for(let i = 0; i < 3; i++) {
    //     let everyX1 = ttBoard[i].map(linePos => linePos === 1 ? linePos : 0);           
    //     verticalForX.push(everyX1);        
    // }
    // let vFXWin = [];
    // for(let i = 0; i < 3; i++) {
        
    //     if(verticalForX[i].every(vPos => vPos === 1)) {
    //        vFXWin.push(true); 
    //     } else {
    //        vFXWin.push(false);  
    //     }
    // }
    // console.log(vFXWin);    
    // console.log(verticalForX);

    for(let i = 0; i < ttBoard.length; i++) {        
        firstVertical2.push(ttBoard[i][0]);    
    }
    firstVertical2.every(pos => pos === 2) ? result += '"O" won' : 0;

    for(let i = 0; i < ttBoard.length; i++) {        
        secondVertical2.push(ttBoard[i][1]);    
    }
    secondVertical2.every(pos => pos === 2) ? result += '"O" won' : 0;

    for(let i = 0; i < ttBoard.length; i++) {        
        thirdVertical2.push(ttBoard[i][2]);    
    }
    thirdVertical2.every(pos => pos === 2) ? result += '"O" won' : 0;

    if(ttBoard[0][0] === 1 && ttBoard[1][1] === 1 && ttBoard[2][2] === 1) {
        result += '"X" won';
    } else if(ttBoard[0][2] === 1 && ttBoard[1][1] === 1 && ttBoard[2][0] === 1) {
        result += '"X" won';
    } else if(ttBoard[0][0] === 2 && ttBoard[1][1] === 2 && ttBoard[2][2] === 2) {
        result += '"O" won';
    } else if(ttBoard[0][2] === 2 && ttBoard[1][1] === 2 && ttBoard[2][0] === 2) {
        result += '"O" won';
    }    
    console.log(result);    
    /* 
     Для отслеживания победы Х(крестика)
        Если хотябы один массив состоит полностью из 1-иц - то победил Х - готово
        Если во всех массивах 0-ой елемент содержит 1-цу - то победил Х - готово
        Если во всех массивах 1-ой елемент содержит 1-цу - то победил Х - готово
        Если во всех массивах 2-ой елемент содержит 1-цу - то победил Х - готово
        Если в 1 массиве 0-ой, во 2 массиве 1-ый и в 3 массиве 2-ой (елементы) содержат 1-цы - то победил Х - готово
        Если в 1 массиве 2-ой, во 2 массиве 1-ый и в 3 массиве 0-ой (елементы) содержат 1-цы - то победил Х - готово

    Для отслеживания победы O(нолика)
        Если хотябы один массив состоит полностью из 2-ек - то победил O - готово
        Если во всех массивах 0-ой елемент содержит 2-ку - то победил O - готово
        Если во всех массивах 1-ой елемент содержит 2-ку - то победил O - готово
        Если во всех массивах 2-ой елемент содержит 2-ку - то победил O - готово
        Если в 1 массиве 0-ой, во 2 массиве 1-ый и в 3 массиве 2-ой (елементы) содержат 2-ки - то победил O - готово
        Если в 1 массиве 2-ой, во 2 массиве 1-ый и в 3 массиве 0-ой (елементы) содержат 2-ки - то победил O - готово
    */
    
}

checkBoardCondition(ticTacBoard);

/* 
Вопросы:

*/