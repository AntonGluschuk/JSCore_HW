/* 
    Реализовать класс, описывающий простой маркер.
    В классе должны быть следующие компоненты:

    ■ поле, которое хранит цвет маркера
    зарезервированные слова);

    ■ поле, которое хранит количество чернил
    в маркере (число с плавающей запятой от 0 до 100);

    ■ метод для печати (метод принимает строку
    и выводит текст соответствующим цветом;
    текст выводится до тех пор, пока в маркере есть чернила;
    один не пробельный символ – это 0,5% чернил в маркере).

    *Реализовать класс, описывающий заправляющийся маркер,
    унаследовав его от простого маркера и добавив метод
    для заправки маркера. Продемонстрировать работу
    написанных методов
*/

class Marker {    

    constructor(color, inkAmount){ // Инициализируем класс Маркер
        this.color = color;    // Сохраняем цвет маркера
        this.inkAmount = inkAmount >= 0 && inkAmount < 100 ? inkAmount : null;  // Сохраняем количество чернил + проверка чтобы количество чернил было указано от 0 до 100  
        this.charInk = inkAmount * 0.005;  // Количество чернил нужное для 1 символа                         
    }   

    printAnything(arbitraryString) { // Создаём метод printAnything который принимает любую строку:        
        txtAr.style.color = this.color;   // Назначаем цвет текста textarea елементу       
        let prevLengthString = 0;          // Инициализируем переменную для предыдущей длины строки
        if(arbitraryString.length > prevLengthString) { // Если длина новой строки больше предыдущей то:            
            this.inkAmount -= this.charInk;             // От общего количества чернил отнять 0.5%
            this.inkAmount = +(this.inkAmount.toFixed(3)); // Привести чернила к 3 знакам после запятой (нужно для точного подсчёта и нормального вывода в консоль)
            prevLengthString = arbitraryString.length; // Присвоить текущую длину строки переменной предыдущей длины строки
        }
        if(this.inkAmount < 0) { 
            this.inkAmount = 0; // Если чернил меньше нуля то присвоить им 0 (нужно для адекватного исчерпывания чернил в маркере)
            return;
        }        
        return arbitraryString; // Возвращаем строку пройдя все тело функции
    }
}

class RefillingMarker extends Marker {  // Инициализируем класс ЗаправляющийсяМаркер и наследуем его от класса Маркер
    refillMarker(refillAmount){        // За счёт ключевого слова extends мы наследуем все свойства и методы класса родителя (Маркера) и если мы пропишим их с this - то this будет ссылатся уже на этот класс (RefillingMarker)
        this.inkAmount += refillAmount; // Этот класс получает дополнительный метод refillMarker который получает сумму на которую нужно заправить маркер и:
    }                                   // в this.inkAmount где this указывает на свойство inkAmount этого класса (RefillingMarker) мы добавляем новое количество чернил
}

const redMarker = new Marker('red', 1); // Создаём экземпляр класса Маркер (красного цвета, чернил = 1)
const refilledBlueMarker = new RefillingMarker('blue', 1); // Создаём экземпляр класса ЗаправляющийсяМаркер (синего цвета, чернил = 1)
txtAr.addEventListener('keydown', event => { // Вешаем обработчик нажатий клавиш на клавиатуре   
    totalInk.innerHTML = `Ink left: ${refilledBlueMarker.inkAmount}`;
    if(refilledBlueMarker.inkAmount === 0) event.preventDefault(); // Если в маркере закончились чернила, запретить отправку событий (Пока экземпляр Маркера нужно задавать явно)   
    event.key === ' ' ? null : refilledBlueMarker.printAnything(event.target.value); // Отправлять в метод класса printAnything все что печатается в textarea елементе    
})

refBtn.addEventListener('click', e => { // Вешаем обработчик кликов на кнопку Заправить маркер (сейчас работает только когда явно указан экземпляр класса ЗаправляющийсяМаркер)   
    refilledBlueMarker.refillMarker(+refAm.value); // Вызываем метод класса (ЗаправляющийсяМаркер) для пополнения чернил и передаём значение преобразование в число (так как input возвращает string)
    totalInk.innerHTML = `Ink left: ${refilledBlueMarker.inkAmount}`;
    refAm.value = '';     // Очищаем поле input        
})



/* 
Вопросы:

*/