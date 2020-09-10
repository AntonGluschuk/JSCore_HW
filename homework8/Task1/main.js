/* 
    Добавьте в задание “Плитка” обработчик клика по одной
    цветной плитке.
    После клика она пропадает и ее место становится пустым
    и доступным для повторной генерации плитки в этом месте.

    После клика вверху окна счетчик “откликаных”
    пользователем плиток увеличивается на 1.

    временную задержку между генерацией плитки уменьшите
    до 0.5секунды.

    Генерация прекращается только тогда, когда все
    100 плиток сгенерируются.


*/

function getNewTable() { // Функция создания таблицы на 100 клеток
    const table = document.createElement('table'); // Создание елемента таблицы         
    table.className = 'container'; // Добавление класса container к таблице с заготовленными css свойствами    

    for(let i = 0; i < 10; i++) {  
        let tr = document.createElement('tr');              
        table.append(tr); // Создание и добавление tr елемента (строчка в таблице) в конец таблицы и так 10 раз
        for(let j = 0; j < 10; j++) {
            let td = document.createElement('td'); 
            tr.append(td); // Одновременно с добавлением строчек в таблицу, происходит создание td елемента (клеточки) и добавление 10 таких клеток в каждую строчку
        }    
    }

    document.body.prepend(table);  // Добавление таблицы в начало body   

    makeAllSquaresColored(table); // Вызов функции закрашивания клеток и передача в качестве аргумента созданной таблицы и счётчика   
}

function makeAllSquaresColored(tbl) { // Функция закрашивания 100 клеток таблицы по таймеру и очищения клеток кликом мыши 
    const arrOfSquares = Array.from(document.querySelectorAll('td')); // Получение всех клеток ввиде колекции и преобразование их в массив для того чтобы получить доступ к методам массива (на колекции они бы не сработали, для понимания смотреть дальнейшее решение)    
    const heading = document.createElement('h2'); // Создание заголовка второго уровня    
    heading.innerHTML = 'Filling completed'; // Добавление в заголовок текста "Заполнение завершено"
    heading.style.display = 'none'; // По умолчанию заголовок не отображается
    const counter = document.createElement('h2'); // Создание счётчика кликов по клеткам
    let num = 0; // Создание переменной для счётчика   
    
    tbl.before(heading); // Добавление заголовка перед table елементом
    tbl.before(counter); // Добавление счётчика перед таблицей

    const timerd = setInterval(() => { // Сохранение в переменную номер метода setInterval который каждые пол секунды (500 мс) выполняет следующие действия:                 
        const randomColors = []; // Инициализация массива случайных цветов (нужно для rgb записи)        
        for(let i = 0; i < 3; i++) {
            randomColors.push(Math.floor(Math.random() * 256)); // Генерация 3-ёх случайных чисел от 0 до 255 (и добавление их в массив цветов (3 числа нужны для rgb записи ))
        }   
        const [red, green, blue] = randomColors; // Размещение цветов по переменным 
        const randomSquare = Math.floor(Math.random() * arrOfSquares.length); // получение случайного целого числа (в дальнейшем позиции клетки в массиве) от 0 до длины массива arrOfSquare(изначально 100)                
        const randomSqr = arrOfSquares[randomSquare]; // Сохранение в переменную - клетки из массива arrOfSquare по случайно сгенерированной позиции         
        randomSqr.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // Закрашивание полученной клетки случайным цветом
        arrOfSquares.splice(randomSquare, 1); // Вырезание закрашенной клетки из массива arrOfSquare (для того чтобы при следующем срабатывании функции setInterval искало среди оставшихся клеток `минус закрашенная`
        if(arrOfSquares.length == 0) {
            clearInterval(timerd);
            heading.style.display = 'block'; // Если длина массива клеток станет равна нулю значит завершаем выполнение функции timerd(setInterval) и отображаем заголовок с текстом "Заполнение завершено"
        }                   
    }, 500); // Выполнение кода функции setInterval каждые пол секунды.
    
    tbl.addEventListener('click', e => { // Добавление обработчика кликов по таблице
        if(arrOfSquares.length == 0) {
            e.preventDefault();                // Если массив клеток пуст значит клик ничего не делает
        } else {
            if(e.target.style.backgroundColor !== '') { 
                e.target.style.backgroundColor = ''; // Если кликнуто по закрашенной клетке, очистить её и увеличить переменную для счётчика на 1
                num++;
            } else {
                e.preventDefault(); // Иначе если клетка пустая клик ничего не делает         
            } 
            arrOfSquares.splice(0, 0, e.target); // Добавление в массив клеток на первую позицию - клетки которую очистили кликом
            counter.innerHTML = `Clicked squares: ${num}`; // Вывод в елемент счётчик количества кликов по клеткам           
        }    
    });    
}

getNewTable(); // Получение и закрашивание 100 клеток в таблице, пока присутствуют пустые клетки

/* 
Вопросы:

*/