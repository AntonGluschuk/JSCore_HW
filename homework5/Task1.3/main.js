/* 
    Написать функцию, которая заменяет в полученной
    строке большие буквы на маленькие, маленькие – на большие,
    а цифры – на знак нижнего подчеркивания.
*/

const arbitraryStr = 'asdasdASD1123';

function getUptoDownString(someStr) {
    let changedStr = '';
    for(let char of someStr) {
        changedStr += checkTypeOfChar(char);
    }       
    return changedStr;
}

function checkTypeOfChar(chr) {
    if(/[0-9]/.test(chr)) {
        return chr.replace(/[0-9]/, '_');
    } else if(/[a-z]/.test(chr)) {
        return chr.replace(/[a-z]/, math => math.toUpperCase());
    } else if(/[A-Z]/.test(chr)) {
        return chr.replace(/[A-Z]/g, math => math.toLowerCase());
    }
}

console.log(getUptoDownString(arbitraryStr));

/* 
Вопросы:

*/