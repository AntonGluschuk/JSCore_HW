/* 
    Написать функцию, которая принимает двузначное число
    и возвращает его в текстовом виде. 
    Например: 35 – тридцать пять, 89 – восемьдесят девять,
    12 – двенадцать.
*/

const singleWordNum = ['eleven', 'twelve', 'thirteen',
                        'fourteen', 'fifteen', 'sixteen',
                        'seventeen', 'eighteen', 'nineteen'];

const twoDigitNum = ['ten', 'twenty', 'thirty',
                        'forty', 'fifty', 'sixty',
                        'seventy', 'eighty', 'ninety'];

const oneDigitNum = ['one', 'two', 'three',
                     'four', 'five', 'six',
                     'seven', 'eight', 'nine'];

const num = 12;

function getTextOfNum(n) {
    const [firstChar, secondChar] = String(n);    
    if(n > 10 && n < 20) {                
        return singleWordNum[secondChar - 1];
    } else if(+secondChar === 0) {    
        return twoDigitNum[firstChar - 1];
    } else {
        return `${twoDigitNum[firstChar - 1]} ${oneDigitNum[secondChar - 1]}`;
    }   
}

console.log(getTextOfNum(num));

/* 
Вопросы:

*/