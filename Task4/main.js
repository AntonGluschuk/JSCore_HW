/*
    Запросите у пользователя радиус окружности
    и выведите площадь такой окружности.
*/

// Formula for evaluate area of circle - A = PI*r**2

let radiusOfCircle = prompt("Input radius of circle:");

if(isNaN(radiusOfCircle)) {
    alert("This is not a number");
} else if (radiusOfCircle === null || radiusOfCircle === '') {
    alert("You click Esc/Cancel or input an empty string, please try again.");
} else {    
    let areaOfCircle = Math.PI*Math.pow(Math.abs(radiusOfCircle), 2);
    if(isNaN(areaOfCircle) || areaOfCircle === 0) {
        alert("You enter invalid values");
    } else {
        alert(`Area of your circle is: ${areaOfCircle}`);
    }    
}

/*
 Вопросы:
  
*/