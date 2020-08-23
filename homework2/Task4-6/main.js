/* 
    Написать конвертор валют. Пользователь вводит
    количество USD, выбирает, в какую валюту хочет
    перевести: EUR, UAH или GBP, и получает в ответ
    соответствующую сумму.
*/

const eurRate = 0.85;
const uahRate = 27.44;
const gbpRate = 0.76;
const amountOfUSD = +prompt('Input amount of USD you want to exchange:');
const currencyToExchange = prompt('Input currency you want to receive:');

switch (true) {
    case isNaN(amountOfUSD) || amountOfUSD <= 0:
        alert('Invalid values, please try again.');
        break;
    case currencyToExchange === 'EUR':        
        alert(`After exchange you will get ${amountOfUSD * eurRate} EUR.`);
        break;
    case currencyToExchange === 'UAH':        
        alert(`After exchange you will get ${amountOfUSD * uahRate} UAH.`);
        break;
    case currencyToExchange === 'GBP':        
        alert(`After exchange you will get ${amountOfUSD * gbpRate} GBP.`);
        break;    
    default:
        alert('Invalid values, please try again.');
        break;
}

/* 
Вопросы:

*/