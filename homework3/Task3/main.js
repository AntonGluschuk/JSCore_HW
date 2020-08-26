/* 
    Simple, given a string of words, return the length
    of the shortest word(s).
    String will never be empty and you do not need
    to account for different data types.

    Examples

    "bitcoin take over the world maybe who
    knows perhaps" --> 3)
    "turns out random test cases are easier
    than writing out basic ones" --> 3)
    "lets talk about javascript the best language" --> 3)
    "i want to travel the world writing code one day" --> 1)
    "Lets all go on holiday somewhere very cold" --> 2)
*/

let arbitraryString = prompt('Enter an arbitrary string:');

function getShortestWordLength(aString) {
    let strArr = aString.split(' ');
    let arrOfLengths = [];
    strArr.forEach(element => {
        arrOfLengths.push(element.length);
    });    
    return Math.min(...arrOfLengths);
}

alert(arbitraryString === null ||
      arbitraryString === '' ? 'You enter invalid values' :
       `Length of the shortest word(s): ${getShortestWordLength(arbitraryString)}`);


/* 
Вопросы:

*/