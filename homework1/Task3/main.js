/*
    Запросите у пользователя длину стороны квадрата
    и выведите периметр такого квадрата.
*/

// Formula for evaluate square perimeter - P = 4*a

let squareSide = +prompt("Write a length of square side:");

if(isNaN(squareSide) || squareSide === 0 || squareSide < 0) {
    alert("You send invalid values, please try again");
} else {
    let squarePerimeter = 4 * squareSide;   
    alert(`Perimeter of the square is: ${squarePerimeter}`);        
}

/*
 Вопросы:
  
*/