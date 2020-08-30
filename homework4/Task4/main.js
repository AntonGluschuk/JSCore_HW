/* 
    Сверстайте страницу с палитрой цветов.
    При клике на один из цветов, задний фон всей страницы перекрашивается в этот цвет 
*/

window.addEventListener('click', function (event) {
    const target = event.target;
    if(target.tagName !== 'TD') {
        return;
    }
    const color = target.style.color;
    document.body.style.backgroundColor = color;
})

/* 
Вопросы:

*/