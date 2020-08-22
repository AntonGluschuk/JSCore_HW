/* 
    Запросить у пользователя год и проверить,
    високосный он или нет. Високосный год либо
    кратен 400, либо кратен 4 и при этом не кратен 100.
*/

const yearCheck = +prompt('Enter a year:');


yearCheck % 400 === 0 || yearCheck 

switch (true) {
    case yearCheck <= 2000 || yearCheck > 3000 || isNaN(yearCheck): {
        alert('Error, try again.');
        break;
    }
    case (yearCheck % 400 === 0): {        
        break;
    }
    default:
        break;
}

/* 
Вопросы:

*/