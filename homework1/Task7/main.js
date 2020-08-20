/*
    Пользователь указывает объем флешки в Гб.
    Программа должна посчитать сколько файлов
    размером в 820 Мб помещается на флешку
*/

const fileMemory = 820;
const oneGb = 1000;
let flashMemory = +prompt("Enter amount of flash memory in Gb");

if(isNaN(flashMemory) || flashMemory === 0 || flashMemory < 0) {
    alert("You input invalid values, please try again");
} else {
    let amountOfFiles = flashMemory*oneGb/fileMemory;    
    alert(`Amount of files that you can place on this flashdrive: ${~~amountOfFiles}`)        
}

/*
 Вопросы:
  
*/