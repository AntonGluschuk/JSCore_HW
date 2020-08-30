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

const ticTacBoard = [[0, 0, 1],
                     [0, 1, 2],
                     [2, 1, 0]];

function checkBoardCondition(ttBoard) {    
    let openFullBoard = [];    
    
    ttBoard.forEach(boardLine => {
        openFullBoard.push(...boardLine);
    });
    
    let winnerX = checkForX(openFullBoard);
    let winnerO = checkForO(openFullBoard);

    switch (true) {
        case openFullBoard.includes(0):
            return `${-1} - the board is not yet finished`;
        case (winnerX || winnerO) === '':
            return `${0} - it's a draw`;
        case winnerX === '"X" won':
            return `${1} - ${winnerX}`;
        case winnerO === '"O" won':
            return `${2} - ${winnerO}`;    
        default:
            break;
    }       
}

function checkUniquePositions(fullBoard, arrayOfPositions) {
    let uniqueLine = fullBoard.filter((pos, index) => arrayOfPositions.includes(index))
    if(uniqueLine.every(pos => pos === 1)) return 'X';
    if(uniqueLine.every(pos => pos === 2)) return 'O';
}

function checkForX(fullBoard) {
    let resultForX = '';
    
    switch (true) {
        case (fullBoard.slice(0, 3).every(pos => pos === 1)):
            resultForX += '"X" won';
            break;
        case (fullBoard.slice(3, 6).every(pos => pos === 1)):
            resultForX += '"X" won';
            break;
        case (fullBoard.slice(6).every(pos => pos === 1)):
            resultForX += '"X" won';
            break;
        case (checkUniquePositions(fullBoard, [0,3,6]) === 'X'):
            resultForX += '"X" won';
            break;
        case (checkUniquePositions(fullBoard, [1,4,7]) === 'X'):
            resultForX += '"X" won';
            break;
        case (checkUniquePositions(fullBoard, [2,5,8]) === 'X'):
            resultForX += '"X" won';
            break;
        case (checkUniquePositions(fullBoard, [0,4,8]) === 'X'):
            resultForX += '"X" won';
            break;
        case (checkUniquePositions(fullBoard, [2,4,6]) === 'X'):
            resultForX += '"X" won';
            break;
        default:
            break;
    }
    return resultForX;
}

function checkForO(fullBoard) {
    let resultForO = '';
    
    switch (true) {
        case (fullBoard.slice(0, 3).every(pos => pos === 2)):
            resultForO += '"O" won';
            break;
        case (fullBoard.slice(3, 6).every(pos => pos === 2)):
            resultForO += '"O" won';
            break;
        case (fullBoard.slice(6).every(pos => pos === 2)):
            resultForO += '"O" won';
            break;
        case (checkUniquePositions(fullBoard, [0,3,6]) === 'O'):
            resultForO += '"O" won';
            break;
        case (checkUniquePositions(fullBoard, [1,4,7]) === 'O'):
            resultForO += '"O" won';
            break;
        case (checkUniquePositions(fullBoard, [2,5,8]) === 'O'):
            resultForO += '"O" won';
            break;
        case (checkUniquePositions(fullBoard, [0,4,8]) === 'O'):
            resultForO += '"O" won';
            break;
        case (checkUniquePositions(fullBoard, [2,4,6]) === 'O'):
            resultForO += '"O" won';
            break;
        default:
            break;
    }
    return resultForO;
}

console.log(checkBoardCondition(ticTacBoard)); 

/* 
Вопросы:
    1. Так или иначе точно должен быть вариант решения покороче?)
*/