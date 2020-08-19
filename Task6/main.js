/*
    Реализуйте конвертор валют. Пользователь вводит
    доллары, программа переводит в евро. Курс валюты
    храните в константе.
*/

const euroRate = 0.83;
let amountOfDollars = +prompt("Please enter amount of dollars");
let amountOfEuros = euroRate * amountOfDollars;
if(isNaN(amountOfEuros)) {
    alert("Can't make conversion, you input invalid value");
} else {
    alert(`USD converts into ${Math.abs(amountOfEuros)} EUR`);
}

/*
 Вопросы:
  
*/