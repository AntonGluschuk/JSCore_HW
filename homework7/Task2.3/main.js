/* 
    Написать функцию, которая получает url
    и выводит подробную информацию о нем.
    Пример ввода: url “https://career.softserveinc.com/en-us/learning-and-certification/formats-2/”
    Пример вывода: “протокол: https, домен: career.softserveinc.com, путь: en-us/learning-and-certification/formats-2/”.
*/

function getUrlInfo(someUrl) { // Функция получает произвольный url в виде строки
    let [protocol, otherPart] = someUrl.split('://'); // Разделяем строку на протокол и остальную часть url       
    const domain = otherPart.match(/\.\w+\//); // С помощью регулярного выражения отделяем домен    
    const correctDomain = domain[0].split('/').join(''); // Убираем лишние символы для получения чистого домена        
    const parts = otherPart.split(/\.\w+\//); // Разделяем остальную часть url на домен(без окончания) и путь        
    const fullDomain = parts[0] + correctDomain; // Получаем полный домен
    const fullPath = parts[1]; // Получаем путь    
    return `"Protocol: ${protocol}, Domain: ${fullDomain}, Path: ${fullPath}"`; // Возвращаем строковый шаблон содержащий отдельно Протокол,Домен и Путь
}

console.log(getUrlInfo('https://career.softserveinc.com/en-us/learning-and-certification/formats-2/'));

/* 
Вопросы:

*/