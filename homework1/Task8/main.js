/*
    Пользователь вводит сумму денег в кошельке и цену одной шоколадки.
    Программа выводит сколько шоколадок может купить пользователь и
    сколько сдачи у него останется.
*/

let moneyInPocket = +prompt("Enter amount of money in your pocket:");
let oneChocolatePrice = +prompt("Enter price of one chocolate bar:");

if(moneyInPocket < oneChocolatePrice) {
    alert("Not enough money");
} else if(moneyInPocket === 0 || oneChocolatePrice === 0) {
    alert("You enter invalid values, please try again")
} else if(moneyInPocket < 0 || oneChocolatePrice < 0) {
    alert("You enter negative numbers, please try again")
} else if(isNaN(moneyInPocket) || isNaN(oneChocolatePrice)) {
    alert("You enter invalid values, please try again");
}  else {
    let amountOfChocoBars = moneyInPocket / oneChocolatePrice;
    let moneyChange = moneyInPocket % oneChocolatePrice;   
    alert(`You can buy ${~~amountOfChocoBars} chocolate bars and your change will be: ${moneyChange.toFixed(2)}`);
}

/*
 Вопросы:
  
*/