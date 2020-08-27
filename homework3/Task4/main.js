/* 
    Your order, please

    Your task is to sort a given string. Each word
    in the string will contain a single number. This
    number is the position the word should have in
    the result.

    Note: Numbers can be from 1 to 9. So 1 will be the
    first word (not 0).

    If the input string is empty, return an empty string.
    The words in the input String will only contain
    valid consecutive numbers.

    Examples

    "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

    "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"

    ""  -->  ""
*/

const stringWithNum = prompt('Enter a string where words must contain single number between (1-9):');
const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

function getOrderedString(numString, numbers) {
    let wordsArr = numString.split(' ');   
    let sortedArr = [];      
    for(let i = 0; i < numbers.length; i++) { 
        for(let j = 0; j < wordsArr.length; j++) {
            if(wordsArr[j].includes(numbers[i])) {
                sortedArr[i] = wordsArr[j];    
            }
        }
    } 

    return sortedArr.join(' ');
}

if(stringWithNum === null) {
    alert('Wrong value, please try again.')
} else {
    alert(stringWithNum === ' ' ? ' ' : getOrderedString(stringWithNum, nums));
}

/* 
Вопросы:
    1. Как оптимизировать чтобы отслеживало и сортировало больше одног слова с одинаковой цифрой? 
*/