/* 
    Визуализация и вывод данных по случайным пользователям
    Нужно сделать запрос на 1000 пользователей с https://randomuser.me/ API
    Подключить https://www.chartjs.org/ API для генерации диаграмм
    Реализовать меню выбора, в котором есть следующие пункты: 
    1)	Возраст; - при нажатии выводит диаграмму от самого младшего до самого старшего пользователя;
    2)	Пол; - при нажатии выводит диаграмму количества мужчин/женщин;
    3)	Имя: - при нажатии выводит диаграмму людей с одинаковыми именами;
    4)	Фамилия: - при нажатии выводит диаграмму со статистикой от самой короткой фамилии до самой длинной;
    5)	Год Рождения: - при нажатии выводим сортированную диаграмму по годам рождения; 
    Если окажется мало: реализовать динамически заполняющуюся диаграмму получая по одному пользователю с заданным интервалом времени (даже не знаю возможно ли такое 😊)
*/

const allData = {};

fetch('https://randomuser.me/api/?results=1000')
    .then(response => response.json())
    .then(users => {
        allData.ages = getAges(users.results);
        console.log(allData.ages);    
        // allData.males = user.gender;
        // allData.names = user.name.first;
        // allData.surnames = user.name.last;
        // allData.birthYears = user.dob.date;        
    })
    .catch(error => console.log(error));



function getAges(persons) {
    let ages = persons.map(person => person.dob.age);    
    return ages.sort((a,b) => a - b);
}

const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['22 years old', '23 years old', '24 years old', '25 years old', '26 years old', '27 years old', '28 years old'],
        datasets: [{
            label: 'Thousand random users',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: allData.ages
        }]
    },
    
    // Configuration options go here
    options: {}
});




