/* 
    Создать html-страницу с кнопкой Открыть
    и модальным окном. На модальном окне должен быть текст
    и кнопка Закрыть. Изначально модальное окно не
    отображается. При клике на кнопку Открыть появляется
    модальное окно, на кнопку Закрыть – исчезает.
*/

const modalArea = document.getElementById('mod_area'); // Получаем область которой перекроем основной контент страницы
const modalWin = document.getElementById('mod_win'); // Получаем модальное окно
const openBtn = document.getElementById('open_btn'); // Получаем кнопку открыть
const closeBtn = document.getElementById('close_btn'); // Получаем кнопку закрыть

openBtn.addEventListener('click', event => { // Прослушиваем события кликов кнопки открыть, если пришло событие отображаем модальную область и модальное окно
    if(event) {
        modalArea.style.display = 'block';
        modalWin.style.display = 'flex';
    }
})

closeBtn.addEventListener('click', event => { // Прослушиваем события кликов кнопки закрыть, если пришло событие скрываем модальную область и модальное окно
    if(event) {
        modalArea.style.display = 'none';
        modalWin.style.display = 'none';
    } 
})

/* 
Вопросы:

*/