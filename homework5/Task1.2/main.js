/* 
    Написать функцию, которая принимает строку
    и выводит статистику о ней: количество букв,
    количество цифр и количество других знаков.
*/

const arbitraryString = 'azxc23%@$@##vc324xA';

function countEveryChar(randomStr) {
    const lettersReg = /[a-zA-Z]/g;
    const digitsReg = /[0-9]/g;
    const otherCharReg = /[^a-zA-Z0-9]/g;
    const letters = randomStr.match(lettersReg);
    const digits = randomStr.match(digitsReg);
    const otherChars = randomStr.match(otherCharReg);

    return `Letters:${letters.length}, Digits:${digits.length}, Other Characters:${otherChars.length}`;
}

console.log(countEveryChar(arbitraryString));

/* 
Вопросы:

*/