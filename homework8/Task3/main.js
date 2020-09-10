/* 
    Count IP Addresses
    Implement a function that receives two IPv4 addresses,
    and returns the number of addresses between them
    (including the first one, excluding the last one).

    All inputs will be valid IPv4 addresses in the form
    of strings. The last address will always be greater
    than the first one.

    Examples

    ipsBetween("10.0.0.0", "10.0.0.50")  ===   50

    ipsBetween("10.0.0.0", "10.0.1.0")   ===  256

    ipsBetween("20.0.0.10", "20.0.1.0")  ===  246


*/

function ipsBetween(firstIp, secondIp) { // Функция принимает два айпи адреса в виде строк
    const firstAllOctets = firstIp.split('.').map(el => +el); // Сплитуем первый айпи адрес по точкам и с помощъю map-а преобразуем каждый елемент в число 
    const secondAllOctets = secondIp.split('.').map(el => +el); // Сплитуем второй айпи адрес по точкам и с помощъю map-а преобразуем каждый елемент в число        
    const numberOfIps = []; // Инициализируем массив разницы полученых айпи адресов
    
    for(let i = 0; i < 4; i++) {   
        let result = secondAllOctets[i] - firstAllOctets[i]; // Проходимся циклом и от каждого елемента второго айпи адреса отнимаем каждый елемент первого (так как по условию второй всегда больше)
        numberOfIps.push(result); // Заносим в массив разницу каждого октета
    }

    const transformIps = numberOfIps.map((el, indx) => {    // Проходимся по массиву разниц и в зависимости от индекса(октета(1-ой из 4 позиций айпи адреса)): 
        if(indx === 0) {
           return el * 2**24; // Если первый октет то 2 в степени 24 бит
        }
        if(indx === 1) {
           return el * 2**16; // Если второй октет то 2 в степени 16 бит
        }
        if(indx === 2) {
           return el * 2**8; // Если третий октет то 2 в степени 8 бит
        }
        if(indx === 3) {
           return el;
        }
    }) 
    
    const numBetween = transformIps.reduce((acc, elem) => { // С помощъю reduce складываем все октеты разниц и получаем доступное количество ip-адресов 
        return acc + elem;
    })

    return numBetween; // Функция возвращает количество доступных ip-адресов
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50")); 
console.log(ipsBetween("10.0.0.0", "10.0.1.0"));
console.log(ipsBetween("20.0.0.10", "20.0.1.0"));

/* 
Вопросы:

*/