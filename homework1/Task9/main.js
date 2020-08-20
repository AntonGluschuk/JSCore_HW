/*
    Запросите у пользователя трехзначное число
    и выведите его задом наперед. Для решения
    задачи вам понадобится оператор % (остаток от деления).
*/

let num = +prompt("Please enter a three digit number:");

if(num > 999 || num === 0 || num < 0 || isNaN(num)) {
    alert("You click Esc/Cancel or enter invalid value");
} else {
    let oneDigitNum = num % 10;
    let twoDigitNum = ((num - oneDigitNum) / 10) % 10;
    let threeDigitNum = (num - twoDigitNum * 10 - oneDigitNum) / 100;
    let reversedNum = oneDigitNum + "" + twoDigitNum + "" + threeDigitNum;
    alert(`Reversed number: ${reversedNum}`);
}

/*
 Вопросы:
  
*/