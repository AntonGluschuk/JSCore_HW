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
    document.body.insertAdjacentHTML('afterbegin', '<a href="../../index.html">Back</a>') // Добалвение тега a (возврат на страницу со списком задач) в начало body
    makeAllSquaresColored(table); // Вызов функции закрашивания клеток и передача в качестве аргумента созданной таблицы и счётчика   
}

function makeAllSquaresColored(tbl) { // Функция закрашивания 100 клеток таблицы по таймеру и очищения клеток кликом мыши 
    const arrOfSquares = Array.from(document.querySelectorAll('td')); // Получение всех клеток ввиде колекции и преобразование их в массив для того чтобы получить доступ к методам массива (на колекции они бы не сработали, для понимания смотреть дальнейшее решение)    
    const arrOfTrs = Array.from(document.querySelectorAll('tr')); // Получение всех строчек в таблице
    const heading = document.createElement('h2'); // Создание заголовка второго уровня        
    heading.innerHTML = 'Filling completed'; // Добавление в заголовок текста "Заполнение завершено"
    heading.style.display = 'none'; // По умолчанию заголовок не отображается
    const counter = document.createElement('h2'); // Создание счётчика кликов по клеткам
    let num = 0; // Создание переменной для счётчика
    counter.innerHTML = `Clicked squares: ${num}`; // Инициализация вывода количества кликов по клеткам   
    
    tbl.before(heading); // Добавление заголовка перед table елементом
    tbl.before(counter); // Добавление счётчика перед таблицей

    const timerd = setInterval(() => { // Сохранение в переменную номер метода setInterval который каждые пол секунды (500 мс) выполняет следующие действия:        
        const randomSquare = Math.floor(Math.random() * arrOfSquares.length); // получение случайного целого числа (в дальнейшем позиции клетки в массиве) от 0 до длины массива arrOfSquare(изначально 100)                
        const randomSqr = arrOfSquares.splice(randomSquare, 1)[0]; // Вырезание закрашенной клетки из массива arrOfSquare (для того чтобы при следующем срабатывании функции setInterval искало среди оставшихся клеток `минус закрашенная`)       
        randomSqr.style.backgroundColor = `#${Math.random().toString(16).slice(2,8)}`; // Закрашивание полученной клетки случайным цветом
        
        if(arrOfSquares.length == 0) {
            clearInterval(timerd);
            heading.style.display = 'block'; // Если длина массива клеток станет равна нулю значит завершаем выполнение функции timerd(setInterval) и отображаем заголовок с текстом "Заполнение завершено"
        }                   
    }, 500); // Выполнение кода функции setInterval каждые пол секунды.
    
    tbl.addEventListener('click', e => { // Добавление обработчика кликов по таблице                
        if(e.target === tbl || arrOfTrs.includes(e.target) || e.target.style.backgroundColor === '' || arrOfSquares.length == 0) return;  
        
        if(e.target.style.backgroundColor !== '') { 
            e.target.style.backgroundColor = ''; // Если кликнуто по закрашенной клетке, очистить её и увеличить переменную для счётчика на 1
            num++; // Увеличить счётчик кликов на единицу            
            arrOfSquares.splice(0, 0, e.target); // Добавление в массив клеток на первую позицию - клетки которую очистили кликом
            counter.innerHTML = `Clicked squares: ${num}`; // Вывод в елемент количества кликов по клеткам                       
        }    
    });    
}

getNewTable(); // Получение и закрашивание 100 клеток в таблице, пока присутствуют пустые клетки

/* 
Вопросы:

*/