/*
    Запросите у пользователя длину стороны квадрата
    и выведите периметр такого квадрата.
*/

// Formula for evaluate square perimeter - P = 4*a

let squareSide = prompt("Write a length of square side:", "");

if(isNaN(squareSide)) {
    alert(`Excuse me, how I must evaluate square perimeter from this: ${squareSide}?`);
} else if(squareSide === null || squareSide === "") {
    alert("Please stop clicking Esc/Cancel or sending empty string");
} else {
    let squarePerimeter = 4 * squareSide; // or = Math.pow(squareSide, 4)
    if(isNaN(squarePerimeter) || squarePerimeter === 0) {
        alert("You enter invalid values");
    } else {
        alert(`Perimeter of the square is: ${Math.abs(squarePerimeter)}`);
    }    
}    


/*
 Вопросы:
  
*/