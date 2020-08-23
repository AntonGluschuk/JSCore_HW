/* 
    Запросить у пользователя пятиразрядное число
    и определить, является ли  оно палиндромом.
*/

const fiveDigitNum = prompt('Enter a number between 10000 and 99999:');
let palindrome = '';

if(fiveDigitNum < 10000 || fiveDigitNum > 99999 || isNaN(fiveDigitNum)) {
    alert('Incorrect values or out of range, please try again.');
} else {
    for(let i = 0; i < fiveDigitNum.length; i++) {
        fiveDigitNum[i] === fiveDigitNum[fiveDigitNum.length - 1 - i] ? palindrome += fiveDigitNum[i] : null;
    }
    
    palindrome === fiveDigitNum ? alert('This is a palindrome!') : alert('This is a regular number.');
}

/* 
Вопросы:
 1. Как ещё можно решить данную задачу?
*/