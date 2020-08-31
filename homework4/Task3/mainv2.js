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

const defaultArr = [1,2,3];
console.log(`Default array ${defaultArr}`);

function analogPopV2(defArr) {
    let removedLastItem = defArr[defArr.length - 1];
    defArr.length -= 1;
    return [removedLastItem];
}

console.log(`\nanalogPop v2 return [${analogPopV2(defaultArr)}]`);
console.log(`Result after using analogPop v2 - [${defaultArr}]`);

/* ------------------------------------------------------------------------------- */





const defaultArr2 = [1,2,3];
const arbitraryValue = 4;

function analogPushV2(arr, val) {
    arr[arr.length] = val;
    return arr;
}

console.log(`\nResult after using analogPush v2 [${analogPushV2(defaultArr2, arbitraryValue)}]`);

/* ------------------------------------------------------------------------------- */





const defaultArr3 = [1,2,3];

function analogShiftV2(arr) {
    let shiftVal = [];    
    shiftVal[0] = arr[0];
    arr[0] = arr[1];
    arr[1] = arr[2];
    // for(let i = 0; i < arr.length; i++) {        
    //     arr[i] = arr[i+1];        
    // }
    arr.length -= 1;
    return shiftVal;
    // let newArr = arr.reverse(); ???
}

console.log(`\nanalogShift v2 return [${analogShiftV2(defaultArr3)}]`);
console.log(`Result after using analogShift v2 - [${defaultArr3}]`);

/* ------------------------------------------------------------------------------- */





const defaultArr4 = [1,2,3];
const arbitraryValue2 = 0;

function analogUnshiftV2(arr, val) {
    arr.length += 1;
    let newArr = [];
    newArr[0] = val;
    newArr[1] = arr[0];
    newArr[2] = arr[1];
    newArr[3] = arr[2];
    // for(let i = 0; i < arr.length; i++) {
    //     if(arr[i] === undefined) continue;
    //     newArr[i+1] = arr[i];
    // }
    return newArr;
}

console.log(`\nResult after using analogUnshift v2 [${analogUnshiftV2(defaultArr4, arbitraryValue2)}]`);

/* ------------------------------------------------------------------------------- */





const defaultArr5 = [1,2,3];
const concatArr1 = [4,5,6];

function analogConcatV2(arr, conArr) {
    arr.length += conArr.length;
    arr[3] = conArr[0];
    arr[4] = conArr[1];
    arr[5] = conArr[2];
    // for(let i = 0; i < conArr.length; i++) {
    //     arr[arr.length - 1 - i] = conArr[conArr.length - 1 - i];
    // }
    return arr;
}

console.log(`\nResult after using analogConcat v2 [${analogConcatV2(defaultArr5, concatArr1)}]`);

/* 
Вопросы:

*/