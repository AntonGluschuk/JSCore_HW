/*
    Запросите у пользователя радиус окружности
    и выведите площадь такой окружности.
*/

// Formula for evaluate area of circle - A = PI*r**2

const pi = 3.14;
let radiusOfCircle = +prompt("Input radius of circle:");

if(isNaN(radiusOfCircle) || radiusOfCircle === 0 || radiusOfCircle < 0) {
    alert("You enter invalid values, please try again.");
} else {    
    let areaOfCircle = pi*radiusOfCircle**2;    
    alert(`Area of your circle is: ${areaOfCircle}`);        
}

/*
 Вопросы:
  
*/