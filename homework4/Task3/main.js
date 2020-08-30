/* 
    Напишите свои функции-аналоги методов массивов:

    pop,
    push,
    shift,
    unshift,
    concat

    Варианты решения:

    используя splice - готово
    используя length / [ ] brackets
*/

const defaultNums = [1,2,3];
console.log(`Default array: [${defaultNums}]`);

function analogPop(arr) {
    let popValue = [];
    popValue = arr.splice(-1, 1);
    return popValue;
}

console.log(`\nAnalogPop method with splice return - ${analogPop(defaultNums)}`); 
console.log(`Result after using analogPop - ${defaultNums}`);

/* ------------------------------------------------------------------------------- */





const defaultNums2 = [1,2,3];
const arbitraryValue = 4;

function analogPush(arr, arValue) {
    arr.splice(arr.length, 0, arValue);
    return arr;
}

console.log(`\nAnalogPush method with splice return - ${analogPush(defaultNums2, arbitraryValue)}`);

/* ------------------------------------------------------------------------------- */





const defaultNums3 = [1,2,3];

function analogShift(arr) {
    let shiftValue = [];
    shiftValue = arr.splice(0, 1);
    return shiftValue;
}

console.log(`\nAnalogShift method with splice return - ${analogShift(defaultNums3)}`); 
console.log(`Result after using analogShift - ${defaultNums3}`);

/* ------------------------------------------------------------------------------- */





const defaultNums4 = [1,2,3];
const arbitraryValue2 = 0;

function analogUnshift(arr, arValue) {
    arr.splice(0, 0, arValue);
    return arr;
}

console.log(`\nAnalogUnshift method with splice return - ${analogUnshift(defaultNums4, arbitraryValue2)}`);

/* ------------------------------------------------------------------------------- */





const defaultNums5 = [1,2,3];

function analogConcat(arr, ...otherArguments) {
    arr.splice(arr.length, 0, ...otherArguments);
    return arr;
}

console.log(`\nAnalogConcat method with splice return - ${analogConcat(defaultNums5, [4,5])}`);

/* 
Вопросы:

*/