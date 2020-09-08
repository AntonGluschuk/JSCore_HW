/* 
     Написать функцию, которая преобразует названия cssстилей
     с дефисом в название в СamelСase стиле: font-size
     в fontSize, background-color в backgroundColor,
     text-align в textAlign.
*/

function transformToCC(arbitraryStr) { // Функция получает строку css-стилей с дефисом
    const [firstWord, ...otherWords] = arbitraryStr.split('-'); // Полученную строку разделяем на первое слово и массив остальных слов (если они есть в наличии)
    let camelCaseStr = ''; // Инициализируем пустую строку для CamelCase версии
    
    if(otherWords.length === 0) return firstWord;    // Если массив других слов пустой то мы просто возвращаем первое слово

    camelCaseStr += firstWord; // Иначе мы конкатенируем в пустую строку первое слово
    
    for(let i = 0; i < otherWords.length; i++) { // Проходимся по массиву остальных слов
        let temp = otherWords[i].split(''); // Сплитуем каждое слово в временную переменную (получаем массив по буквенно разбитого слова)         
        temp[0] = temp[0].toUpperCase(); // Заменяем первую букву на такую же но только в верхнем регистре
        let temp2 = temp.join(''); // Соединяем изменённый массив букв в слова (строки)         
        camelCaseStr += temp2; // Конкатенируем к первому слову, слова написанные с заглавной буквы
    }

    return camelCaseStr; // Возвращаем название css-стиля в CamelCase стиле
}

console.log(transformToCC('border-top-radius')); 

/* 
Вопросы:

*/