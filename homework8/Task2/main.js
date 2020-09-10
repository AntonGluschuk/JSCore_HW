/* 
    Сделайте слайдер с возможностью смены изображений:
    Кнопка вперед(следующее изображение)
    Кнопка назад(предыдущее изображение)

*/

const allPictures = Array.from(document.querySelectorAll('img')); // Получаем массив всех картинок и колекции img тегов
const prevButton = document.getElementById('prev'); // получаем кнопку Назад
const nextButton = document.getElementById('next'); // получаем кнопку Вперёд
let currentPicture = ''; // Инициализируем переменную для текущей активной картинки

setInterval(() => {
    allPictures.forEach(picture => {
        picture.outerHTML.includes('inline') ? currentPicture = picture : null; // С помощъю функции setInterval кажду 1 мс проходимся по массиву картинок и заносим в переменную currentPicture текущую картинку с свойством display: inline; (ту которая отображена)
    })    
}, 1);

nextButton.addEventListener('click', e => { // Вешаем обработчик кликов на кнопку Вперёд
    let currentIndx = allPictures.indexOf(currentPicture); // Узнаём и сохраняем индекс активной картинки 
    if(currentIndx === allPictures.length - 1) {      // Если индекс равен концу массива картинок то:
        allPictures[currentIndx].setAttribute('style', 'display: none;'); // Скрываем текущую картинку с помощью установки атрибута style="display: none;"
        allPictures[0].setAttribute('style', 'display: inline;'); // Устанавливаем атрибут для отображения первой картинки массива
    } else {
        allPictures[currentIndx].setAttribute('style', 'display: none;'); // Иначе скрываем текущую картинку
        allPictures[++currentIndx].setAttribute('style', 'display: inline;'); // Переходим на следующую картинку в массиве и отображаем её
    }    
})

prevButton.addEventListener('click', e => {  // Вешаем обработчик кликов на кнопку Назад  
    let currentIndx = allPictures.indexOf(currentPicture); // Узнаём и сохраняем индекс активной картинки 
    if(currentIndx === 0) {             // Если индекс равен 0 (началу массива) картинок то:
        allPictures[currentIndx].setAttribute('style', 'display: none;'); // Скрываем текущую картинку
        allPictures[allPictures.length - 1].setAttribute('style', 'display: inline;'); // Отображаем картинку с конца массива (последнюю так как идём назад)
    } else {
        allPictures[currentIndx].setAttribute('style', 'display: none;'); // Иначе скрываем текущую картинку
        allPictures[--currentIndx].setAttribute('style', 'display: inline;'); // Переходим на предыдущую картинку в массиве и отображаем её
    }    
})

/* 
Вопросы:

*/