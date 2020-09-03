/* 
    Создать html-страницу со светофором и кнопкой,
    которая переключает светофор на следующий цвет.
*/

const colors = ['#fc0f03', '#ff9700', '#1cfc03'];
const defaultColor = '#8b8b8b';
const spans = document.querySelectorAll('span');
const button = document.getElementById('button');

let count = 0;

button.addEventListener('click', function () {     
    switch (true) {
        case count === 1:
            spans[1].style.backgroundColor = colors[1];
            spans[0].style.backgroundColor = defaultColor;
            spans[2].style.backgroundColor = defaultColor;      
            break;
        case count === 2:
            spans[2].style.backgroundColor = colors[2];
            spans[0].style.backgroundColor = defaultColor;
            spans[1].style.backgroundColor = defaultColor;            
            break;
        case count === 0:
            spans[0].style.backgroundColor = colors[0];
            spans[1].style.backgroundColor = defaultColor;
            spans[2].style.backgroundColor = defaultColor;            
            break;           
    }
    count === 2 ? count = 0 : count++;        
 })


/* 
Вопросы:

*/
