/*
    Ремонт
    
    Ваш любимый дядя – директор фирмы, которая делает
    евроремонты в офисах. В связи с финансово-экономическим кризисом,
    дядюшка решил оптимизировать свое предприятие.

    Давно ходят слухи, что бригадир в дядюшкиной фирме
    покупает лишнее количество стройматериалов, а остатки
    использует для отделки своей новой дачи. Ваш дядя
    заинтересовался, сколько в действительности банок краски
    необходимо для покраски стен в офисе длиной L метров, шириной – W
    и высотой – H, если одной банки хватает на 16м2, а размерами дверей
    и окон можно пренебречь? Заказов много, поэтому дядя попросил написать
    программу, которая будет все это считать.


    Входные данные
    Пользователь вводит с клавиатуры три натуральных
    числа L, W, H – длину, ширину и высоту офиса в метрах
    соответственно, каждое из которых не превышает 1000.


    Выходные данные
    Вывести на экран одно целое число – минимальное
    количество банок краски, необходимых для покраски стен в офисе.
*/

const paintPot = 16; // 16 square meters = one paint pot
const physicalValues = [];
const officeLength = +prompt('Enter length of the office in meters');
physicalValues.push(officeLength);
const officeWidth = +prompt('Enter width of the office in meters');
physicalValues.push(officeWidth);
const officeHeight = +prompt('Enter height of the office in meters');
physicalValues.push(officeHeight);

function checkValidValues() {
    for(let i = 0; i < physicalValues.length; i++) {
        if(physicalValues[i] > 1000 || physicalValues[i] <= 0 || isNaN(physicalValues[i])) {
            return 'You enter invalid values, please try again.'; 
        }
    }
}

function calcMinPaintPots() {    
    if(checkValidValues()) {
        return alert(checkValidValues());
    } else {
        const areaOfWalls = (officeWidth * 2 + officeLength * 2) * officeHeight;
        console.log(areaOfWalls);
        const minimalPaintPots = areaOfWalls / paintPot;        
        console.log(minimalPaintPots);
        return alert(`You need minimum ${minimalPaintPots} paint pots for office walls`);
    }    
}

calcMinPaintPots();

/*
Вопросы:
    1. Как можно решить по другому?
*/