/*
    Золотой песок
    
    Сотрудники завода по производству золотого песка
    из воздуха решили поправить свое финансовое положение.
    Они пробрались на склад завода, где хранился золотой
    песок трех видов. Один килограмм золотого песка первого
    вида они смогли бы продать за A1 рублей, второго вида
    – за A2 рублей, а третьего вида – за A3 рублей.
    Так получилось, что у сотрудников оказалось с собой
    только три емкости: первая была рассчитана на B1
    килограмм груза, вторая на B2 килограмм, а третья
    на B3 килограмм. Им надо было заполнить полностью
    все емкости таким образом, чтобы получить как можно
    больше денег за весь песок. При заполнении емкостей
    нельзя смешивать песок разных видов, то есть, в одну
    емкость помещать более одного вида песка, и заполнять
    емкости песком так, чтобы один вид песка находился
    более чем в одной емкости.
    Требуется написать программу, которая определяет,
    за какую сумму предприимчивые сотрудники смогут
    продать весь песок в случае наилучшего для себя
    заполнения емкостей песком.

    Входные данные
    Пользователь вводит с клавиатуры 6 натуральных чисел
    A1, A2, A3, B1, B2, B3. Все числа не превосходят 100.

    Выходные данные
    Вывести на экран единственное целое число – сумму
    в рублях, которую смогут сотрудники заработать в
    случае наилучшего для себя заполнения емкостей песком.
*/

const allSand = [];
const allContainers = [];
const sandSellProceeds = [];
let validation = true;
let generalProceeds = 0;

for(let i = 0; i < 3; i++) {
    allSand[i] = +prompt(`Enter #${i + 1} price for kg/sand:`);
    allContainers[i] = +prompt(`Enter #${i + 1} volume for the sand containers:`);
    if(isNaN(allSand[i]) || allSand[i] <= 0 || allSand[i] > 100 || !Number.isInteger(allSand[i])) {
        validation = false;
    } else if(isNaN(allContainers[i]) || allContainers[i] <= 0 || allContainers[i] > 100 || !Number.isInteger(allContainers[i])) {
        validation = false;
    }        
}

for(let i = 0; i < allSand.length; i++ ) {
    for(let j = 0; j < allSand.length; j++) {
        if(allSand[i] > allSand[j + 1]) {
            let temp = allSand[j];
            allSand[j] = allSand[j + 1];
            allSand[j + 1] = temp; 
        }
    }
}   

for(let i = 0; i < allContainers.length; i++ ) {
    for(let j = 0; j < allContainers.length; j++) {
        if(allContainers[i] > allContainers[j + 1]) {
            let temp = allContainers[j];
            allContainers[j] = allContainers[j + 1];
            allContainers[j + 1] = temp; 
        }
    }
}

for(let i = 0; i < 3; i++) {
    sandSellProceeds[i] = allSand[i] * allContainers[i];
    generalProceeds += sandSellProceeds[i];      
}

if(!validation) {
    alert('Received invalid values, cannot make any calculations, please try again.');
} else {    
    alert(`Workers earned ${~~generalProceeds} RUB after selling all sand containers.`);
}

/*
Вопросы:
    1. Как можно решить альтернативным способом?
    2. Как можно дополнительно оптимизировать?
*/