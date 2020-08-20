/*
    Запросите у пользователя год его рождения, посчитайте,
    сколько ему лет и выведите результат. 
    Текущий год укажите в коде как константу.
*/

const currentYear = 2020;
let birthYear = +prompt("Write year of birth and I will tell your age!");

if (isNaN(birthYear) || birthYear === 0 || birthYear < 0) {
    alert("Don't even try to input something except positive number!");
} else {
    let yourAge = currentYear - birthYear;    
    alert(`Your age is: ${yourAge} year(s) am I right?`);        
}

/*
 Вопросы:
   
*/