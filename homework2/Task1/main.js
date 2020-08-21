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

const paintPot = 16;
const officeLength = Math.abs(+prompt('Enter length of the office in meters'));
const officeWidth = Math.abs(+prompt('Enter width of the office in meters'));
const officeHeight = Math.abs(+prompt('Enter height of the office in meters'));

const tempCheck = officeLength * officeWidth * officeHeight;

if(officeHeight > 1000 || officeWidth > 1000 || officeLength > 1000) {
    alert('You went out of limit, enter each number between 0 and 1000');
} else if (isNaN(tempCheck) || tempCheck <=0 ) {
    alert('You enter invalid values.');
} else {
    const areaOfWalls = (officeWidth*2 + officeLength*2) * officeHeight;
    console.log(areaOfWalls);
    const minimalPaintPots = areaOfWalls / paintPot;
    alert(`You need minimum ${minimalPaintPots} paint pots for office walls`);
}

/*
Вопросы:

*/