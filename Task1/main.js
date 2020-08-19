/*
    Запросите у пользователя его имя и выведите в ответ:
    «Привет, его имя!».
*/ 

let userName = prompt("What's your name?");
if(userName === null || userName === "") {
    alert("Stop clicking Esc OR sending empty string!");
} else {
    alert(`Привет, ${userName}!`);
}
