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

const oneKiloSand1 = +prompt('Enter price (between 70 and 100) in RUB for elite 1 kg/sand:');
const oneKiloSand2 = +prompt('Enter price (between 30 and 69) in RUB for medium 1 kg/sand:');
const oneKiloSand3 = +prompt('Enter price (between 10 and 29) in RUB for normal 1 kg/sand:');
const sandContainer1 = +prompt('Enter volume (max 80-100kg) of the elite sand container in kg:');
const sandContainer2 = +prompt('Enter volume (max 35-50kg) of the medium sand container in kg:');
const sandContainer3 = +prompt('Enter volume (max 10-25kg) of the normal sand container in kg:');

function proceedsEliteContainer(oneKiloEliteSand, eliteSandContainer) {
    if(oneKiloEliteSand < 70 || oneKiloEliteSand > 100) {
        return alert('You enter wrong price for elite sand, please try again.');
    } else if (eliteSandContainer < 80 || eliteSandContainer > 100) {
        return alert('You enter wrong volume for elite container, please try again.');
    } else {
        return eliteSandContainer * oneKiloEliteSand;
    }
}

function proceedsMediumContainer(oneKiloMediumSand, mediumSandContainer) {
    if(oneKiloMediumSand < 30 || oneKiloMediumSand > 69) {
        return alert('You enter wrong price for medium sand, please try again.');
    } else if (mediumSandContainer < 35 || mediumSandContainer > 50) {
        return alert('You enter wrong volume for medium container, please try again.');
    } else {
        return mediumSandContainer * oneKiloMediumSand;
    }
}

function proceedsNormalContainer(oneKiloNormalSand, normalSandContainer) {
    if(oneKiloNormalSand < 10 || oneKiloNormalSand > 29) {
        return alert('You enter wrong price for normal sand, please try again.');
    } else if (normalSandContainer < 10 || normalSandContainer > 25) {
        return alert('You enter wrong volume for normal container, please try again.');
    } else {
        return normalSandContainer * oneKiloNormalSand;
    }
}

const generalProceeds = 
    proceedsEliteContainer(oneKiloSand1, sandContainer1)
  + proceedsMediumContainer(oneKiloSand2, sandContainer2)
  + proceedsNormalContainer(oneKiloSand3, sandContainer3);
  
if(isNaN(generalProceeds) || generalProceeds <= 0) {
    alert('Received invalid values, cannot make any calculations, please try again.');
} else {
    alert(`Workers earned ${~~generalProceeds} RUB after selling all sand containers.`);
}

/*
Вопросы:
    1. Как можно решить альтернативным способом?
    2. Как можно дополнительно оптимизировать?
*/