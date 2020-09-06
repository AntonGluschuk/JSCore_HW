/* 
    Напишите приложение, которое раз в секунду добавляет
    на экран квадрат случайного цвета. Выделите на экране
    область размером 600 на 600. Разделите область на
    квадраты по 60 пикселей. Раз в секунду в одной из
    областей(случайно) появляется квадрат случайного цвета.
    Когда все области(100 квадратов - 100 секунд) заполнятся
    - закончите выполнение и выведите текст "Заполнение
    завершено" в заголовок второго уровня. Каждый новый
    квадрат должен ложиться в отдельное, незанятое другим
    квадратом, место.

    Входные данные:
    Нет

    Выходные данные:
    Плитка
*/

function getNewTable() { // Функция создания таблицы на 100 клеток
    const table = document.createElement('table'); // Создание елемента таблицы
    const spt = document.getElementById('spt'); // Получение тега script 
    table.className = 'container'; // Добавление класса container к таблице с заготовленными css свойствами
    spt.before(table);  // Добавление таблицы в body перед тегом script

    for(let i = 0; i < 10; i++) {  
        let tr = document.createElement('tr');              
        table.append(tr); // Создание и добавление tr елемента (строчка в таблице) в конец таблицы и так 10 раз
        for(let j = 0; j < 10; j++) {
            let td = document.createElement('td'); 
            tr.append(td); // Одновременно с добавлением строчек в таблицу, происходит создание td елемента (клеточки) и добавление 10 таких клеток в каждую строчку
        }    
    }
    makeAllSquaresColored(table); // вызов функции закрашивания клеток и передача в качестве аргумента созданной таблицы   
}

function makeAllSquaresColored(tbl) { // Функция закрашивания 100 клеток таблицы случайным образом в течении 100 секунд   
    const arrOfSquares = Array.from(document.querySelectorAll('td')); // Получение всех клеток ввиде колекции и преобразование их в массив для того чтобы получить доступ к методам массива (на колекции они бы не сработали, для понимания смотреть дальнейшее решение)

    const timerd = setInterval(() => { // Сохранение в переменную метода setInterval который каждую секунду (1000 мс) выполняет следующие действия: 
        const randomColors = []; // Инициализация массива случайных цветов (нужно для rgb записи)        
        for(let i = 0; i < 3; i++) {
            randomColors.push(Math.floor(Math.random() * 256)); // Генерация 3-ёх случайных чисел от 0 до 255 (и добавление их в массив цветов (3 числа нужны для rgb записи ))
        }   
        const [red, green, blue] = randomColors; // С помощью деструктурирующего присваивания - размещение каждого цвета в 3 переменных
        const randomSquare = Math.floor(Math.random() * arrOfSquares.length); // получение случайного целого числа (в дальнейшем позиции клетки в массиве) от 0 до длины массива arrOfSquare(изначально 100)
        const randomSqr = arrOfSquares[randomSquare]; // Сохранение в переменную клетки из массива arrOfSquare по случайно сгенерированной позиции в строчке 45
        randomSqr.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // Закрашивание полученной клетки случайно сгенерированным цветом
        arrOfSquares.splice(randomSquare, 1); // Вырезание закрашенной клетки из массива arrOfSquare (для того чтобы при следующем срабатывании функции setInterval искало среди оставшихся клеток `минус закрашенная` - это освобождает от написания ненужных проверок
    }, 1000); // Выполнение кода функции setInterval каждую секунду.
    
    setTimeout(() => { 
        clearInterval(timerd); 
        const heading = document.createElement('h2');
        heading.innerHTML = 'Filling completed'; 
        tbl.before(heading); // Создание заголовка второго уровня и добавление его в DOM перед table елементом

    }, 100000); // Срабатывание функции setTimeout и остановка функции setInterval через 100 секунд (таким образом писать проверку на остаток клеток в массиве arrOfSquare не нужно (через 100 секунд ровно 100 клеток будет закрашено не больше не меньше))
}

getNewTable(); // Получение таблицы на 100 клеток и их закрашивания случайным цветом в течении 100 секунд

/* 
Вопросы:

*/