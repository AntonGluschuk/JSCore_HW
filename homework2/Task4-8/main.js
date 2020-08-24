/* 
    Запросить у пользователя длину окружности
    и периметр квадрата. Определить, может ли такая
    окружность поместиться в указанный квадрат.
*/

const pi = 3.14;
const circumferenceLength = +prompt('Enter circumference length:');
const squarePerimeter = +prompt('Enter square perimeter:');
const circleDiagonal = circumferenceLength / pi;
const squareDiagonal = squarePerimeter * Math.sqrt(2) / 4;

circleDiagonal <= squareDiagonal ? alert('Circumference can fit in square.') : alert('Circumference cannot fit in square.');

/* 
Вопросы:

*/