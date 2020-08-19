/*
    Запросите у пользователя год его рождения, посчитайте,
    сколько ему лет и выведите результат. 
    Текущий год укажите в коде как константу.
*/

const currentYear = 2020;
let birthYear = +prompt("Write your year of birth, and I will tell your age!", "");

if (isNaN(birthYear)) {
    alert("Don't even try to input something except integer!");
} else {
    let yourAge = currentYear - birthYear;
    alert(`Your age is: ${yourAge} am I right?`);    
}
