/*
    Запросите у пользователя длину стороны квадрата
    и выведите периметр такого квадрата.
*/

// Formula for evaluate square perimeter - P = 4*a

let squareSide = prompt("Write a length of square side:", "");

if(isNaN(squareSide)) {
    alert(`Excuse me, how I must evaluate square perimeter from this: ${squareSide}?`);
} else if(squareSide === null || squareSide === "") {
    alert("Please stop clicking Esc or sending empty string");
} else {
    let squarePerimeter = 4 * (squareSide * -1); // or = Math.pow(Math.abs(squareSide), 4)
    alert(`Perimeter of the square is: ${squarePerimeter}`);
}


/*
 Вопросы:
  
*/