/*    
    Счастливый билет

    Вы пользуетесь общественным транспортом?
    Вероятно, вы расплачивались за проезд и получали
    билет с номером. Счастливым билетом называют такой
    билет с шестизначным номером, где сумма первых трех
    цифр равна сумме последних трех. Т.е. билет
    с номером 385916 – счастливый, т.к. 3+8+5=9+1+6.
    Вам требуется написать программу, которая проверяет
    счастливость билета.

    Входные данные
    Пользователь вводит одно целое число N (0 ≤ N < 10 ** 6).

    Выходные данные
    Нужно вывести «YES», если билет с
    номером N счастливый и «NO» в противном случае.
*/

let firstSum = 0;
let secondSum = 0;
const ticket = +prompt('Enter ticket number between (100000 and 999999) :');

if(ticket < 10**5 || ticket > 10**6 || isNaN(ticket) || !Number.isInteger(ticket)) {
    alert('Our of range, please try again.');
} else {
    const handleTicket = ticket.toString().split('');    
    const firstThreeDigits = handleTicket.slice(0, 3);    
    const lastThreeDigits = handleTicket.slice(3, 6);
    
    for(let i = 0; i < firstThreeDigits.length; i++) {
        firstSum = firstSum + +firstThreeDigits[i];
    }
    for(let i = 0; i < lastThreeDigits.length; i++) {
        secondSum = secondSum + +lastThreeDigits[i];
    }
    // for(let num of firstThreeDigits) {firstSum += +num};
    // for(let num of lastThreeDigits) {secondSum += +num};
    
    firstSum === secondSum ? alert('YES') : alert('NO');
}

/*
Вопросы:
    1. Как решить не используя преобразования в строку и массив?
*/