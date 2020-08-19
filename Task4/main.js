/*
    Запросите у пользователя радиус окружности
    и выведите площадь такой окружности.
*/

// Formula for evaluate area of circle - A = PI*r**2

let radiusOfCircle = prompt("Input radius of circle:");

if(isNaN(radiusOfCircle)) {
    alert("This is not a number");
} else if (radiusOfCircle === null || radiusOfCircle === '') {
    alert("You click Esc or send an empty string, please try again.");
} else {    
    let areaOfCircle = Math.PI*Math.pow(Math.abs(radiusOfCircle), 2);
    alert(`Area of your circle is: ${areaOfCircle}`);
}

/*
 Вопросы:
  
*/