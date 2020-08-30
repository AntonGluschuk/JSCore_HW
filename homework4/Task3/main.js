/* 
    Напишите свои функции-аналоги методов массивов:

    pop,
    push,
    shift,
    unshift,
    concat

    Варианты решения:

    используя splice
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





const nums2 = [1,2,3];
const arbitraryValue = 4;

function analogPush(arr, arValue) {
    arr.splice(arr.length, 0, arValue);
    return arr;
}

console.log(`\nAnalogPush method with splice return - ${analogPush(nums2, arbitraryValue)}`);

/* ------------------------------------------------------------------------------- */





const nums3 = [1,2,3];

function analogShift(arr) {
    let shiftValue = [];
    shiftValue = arr.splice(0, 1);
    return shiftValue;
}

console.log(`\nAnalogShift method with splice return - ${analogShift(nums3)}`); 
console.log(`Result after using analogShift - ${nums3}`);

/* ------------------------------------------------------------------------------- */





const nums4 = [1,2,3];
const arbitraryValue2 = 0;

function analogUnshift(arr, arValue) {
    arr.splice(0, 0, arValue);
    return arr;
}

console.log(`\nAnalogUnshift method with splice return - ${analogUnshift(nums4, arbitraryValue2)}`);

/* ------------------------------------------------------------------------------- */





const nums5 = [1,2,3];

function analogConcat(arr, ...otherArguments) {
    arr.splice(arr.length, 0, ...otherArguments);
    return arr;
}

console.log(`\nAnalogConcat method with splice return - ${analogConcat(nums5, [4,5])}`);

/* 
Вопросы:

*/