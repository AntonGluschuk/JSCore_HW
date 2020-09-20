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

    makeAgesChart(persons) {    
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
            title: 'Min/Max age diagram',    
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
    
    makeGenderChart(persons) {
        if(persons.length === 0) return;               
        let genderData = {
            males: 0,
            females: 0
        };
    
        persons.map(person => person.gender === 'male' ? genderData['males'] += 1 : genderData['females'] += 1);
        
        const genderChart = {
            title: 'Gender diagram',
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

    makeDuplicateNamesChart(persons) {
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
            Object.entries(fNamesData).filter(([name, count]) => count > 1)
        );    
        let randomColorValues = Object.values(filteredFNamesData).map(() => `#${Math.random().toString(16).slice(2,8)}`); 
        
        const fNamesChart = {
            title: 'Duplicate names diagram',
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
            options: {}
        }
        
        return fNamesChart;
    }

    makeSurnamesLengthChart(persons) {    
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
            title: 'Surnames length diagram',
            type: 'line',
            data: {
                labels: sortedKeys,           
                datasets: [{
                    label: 'Surnames',
                    pointBackgroundColor: surNameColorValues,
                    borderColor: surNameColorValues,                        
                    data: sortedKeyValues
                }]
            },        
            options: {}
        }
    
        return surNamesChart;
    }

    makeBirthYearChart(persons) { 
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
            title: 'Birth year diagram',
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
}