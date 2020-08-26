/* 
    Deoxyribonucleic acid (DNA) is a chemical found
    in the nucleus of cells and carries the "instructions"
    for the development and functioning of living organisms.

    If you want to know more http://en.wikipedia.org/wiki/DNA
    
    In DNA strings, symbols "A" and "T" are complements of
    each other, as "C" and "G". You have function with one
    side of the DNA (string, except for Haskell); you need
    to get the other complementary side. DNA strand is never
    empty or there is no DNA at all (again, except for
    Haskell).

    More similar exercise are found here
    http://rosalind.info/problems/list-view/ (source)

    DNA_strand ("ATTGC") # return "TAACG"

    DNA_strand ("GTAT") # return "CATA"
*/

const firstPartDNA = prompt('Enter first part of DNA:');

function getDNASecondPart(firstDNA) {
    let noSpacefirstPartDNA = firstDNA.trim();
    let secondPartDNA = '';
    
    for(let i = 0; i < noSpacefirstPartDNA.length; i++) {
        
        if (noSpacefirstPartDNA.codePointAt(i) === 65) {
            secondPartDNA += String.fromCodePoint(84);
        } else if (noSpacefirstPartDNA.codePointAt(i) === 84) {
            secondPartDNA += String.fromCodePoint(65);
        } else if (noSpacefirstPartDNA.codePointAt(i) === 67) {
            secondPartDNA += String.fromCodePoint(71);
        } else if (noSpacefirstPartDNA.codePointAt(i) === 71) {
            secondPartDNA += String.fromCodePoint(67);
        }     
    }       
    return secondPartDNA;
}

switch (true) {
    case firstPartDNA === null || firstPartDNA === '':
        alert('You enter invalid values.');        
        break;
    case !(firstPartDNA.includes('A') || firstPartDNA.includes('T')):
        alert('You enter invalid values.');        
        break;
    case !(firstPartDNA.includes('C') || firstPartDNA.includes('G')):
        alert('You enter invalid values.');        
        break;
    default:
        alert(`Complementary side is: ${getDNASecondPart(firstPartDNA)}`);
        break;
}

/* 
Вопросы:
    1. Альтернативные варианты решения.
*/