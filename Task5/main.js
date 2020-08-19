/*
    Запросите у пользователя расстояние в км между двумя городами
    и за сколько часов он хочет добраться. Посчитайте скорость,
    с которой необходимо двигаться, чтобы успеть вовремя.
*/

// Formula for speed - speed = distance / time

let distance = prompt("Enter distance in km between cities A and B:");
let travelTime = prompt("Enter time in hr for travel:");

if(isNaN(distance) || isNaN(travelTime)) {
    alert("You enter invalid values, please try again!");
} else if (distance === null || travelTime === null) {
    alert("You press Esc or Cancel!");
} else if (distance === '' || travelTime === '') {
    alert("You input an empty string!");
} else {
    let travelSpeed = distance / travelTime;
    if(travelSpeed === Infinity || travelSpeed === 0 || isNaN(travelSpeed)) {
        alert("You enter invalid values, please try again!");
    } else {
        alert(`Move with ${Math.abs(travelSpeed)} km/hr if you want to arrive at the city B on time!`);
    }    
}

/*
 Вопросы:
  
*/