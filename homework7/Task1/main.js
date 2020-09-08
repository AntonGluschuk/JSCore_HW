/* 
    Morse

    You have to write a simple Morse code decoder. While the
    Morse code is now mostly superceded by voice and digital
    data communication channels, it still has its use in some
    applications around the world. The Morse code encodes
    every character as a sequence of "dots" and "dashes".
    For example, the letter A is coded as ·−, letter Q is
    coded as −−·−, and digit 1 is coded as ·−−−−. The Morse
    code is case-insensitive, traditionally capital letters
    are used. When the message is written in Morse code,
    a single space is used to separate the character codes
    and 3 spaces are used to separate words. For example, the
    message HEY JUDE in Morse code is
    ···· · −·−− ·−−− ··− −·· ·.
    NOTE: Extra spaces before or after the code have no
    meaning and should be ignored.
    In addition to letters, digits and some punctuation,
    there are some special service codes, the most notorious
    of those is the international distress signal SOS
    (that was first issued by Titanic), that is coded as
    ···−−−···. These special codes are treated as single
    special characters, and usually are transmitted as
    separate words.
    Your task is to implement a function that would take
    the morse code as input and return a decoded
    human-readable string.

    For example:
    decodeMorse('.... . -.--   .--- ..- -.. .')
    //should return "HEY JUDE"
    NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.
*/
import morse from "./morse.js"

function decodeMorse(morseCode) {
  const morseWords = morseCode.trim().split('   '); // Получив строку морзе убираем пробелы по краям и сплитим по 3 пробелам - получаем массив зашифрованных слов  
  const decodedChars = Object.keys(morse); // Получаем массив ключей (расшифрованные символы) из импортированного обьекта morse
  const codedChars = Object.values(morse); // Получаем массив значений (зашифрованные символы) из импортированного обьекта morse
  const morseWordChars = []; // Инициализируем массив для каждого символа полученных слов
  const decodeString = []; // Инициализируем массив расшифрованной строки

  morseWords.forEach(morseWord => {
    morseWordChars.push(morseWord.split(' ')); // Проходимся по массиву слов и каждое слово сплитим по пробелам, после чего пушим в массив morseWordChars - получаем двумерный массив где сохраняются массивы по символьно разбитых слов
  });
  
  morseWordChars.map(charsArr => {
    for(let i = 0; i < charsArr.length; i++) {
      let charId = codedChars.indexOf(charsArr[i]); // С помощью функции map берём для каждого массива по символьно разбитых слов, используем проход циклом фор и сохраняем во временной переменной индекс зашифрованного символа, взятый из массива значений обьекта morse
      charsArr[i] = decodedChars[charId]; // Заменяем каждый символ на расшифрованную его версию, подставляя в массив ключей обьекта morse - найденный индекс, получаем двумерный массив где внутри каждый массив это расшифрованное по символьно разбитое слово
    }
  })  

  morseWordChars.forEach(morseWord => {
    let word = morseWord.join('');    
    decodeString.push(word.toUpperCase()); // Соединяем каждое слово, приводим к верхнему регистру и пушим в массив расшифрованной строки
  })
 
  return decodeString.join(' '); // С помощью join соединяем каждое слово разделяя их пробелами и возвращаем строкой 
   

}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
console.log(decodeMorse('...---...'));

// ASCII . is ALT+46
// ASCII - is ALT+45

/* 
Вопросы:

*/