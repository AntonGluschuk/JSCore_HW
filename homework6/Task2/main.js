/* 
     Математический тренажер
    Напишите приложение, которое помогает пользвателю
    натренироваться в простых математических операциях
    сложение/вычитание/деление для чисел от 10 до 100,
    и умножение для чисел от 2 до 30). При заходе на страницу
    пользователю генерируется математическое выражение.
    Пользователь должен ввести результат в поле ввода
    и нажать на кнопку "Проверить". Если все верно
    - генерируется новое выражение, а пользователь получает
    сообщение "Все верно".

    Входные данные:
    Число - решение математического выражения

    Выходные данные:
    Строка - "A операция В = "

    Строка - "Все верно" в случае правильного решения

    Строка - "Подумай еще" в случае неправильного решения
*/

const spt = document.getElementById('spt') // Получение тега script по id
const formExp = document.createElement('form'); // Создание елемента form
spt.before(formExp); // Размещение формы перед тегом script
formExp.insertAdjacentHTML("afterbegin", '<label id="label-qst" for="qst-input"></label><br>'); // Добавление в форму html-строки с тегом label в начало
formExp.insertAdjacentHTML("beforeend", '<input type="text" id="qst-input" onblur="this.value=\'\'" name="qst-input"><br>'); // Добавление тега input перед концом тега form с полем для ввода текста
formExp.insertAdjacentHTML("beforeend", '<input type="submit" id="sbm-answer" value="Check">'); // Добавление в форму перед закрывающимся тегом, input тега для отправки текста на проверку
const labelExp = document.getElementById('label-qst'); // Получение тега label по id
const inputAnswer = document.getElementById('qst-input'); // Получение тега input type=text по id
const submitAnswer = document.getElementById('sbm-answer'); // Получение тега input type=submit по id
const arbitraryOperator = generateOperator(); // Получение случайного оператора из (+,-,*,/)
const [firstNum, secondNum] = generateNums(arbitraryOperator); // Получение двух случайных чисел для будущего выражения и их присвоение с помощъю spread оператора двум переменным
const result = Math.floor(calculateResult(firstNum, secondNum, arbitraryOperator)); // Получение программно рассчитанного результата выражения и сохранение в переменную
let checkValue = true; // Создание boolean переменной для проверки правильности ввода ответа

function getArbitraryNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min); // Функция принимает в качестве аргументов 2 числа и возвращает округлённое в меньшую сторону, случайное число из диапазона этих 2 чисел
}

function generateOperator() {
    const getOperator = getArbitraryNum(0, 4);
    if(getOperator === 0) {
        return '+';
    }
    if(getOperator === 1) {
        return '-';                 // Функция сохраняет в переменной случайное число от 0 до 3 и на основе него с помощью конструкции if возращает соответствующий оператор в ввиде строки
    }
    if(getOperator === 2) {
        return '*';
    }
    if(getOperator === 3) {
        return '/';
    }
}

function generateNums(oper) {    
    if(oper === '*') {
        return [getArbitraryNum(2, 31), getArbitraryNum(2, 31)]; // Функция принимает в качестве аргумента оператор и на основе него возвращает 2 числа (по условию нам для умножения нужны цифры от 2 до 30 для всех остальных операторов от 10 до 100)
    } else {
        return [getArbitraryNum(10, 101), getArbitraryNum(10, 101)];
    }
}

function calculateResult(fNum, SNum, oper) {
    if(oper === '+') {
        return fNum + SNum;
    }
    if(oper === '-') {
        return fNum - SNum; // Функция рассчитывает и возвращает результат математического выражения в зависимости от полученных в качестве аргументов (двух чисел и оператора который нужно применить к ним)
    }
    if(oper === '*') {
        return fNum * SNum;
    }
    if(oper === '/') {
        return fNum / SNum;
    }
}

labelExp.innerHTML = `${firstNum} ${arbitraryOperator} ${secondNum} =`; // Добавление во внутрь тега label строкового шаблона чтобы получить мат. выражение вида (число оператор число =)

inputAnswer.addEventListener('change', event => {
    if(event.target.value != result) {
        checkValue = false;    
        alert('Think about it again'); // Прослушивание события change для тега input type=text: если пользователь ввёл что-либо отличное от ожидаемого решения мат. выражения то, изменить булевую переменную на false и вывести на экран сообщение "Подумай ещё"
    } else {
        checkValue = true; // Иначе оставить проверочную переменную как есть
    }        
})

submitAnswer.addEventListener('click', event => {     
    if(!checkValue) {
        event.preventDefault(); // Прослушивание события click на теге input type=submit (Кнопка Check(проверить введёный ответ пользователя)) если проверочная переменная НЕ true то, запретить отправку формы(ничего не делать при нажатии на кнопку Check)
    } else {
        alert('Correct'); // Иначе вывести на экран сообщение "Верно"
    }    
})

/* 
Вопросы:

*/