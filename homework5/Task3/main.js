/* 
    С помощью reduce, перепишите реализацию следующего кода
    
    ['Яблоко', 'Банан', 'Ананас'].map(el=>el[0]);
    ["Я", "Б", "В"]
    ---------------------map-----------------------------
    ['Яблоко', 'Банан', 'Ананас'].filter
                    (el=>el[0].toLowerCase() === 'a')
    ["Ананас"]
    ---------------------filter-----------------------------
    ['Яблоко', 'Банан', 'Ананас'].forEach((el,i,arr) =>
    arr[i] = `${i + 1}: ${el};`)
    ---------------------forEach-----------------------------
*/


/*---------------------AnalogMap-----------------------------*/
const arr = ['Яблоко', 'Банан', 'Ананас'];

const result = arr.reduce((prev, item) => {                
    return [...prev, item[0]];
}, [])

console.log(result);

/*---------------------AnalogFilter-----------------------------*/

const result2 = arr.reduce((prev, item) => {
    if([item[0].toLowerCase() === 'a']) {
        return [item];
    } else {
        return;
    }   
}, arr[0])

console.log(result2);

/*---------------------AnalogForEach-----------------------------*/

arr.reduce((prev, item, index) => {
    console.log(`${index+1}: ${item};`);
}, 0);

/* 
Вопросы:

*/