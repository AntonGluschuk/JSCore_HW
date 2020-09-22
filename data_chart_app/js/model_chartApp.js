export default class ChartAppModel{
    url = 'https://randomuser.me/api/?results=1000';

    constructor(usersMediator) {  
        this.usersMediator = usersMediator; // конструктор ChartAppModel получает метод посредник и сохраняет его у себя.                   
    }

    loadUsers() {
        fetch(this.url)
            .then(resp => resp.json())
            .then(data => this.usersMediator(data.results)); // приходим сюда после вызова getUsers из ChartAppController получаем 1000 юзеров по заданному url, парсим их и передаём методу посреднику из ChartAppController (usersMediator) (возвращаемся в ChartAppController чтобы отследить нить выполнения)
    }

    makeAgesChart(persons) {    // Метод создания диаграммы возврастов
        const agesData = {};       // Инициализируем пустой объект
        const ages = persons.map(person => person.dob.age);  // из полученного объекта users из ChartAppController мы достаём все свойства age и сохраняем их в массив
        
        ages.forEach(age => {
            if(agesData[`${age} years`]) {
                agesData[`${age} years`] += 1;    // Проходимся по массиву возрастов и заносим в пустой объект agesData свойства где ключ это возраст а значение количество совпадений
            } else {
                agesData[`${age} years`] = 1;
            }    
        });
            
        const sortedKeys = Object.keys(agesData).sort();    // Получаем отсортированный массив ключей нужный для меток диаграммы
        const sortedValuesByKeys = sortedKeys.map(value => agesData[value]);    // Получаем отсортированные данные по массиву ключей для диаграммы
        const colorEachValue = sortedValuesByKeys.map(() => `#${Math.random().toString(16).slice(2,8)}`); // Получаем массив случайных цветов для каждой единицы данных на диаграмме
    
        const agesChart = {
            title: 'Min/Max age diagram',    
            type: 'bar',
            data: {
                labels: sortedKeys,           
                datasets: [{
                    label: 'Users',
                    backgroundColor: colorEachValue, // Формируем свой вариант объекта-диаграммы где выбираем тип диаграммы, подставляем наши метки, цвета окраски данных и сами данные
                    borderColor: colorEachValue,                
                    data: sortedValuesByKeys
                }]
            },        
            options: {
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Number of users'
                        }
                    }]
                }    
            } 
        }
        
        return agesChart; // Возвращаем готовый объект с диаграммой который передадим методу make... в ChartAppController а тот передаст методу getChart в ChartAppView
    }
    
    makeGenderChart(persons) { // Метод создания диаграммы полов
        if(persons.length === 0) return; // Остановить выполнение метода если длина массива юзеров равна 0 (нужно для того чтобы не отрисовывалась пустая диаграмма полов)               
        const genderData = {
            males: 0, 
            females: 0      // Инициализируем объект genderData где заранее вносим два свойства (мужчины: 0 и женщины: 0)       
        };
    
        persons.map(person => person.gender === 'male' ? genderData.males += 1 : genderData.females += 1); // Проходимся по массиву юзеров и тернарником заносим в объект genderData каждому его свойству количество мужчин и женщин пришедших из запроса
        
        const genderChart = {
            title: 'Gender diagram',
            type: 'pie',
            data: {
                labels: Object.keys(genderData),           // Формируем свой вариант объекта-диаграммы, где заносим метки, данные, цвета и каждому объекту добавляется ещё свойство title для передачи его заголовку в DOM при выводе диаграммы на экран 
                datasets: [{    
                    backgroundColor: ['#5257e8', '#f14040'],
                    borderColor: ['#5257e8', '#f14040'],                
                    data: Object.values(genderData)
                }]
            },        
            options: {}
        }
    
        return genderChart;
    }

    makeDuplicateNamesChart(persons) { // Метод создания диаграммы одинаковых имён
        const fNamesData = {};
        const fNames = persons.map(person => person.name.first);  // Забераем из пришедших данных по юзерам - имена    

        fNames.forEach(fName => {
            if(fNamesData[fName]) {
                fNamesData[fName] += 1;  // Заносим в пустой объект имена как свойства а значением количество их совпадений
            } else {
                fNamesData[fName] = 1;
            }
        }); 
    
        const filteredFNamesData = Object.fromEntries(
            Object.entries(fNamesData).filter(([ , count]) => count > 2) // Формируем новый объект из отфильтрованного массива пар ключ-значение объекта fNamesData где сохраняем только совпавшие имена 
        );    
        
        const fNamesDataset = Object.entries(filteredFNamesData).map(([name, value], index) => {
            return {
                label: name,
                data: [
                    {
                      x: index,                 // Разбиваем filteredFNamesData на массив пар (ключ,значение) и преобразовуем его в массив объектов в формате необходимом для диаграммы bubble
                      y: value,
                      r: 10   
                    }
                ],
                backgroundColor: `#${Math.random().toString(16).slice(2,8)}`
            }
        })
        
        if(fNamesDataset.length === 0) return; // Если сформированный массив пуст то прерываем выполнение метода (необходимо для того чтобы в ChartAppView не создавалась и рендерилась пустая диаграмма)

        const fNamesChart = {
            title: 'Duplicate names diagram',
            type: 'bubble',
            data: {
                labels: [1],           // Формируем свой объект-диаграмму с title для h1 и готовыми объектами в формате необходимом для диаграммы bubble
                datasets: fNamesDataset 
            },        
            options: {
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Number of duplicates'
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Total number of names'
                        }
                    }]
                }
            }
        }        
        
        return fNamesChart;
    }

    makeSurnamesLengthChart(persons) {    // Метод создание диаграммы длин фамилий
        const surNamesLengthData = {};
        const surNamesLength = persons.map(person => person.name.last.length); // Забираем из объекта с 1000 юзерами длину каждой фамилии и помещаем в массив
    
        surNamesLength.forEach(surNameL => {
            if(surNamesLengthData[`${surNameL} chars`]) {
                surNamesLengthData[`${surNameL} chars`] += 1; // Проходимся по каждому елементу массив длин и заполняем объект свойствами (длина символов) и значениями (количество совпадений)
            } else {
                surNamesLengthData[`${surNameL} chars`] = 1;
            }
        })    
        
        const sortedKeys = Object.keys(surNamesLengthData).sort((prevValue, nextValue) => parseInt(prevValue) - parseInt(nextValue)); // Формируем массив отсортированных длин фамилий
        const sortedKeyValues = sortedKeys.map(value => surNamesLengthData[value]);    // Получаем массив значений
        const surNameColorValues = sortedKeyValues.map(() => `#${Math.random().toString(16).slice(2,8)}`);   // Получаем цвета для значений
        
        const surNamesChart = {
            title: 'Surnames length diagram',
            type: 'line',
            data: {
                labels: sortedKeys,           
                datasets: [{
                    label: 'Surnames',
                    pointBackgroundColor: surNameColorValues, // Формируем свой объект-диаграмму где заносим своё свойство title, метки, данные и цвета для них
                    borderColor: surNameColorValues,                        
                    data: sortedKeyValues
                }]
            },        
            options: {
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Number of surnames'
                        }
                    }]
                }
            }
        }
    
        return surNamesChart;
    }

    makeBirthYearChart(persons) { // Метод создания диаграммы годов рождения    
        const birthYearsData = {}; 
        const formatedBirthYears = [];      // Инициализируем пустой объект, и массив отформатированных годов рождения
        persons.map(person => person.dob.date.match(/\d{4}/g)).forEach(bYear => formatedBirthYears.push(...bYear)); // Забираем из пришедшего объекта данных, года рождения в формате 1993-07-20T09:44:18.674Z и с помощъю регулярного выражения сохраняем их в формате 1993 (только год)
        // Так как birthYears у нас это массив массивов, мы проходимся по каждому подмассиву и разворачивая его, пушим в пустой массив formatedBirthYears чтобы получить одномерную версию годов рождения
        
        formatedBirthYears.forEach(fBYear => {
            if(birthYearsData[fBYear]) {
                birthYearsData[fBYear] += 1; // Формируем объект birthYearsData где каждый ключ это год рождения а значение это количество совпадений
            } else {
                birthYearsData[fBYear] = 1;
            }
        })
        
        const sortedKeys = Object.keys(birthYearsData).sort(); // Получаем отсортированный по возрастанию массив ключей
        const sortedKeyValues = sortedKeys.map(value => birthYearsData[value]); // Получаем массив значений по sortedKeys
        const randomValueColors = sortedKeyValues.map(() => `#${Math.random().toString(16).slice(2,8)}`); // Получаем цвета для каждого значения
    
        const birthYearChart = {
            title: 'Birth year diagram',
            type: 'bar',
            data: {
                labels: sortedKeys,           
                datasets: [{
                    label: 'Birth year users',
                    backgroundColor: randomValueColors, // Формируем свой объект-диаграмму со своим title, labels, data и цветами
                    borderColor: randomValueColors,                
                    data: sortedKeyValues
                }]
            },        
            options: {
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Number of users'
                        }
                    }]
                }
            }
        }
        
        return birthYearChart;
    }

    getDataForDynamic(persons) {   // Метод генерации данных для динамического заполнения   
        const agesData = {};    // Инициализируем пустой объект
        const ages = persons.map(person => person.dob.age);  // из полученного объекта users из ChartAppController мы достаём все свойства age и сохраняем их в массив
        
        ages.forEach(age => {
            if(agesData[`${age} years`]) {
                agesData[`${age} years`] += 1;    // Проходимся по массиву возрастов и заносим в пустой объект agesData свойства где ключ это возраст а значение количество совпадений
            } else {
                agesData[`${age} years`] = 1;
            }    
        });
            
        const sortedKeys = Object.keys(agesData).sort();    // Получаем отсортированный массив ключей нужный для меток диаграммы
        const sortedValuesByKeys = sortedKeys.map(value => agesData[value]);    // Получаем отсортированные данные по массиву ключей для диаграммы
        const colorEachValue = sortedValuesByKeys.map(() => `#${Math.random().toString(16).slice(2,8)}`); // Получаем массив случайных цветов для каждой единицы данных на диаграмме
        
        const dataForDynamic = {
            sortedKeys, // Labels
            sortedValuesByKeys, // Data values
            colorEachValue // Colors
        }
        
        return dataForDynamic; // Возвращаем данные объектом
    }

    getDynamicDiagram() { // Метод получения пустой диаграммы для дальнейшего динамического заполнения
        const dynamicDiagram = {
            title: 'Dynamic diagram',    
            type: 'bar',
            data: {
                labels: [],           
                datasets: [{
                    label: 'Users',
                    backgroundColor: [], // Формируем свой вариант объекта-диаграммы где выбираем тип диаграммы, и заносим свой title
                    borderColor: [],                
                    data: []
                }]
            },        
            options: {
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Number of users'
                        }
                    }]
                },
            } 
        }

        return dynamicDiagram;
    }
}