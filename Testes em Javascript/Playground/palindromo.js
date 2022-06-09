//split, reverse, join
//Verifica se a palavra informada é ou não um palíndromo.

function verificaPalindromo(string) {
    if (!string) return "Valor inválido!";
    var reverseString = string.split("").reverse().join("");

    if (string === reverseString) { 
        return `A palavra ${string} é um palíndromo`;
    }
    return `A palavra ${string} não é um palíndromo`;

    
}
console.log(verificaPalindromo("abacaxi"));
console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo("aba"));
console.log(verificaPalindromo(""));
