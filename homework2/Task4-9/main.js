/* 
    Задать пользователю 3 вопроса, в каждом вопросе
    по 3 варианта ответа. За  каждый правильный
    ответ начисляется 2 балла. После вопросов выведите
    пользователю количество набранных баллов.
*/

import { ANSWER1, ANSWER2, ANSWER3 } from "./answers.js";

alert('Wanna take part in an interesting quiz? \nInstructions: On each question you have to choose answer, input 1 or 2 or 3 and click OK. \nLet`s go!')

let points = 0;

const question1 = +prompt('How many planets in the solar system? 1) 3; 2) 12; 3) 8;');
question1 === ANSWER1 ? alert(`Correct you have ${points += 2} points`) : alert('Wrong, keep trying!');

const question2 = +prompt('What radius of the Sun? 1) 332123 km; 2) 696340 km; 3) 132577 km;');
question2 === ANSWER2 ? alert(`Correct you have ${points += 2} points`) : alert('Wrong, keep trying!');

const question3 = +prompt('What is the speed of light? 1) 296765678 m/s; 2) 299792458 m/s; 3) 291762672 m/s;')
question3 === ANSWER3 ? alert(`Correct you have ${points += 2} points`) : alert('Wrong, keep trying!');

points === 6 ? alert(`You answered on all questions and you scored all ${points} points, congratulations!.`) :
               alert(`You tried your best and scored ${points} points, better luck next time!`);

/* 
Вопросы:

*/