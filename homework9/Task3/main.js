/* 
    Реализовать класс, описывающий окружность.
    В классе должны быть следующие компоненты:

    ■ поле, хранящее радиус окружности;

    ■ get-свойство, возвращающее радиус окружности;

    ■ set-свойство, устанавливающее радиус окружности;

    ■ get-свойство, возвращающее диаметр окружности;

    ■ метод, вычисляющий площадь окружности;

    ■ метод, вычисляющий длину окружности.

    Продемонстрировать работу свойств и методов.


*/

class Circle {
    _circleRadius = 0;  // Создаём класс Круг и инициализируем два protected классовых поля: радиусКруга и числоПИ 
    _pi = 3.14;    

    constructor(circleRadius) {
        this._circleRadius = circleRadius; // Конструктор класса принимает радиус круга и сохраняет его в protected переменной
    }

    set сircleRadius(value) {
        this._circleRadius = value;  // Инициализируем сеттер который принимает значение и изменяет радиусКруга
    }

    get сircleRadius() {
        return this._circleRadius; // Инициализируем геттер который возвращает текущей радиусКруга
    }

    get сircleDiameter() {
        return 2*this._circleRadius; // Инициализируем геттер который возращает расчитанный диаметр круга
    }

    
    calcCircleArea() {        
        return this._pi*this._circleRadius**2; // Инициализируем метод расчёта площади круга
    }

    calcCirclePerimeter() {
        return 2*this._pi*this._circleRadius; // Инициализируем метод расчёта длины круга
    }
}

const arbitraryCircle = new Circle(5); // Создаём экземпляр класса Circle

console.log(arbitraryCircle.сircleRadius); // Проверяем геттер радиуса и выводим в консоль
arbitraryCircle.сircleRadius = 10; // Проверяем сеттер радиуса и изменяем его на 5
console.log(arbitraryCircle.сircleRadius); // Проверяем геттер радиуса после изменения сеттером и выводим в консоль
console.log(arbitraryCircle.сircleDiameter); // Проверяем геттер диаметра и выводим в консоль
console.log(arbitraryCircle.calcCircleArea()); // Проверяем метод получения площади круга и выводим результат
console.log(arbitraryCircle.calcCirclePerimeter()); // Проверяем метод получения длины (периметр) круга и выводим результат

/* 
Вопросы:

*/