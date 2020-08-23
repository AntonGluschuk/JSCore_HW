/* 
    Запросить у пользователя сумму покупки и вывести сумму
    к оплате со скидкой: от 200 до 300 – скидка будет 3%,
    от 300 до 500 – 5%, от 500 и выше – 7%.
*/

const purchaseAmount = +prompt('Enter total purchase amount:');

switch (true) {
    case isNaN(purchaseAmount) || purchaseAmount <= 0:
        alert('You enter invalid valuse, please try again.');
        break;
    case purchaseAmount >= 200 && purchaseAmount < 300: {
        let payableAmount = purchaseAmount - ((3 / 100) * purchaseAmount);
        alert(`Your got 3% discount, you have to pay ${payableAmount} UAH`);
        break;   
    }        
    case purchaseAmount >= 300 && purchaseAmount < 500: {
        let payableAmount = purchaseAmount - ((5 / 100) * purchaseAmount);
        alert(`Your got 5% discount, you have to pay ${payableAmount} UAH`);
        break;
    }        
    case purchaseAmount >= 500: {
        let payableAmount = purchaseAmount - ((7 / 100) * purchaseAmount);
        alert(`Your got 7% discount, you have to pay ${payableAmount} UAH`);
        break;
    }        
    default:
        alert(`You do not have any discount, you have to pay ${purchaseAmount} UAH`);
        break;
}

/* 
Вопросы:

*/