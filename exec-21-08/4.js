/* 04. Crie uma função para identificar se uma palavra é ou não um palíndromo.*/

const readline = require('readline-sync');

let word = readline.question('Digite uma palavra: ');
console.log(`A palavra ${word} é um palíndromo? ${isPalindrome(word)}`);

function isPalindrome(word) {
    let wordReversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
        wordReversed += word[i];
    }
    return wordReversed === word;
}