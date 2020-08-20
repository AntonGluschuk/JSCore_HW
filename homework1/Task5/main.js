/*
    Запросите у пользователя расстояние в км между двумя городами
    и за сколько часов он хочет добраться. Посчитайте скорость,
    с которой необходимо двигаться, чтобы успеть вовремя.
*/

// Formula for speed - speed = distance / time

let distance = +prompt("Enter distance in km between cities A and B:");
let travelTime = +prompt("Enter time in hr for travel:");

if(isNaN(distance) || isNaN(travelTime)) {
    alert("You enter invalid values, please try again");
} else if (distance === 0 || travelTime === 0) {
    alert("You enter invalid values, please try again");
} else if (distance < 0 || travelTime < 0) {
    alert("You input negative number, please try again");
} else {
    let travelSpeed = distance / travelTime;    
    alert(`Move with ${travelSpeed} km/hr if you want to arrive at the city B on time!`);        
}

/*
 Вопросы:
  1. Возможно ли сократить количество проверок?
*/