/* 
    Сверстайте страницу с палитрой цветов.
    При клике на один из цветов, задний фон всей страницы перекрашивается в этот цвет 
*/

const colors = ['#0a0a0a', '#292b2e', '#374549', '#ae00b6', '#ffbe00', '#fff100', '#ff2d4b',
                '#121417', '#2a3239', '#4b5c5f', '#ee00fe', '#fe005d', '#da0007', '#ff0012',
                '#042dbd', '#4361a2', '#285bde', '#00c5d9', '#007f6c', '#009b46', '#00b36b',
                '#143e8c', '#354d8d', '#5b97fd', '#a9e5e4', '#2bc760', '#00bb40', '#008a3a'];

window.addEventListener('click', function (event) {
    const target = event.target;
    if(target.tagName !== 'TD') {
        return;
    }
    const currentTD = target.dataset.cell;    
    document.body.style.backgroundColor = colors[currentTD];
})

/* 
Вопросы:

*/