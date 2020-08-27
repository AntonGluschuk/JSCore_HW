/* 
    Count the number of Duplicates
    Write a function that will return the count
    of distinct case-insensitive alphabetic characters
    and numeric digits that occur more than once in the
    input string. The input string can be assumed to
    contain only alphabets (both uppercase and lowercase)
    and numeric digits.

    Example

    "abcde" -> 0 # no characters repeats more than once

    "aabbcde" -> 2 # 'a' and 'b'

    "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)

    "indivisibility" -> 1 # 'i' occurs six times

    "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice

    "aA11" -> 2 # 'a' and '1'

    "ABBA" -> 2 # 'A' and 'B' each occur twice
*/

const someString = prompt('Enter an arbitrary string:');

function countDuplicates(someStr) {
    let lowerStr = someStr.toLowerCase().trim();
    let tempArr = [];
    let duplicatesArr = [];        
    for(let i = 0; i < lowerStr.length; i++) {
        tempArr = lowerStr.split(lowerStr[i]);        
        if(tempArr.length > 2) {
            if(duplicatesArr.includes(lowerStr[i])) {
                duplicatesArr.push(0);
            } else {
                duplicatesArr.push(lowerStr[i]);
            }            
        } else {
            duplicatesArr.push(0);
        }
    } 

    let result = duplicatesArr.filter(elem => elem !== 0);

    return result.length;     
}

if(someString === null || someString === '') {
    alert('You enter invalid values.');
} else {
    alert(`Your string have - ${countDuplicates(someString)} - duplicate(s).`);
}

/* 
Вопросы:
    1. Возможно ли данную задачу решить одинм циклом или вообще без? 
    2. Как отследить пробелы?
*/