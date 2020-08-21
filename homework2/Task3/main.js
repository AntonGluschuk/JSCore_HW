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

const ticket = +prompt('Enter ticket number between (100000 and 999999) :');

if(ticket < 10**5 || ticket > 10**6 || isNaN(ticket)) {
    alert('Our of range, please try again.');
} else {
    const handleTicket = ticket.toString();
    console.log(handleTicket);
    const firstThreeDigits = +handleTicket.slice(0, 3);
    console.log(firstThreeDigits);
    const lastThreeDigits = +handleTicket.slice(3, 6);
    console.log(lastThreeDigits);
}

/*
Вопросы:

*/