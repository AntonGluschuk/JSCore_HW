/*
    Запросите у пользователя год его рождения, посчитайте,
    сколько ему лет и выведите результат. 
    Текущий год укажите в коде как константу.
*/

const currentYear = 2020;
let birthYear = prompt("Write year of birth and I will tell your age!", "");

if (isNaN(birthYear)) {
    alert("Don't even try to input something except integer!");
} else if(birthYear === " ") {
    alert("Don't even try to input whitespace!");        
} else if(birthYear === null || birthYear === "") {
    alert("Please stop clicking Esc/Cancel or sending empty string");
} else {
    let yourAge = currentYear - Number(Math.abs(birthYear));
    if(isNaN(yourAge) || yourAge === 0) {
        alert("You enter invalid value, try again!");
    } else {
        alert(`Your age is: ${yourAge} year(s) am I right?`);
    }    
}

/*
 Вопросы:
  Как добавить проверку на множество пробелов?
*/