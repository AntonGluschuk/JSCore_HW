/* 
    Визуализация и вывод данных по случайным пользователям
    Нужно сделать запрос на 1000 пользователей с https://randomuser.me/ API - готово
    Подключить https://www.chartjs.org/ API для генерации диаграмм - готово
    Реализовать меню выбора, в котором есть следующие пункты: - готово
    1)	Возраст; - при нажатии выводит диаграмму от самого младшего до самого старшего пользователя; - готово
    2)	Пол; - при нажатии выводит диаграмму количества мужчин/женщин; - готово
    3)	Имя: - при нажатии выводит диаграмму людей с одинаковыми именами; - готово
    4)	Фамилия: - при нажатии выводит диаграмму со статистикой от самой короткой фамилии до самой длинной; - готово
    5)	Год Рождения: - при нажатии выводим сортированную диаграмму по годам рождения; - готово 
    Если окажется мало: реализовать динамически заполняющуюся диаграмму получая по одному пользователю с заданным интервалом времени (даже не знаю возможно ли такое 😊)
*/


const link = 'https://randomuser.me/api/?results=1000';

function getUsers(url) {
    fetch(url)
    .then(response => response.json())
    .then(users => {        
        // let newChart = getAgesChart(users.results);         
        // getChart(newChart);
        // let newChart = getGenderChart(users.results);
        // getChart(newChart);
        // let newChart = getSameNamesChart(users.results);
        // getChart(newChart);    
        // let newChart = getSurNamesLengthChart(users.results);
        // getChart(newChart);
        let newChart = getBirthYearChart(users.results);
        getChart(newChart);            
    })
    .catch(error => console.log(error));
}

function getAgesChart(persons) {
    let agesData = {};    
    let ages = persons.map(person => person.dob.age);
    
    ages.forEach(age => {
        if(agesData[`${age} years`]) {
            agesData[`${age} years`] += 1;
        } else {
            agesData[`${age} years`] = 1;
        }    
    });
        
    const sortedKeys = Object.keys(agesData).sort();    
    const sortedValuesByKeys = sortedKeys.map(value => agesData[value]);    
    const colorEachValue = sortedValuesByKeys.map(() => `#${Math.random().toString(16).slice(2,8)}`);

    const agesChart = {
        type: 'bar',
        data: {
            labels: sortedKeys,           
            datasets: [{
                label: 'Users',
                backgroundColor: colorEachValue,
                borderColor: colorEachValue,                
                data: sortedValuesByKeys
            }]
        },        
        options: {} 
    }
    
    return agesChart;
}

function getGenderChart(persons) {    
    let genderData = {
        males: 0,
        females: 0
    };

    persons.map(person => person.gender === 'male' ? genderData['males'] += 1 : genderData['females'] += 1);
    
    const genderChart = {
        type: 'pie',
        data: {
            labels: Object.keys(genderData),           
            datasets: [{
                label: 'Users',
                backgroundColor: ['#5257e8', '#f14040'],
                borderColor: ['#5257e8', '#f14040'],                
                data: Object.values(genderData)
            }]
        },        
        options: {}
    }

    return genderChart;
}

function getSameNamesChart(persons) {
    let fNamesData = {};
    let fNames = persons.map(person => person.name.first);

    fNames.forEach(fName => {
        if(fNamesData[fName]) {
            fNamesData[fName] += 1;
        } else {
            fNamesData[fName] = 1;
        }
    }); 

    let filteredFNamesData = Object.fromEntries(
        Object.entries(fNamesData).filter(([name, count]) => count > 2)
    );    
    let randomColorValues = Object.values(filteredFNamesData).map(() => `#${Math.random().toString(16).slice(2,8)}`); 
    
    const fNamesChart = {
        type: 'line',
        data: {
            labels: Object.keys(filteredFNamesData),           
            datasets: [{
                label: 'Duplicate names',
                pointBackgroundColor: randomColorValues,
                borderColor: randomColorValues,         
                data: Object.values(filteredFNamesData)
            }]
        },        
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 2                        
                    }
                }]
            }
        }
    }
    
    return fNamesChart;
}

function getSurNamesLengthChart(persons) {    
    let surNamesLengthData = {};
    let surNamesLength = persons.map(person => person.name.last.length);

    surNamesLength.forEach(surNameL => {
        if(surNamesLengthData[`${surNameL} chars`]) {
            surNamesLengthData[`${surNameL} chars`] += 1;
        } else {
            surNamesLengthData[`${surNameL} chars`] = 1;
        }
    })    
    
    const sortedKeys = Object.keys(surNamesLengthData).sort((prevValue, nextValue) => parseInt(prevValue) - parseInt(nextValue));    
    const sortedKeyValues = sortedKeys.map(value => surNamesLengthData[value]);    
    const surNameColorValues = sortedKeyValues.map(() => `#${Math.random().toString(16).slice(2,8)}`);   
    
    const surNamesChart = {
        type: 'radar',
        data: {
            labels: sortedKeys,           
            datasets: [{
                label: 'Surnames',
                pointBackgroundColor: surNameColorValues,
                borderColor: surNameColorValues,                        
                data: sortedKeyValues
            }]
        },        
        options: {
            scale: {
                ticks: {
                    // min: 2,
                    // max: 15                    
                    // stepSize: 0.5
                }
            }
        }
    }

    return surNamesChart;
}

function getBirthYearChart(persons) { 
    let birthYearsData = {}; 
    let formatedBirthYears = [];      
    let birthYears = persons.map(person => person.dob.date.match(/\d{4}/g));
    birthYears.forEach(bYear => formatedBirthYears.push(...bYear));     
    
    formatedBirthYears.map(fBYear => {
        if(birthYearsData[fBYear]) {
            birthYearsData[fBYear] += 1;
        } else {
            birthYearsData[fBYear] = 1;
        }
    })
    
    const sortedKeys = Object.keys(birthYearsData).sort();
    const sortedKeyValues = sortedKeys.map(value => birthYearsData[value]);
    const randomValueColors = sortedKeyValues.map(() => `#${Math.random().toString(16).slice(2,8)}`);

    const birthYearChart = {
        type: 'bar',
        data: {
            labels: sortedKeys,           
            datasets: [{
                label: 'Birth year users',
                backgroundColor: randomValueColors,
                borderColor: randomValueColors,                
                data: sortedKeyValues
            }]
        },        
        options: {}
    }
    
    return birthYearChart;
}

function getChart(nChart) {    
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, nChart);
    return chart;
}

getUsers(link);




