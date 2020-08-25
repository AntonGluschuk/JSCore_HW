/* 
    Запросить у пользователя его возраст и определить,
    кем он является: ребенком (0–12), подростком (12–18),
    взрослым (18_60) или пенсионером (60– ...).
*/

const age = +prompt('Enter your age and I`ll tell who you are:');

switch(true){
    case (isNaN(age) || !Number.isInteger(age)) : {
        alert('Invalid values.');
        break;
    }
    case (age > 0 && age <= 12) : {
        alert('You are a child!');
        break;
    }
    case (age > 12 && age <= 18) : {
        alert('You are a teenager!');
        break;
    }
    case (age > 18 && age <= 60) : {
        alert('You are an adult!');
        break;
    }
    case (age > 60) : {
        alert('You are an older person!');
        break;
    }
    default: {
        alert('You enter wrong values.');
    }   
}

/* 
Вопросы:

*/