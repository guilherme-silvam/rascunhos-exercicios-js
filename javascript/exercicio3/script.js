function ehPalindromo(palavra) {
    // Sua lógica aqui
    let palavraInvertida = palavra.split('').reverse().join(''); 
    /*
    -- split('') transforma a string em um array de caracteres.
    -- reverse() inverte a ordem dos elementos do array.
    -- join('') junta os elementos do array de volta em uma string.
    */
    palavra === palavraInvertida ? console.log(true): console.log(false)
}

// Teste
console.log(ehPalindromo("arara")); // true
console.log(ehPalindromo("javascript")); // false
