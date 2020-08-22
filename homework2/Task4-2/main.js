/* 
    Запросить у пользователя число от 0 до 9
    и вывести ему спецсимвол, который расположен
    на этой клавише (1–!, 2–@, 3–# и т. д).
*/

const num = prompt('Input a number from 0 to 9 and I`ll give you related special symbol:', 0);
const specialSymbols = {
    1: '!',
    2: '@',
    3: '#',
    4: '$',
    5: '%',
    6: '^',
    7: '&',
    8: '*',
    9: '(',
    0: ')'
}
!(num === null || num === "" || isNaN(num)) ? Number(num) : null;
num in specialSymbols ? alert(`Your special symbol is: ${specialSymbols[num]}`) : alert('Wrong value');


/* 
Вопросы:
 
*/