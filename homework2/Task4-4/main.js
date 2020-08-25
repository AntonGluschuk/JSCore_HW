/* 
    Запросить у пользователя год и проверить,
    високосный он или нет. Високосный год либо
    кратен 400, либо кратен 4 и при этом не кратен 100.
*/

const yearCheck = +prompt('Enter a year:');

switch (true) {
    case yearCheck <= 0 || isNaN(yearCheck) || !Number.isInteger(yearCheck): {
        alert('Error, try again.');
        break;
    }
    case yearCheck % 400 === 0: { 
        alert('This is a leap year!');       
        break;
    }
    case yearCheck % 4 === 0: {
        yearCheck % 100 === 0 ? alert('This is a regular year.') : alert('This is a leap year!');   
        break;
    }
    default:
        alert('This is a regular year.');
        break;
}

/* 
Вопросы:

*/