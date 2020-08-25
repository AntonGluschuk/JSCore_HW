/* 
    Запросить у пользователя трехзначное число
    и проверить, есть ли в нем одинаковые цифры.
*/

const num = +prompt('Enter a number between 100 and 999:');

const oneDigitNum = num % 10;
const twoDigitNum = ((num - oneDigitNum) % 100) / 10;
const threeDigitNum = (num - (num % 100)) / 100;

if(num < 100 || num > 999 || isNaN(num) || !Number.isInteger(num)) {
    alert('You are out of range, try again.');
} else if(oneDigitNum === twoDigitNum || oneDigitNum === threeDigitNum || twoDigitNum === threeDigitNum) {
    alert('Find same digits!');
} else {
    alert('All digits in your number are unique!');
}

/* 
Вопросы:

*/