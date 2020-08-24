/* 
    Запросить дату (день, месяц, год) и вывести следующую
    за ней дату. Учтите возможность перехода на следующий
    месяц, год, а также високосный год
*/

let arbitraryDay = +prompt('Enter arbitrary day:');
let arbitraryMonth = +prompt('Enter arbitrary month:');
let arbitraryYear = +prompt('Enter arbitrary year:');

const regularYear = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}

const leapYear = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}

const daysInCurrentMonth = checkCurrentMonth(arbitraryMonth);

function checkLeapYear(year) {    
    if(year % 400 === 0) { 
        return leapYear;        
    } else if (year % 4 === 0) {
        if(year % 100 === 0) {
            return regularYear;
        } else {
            return leapYear;
        }
    } else {
        return regularYear;
    }
}

function checkCurrentMonth(month) {
    let currentYear = checkLeapYear(arbitraryYear);         
    if(month in currentYear) {
        return currentYear[month];
    } else { 
        return;
    }
}

function checkValidDate(day, month, year) {
    if(day <= 0 || day > daysInCurrentMonth || isNaN(day)) {
        return 'You enter invalid day value';
    } else if(month <= 0 || month > 12 || isNaN(month)) {
        return 'You enter invalid month value';
    } else if(year <= 0 || isNaN(year)) {
        return 'You enter invalid year value';
    }
}

if(checkValidDate(arbitraryDay, arbitraryMonth, arbitraryYear)) {
    alert(checkValidDate(arbitraryDay, arbitraryMonth, arbitraryYear));
} else if(arbitraryDay === daysInCurrentMonth && arbitraryMonth === 12) {
    alert(`Next day will be ${1}/${1}/${++arbitraryYear}`);
} else if(arbitraryDay === daysInCurrentMonth) {
    alert(`Next day will be ${1}/${++arbitraryMonth}/${arbitraryYear}`);
} else {
    alert(`Next day will be ${++arbitraryDay}/${arbitraryMonth}/${arbitraryYear}`);
}

/* 
Вопросы:
    1. Как можно по другому решить эту задачу?
*/