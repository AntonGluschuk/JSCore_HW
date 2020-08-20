/*
    Реализуйте конвертор валют. Пользователь вводит
    доллары, программа переводит в евро. Курс валюты
    храните в константе.
*/

const euroRate = 0.83;
let amountOfDollars = +prompt("Please enter amount of USD and we convert it to EUR:");
let amountOfEuros = euroRate * amountOfDollars;
if(isNaN(amountOfEuros) || amountOfEuros === 0 || amountOfEuros < 0) {
    alert("Can't make conversion, you input invalid value");
} else {
    alert(`EUR: ${amountOfEuros}`);
}

/*
 Вопросы:
  
*/