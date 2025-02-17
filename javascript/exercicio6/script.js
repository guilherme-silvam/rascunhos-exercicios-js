/*
Encontre o Segundo Maior Número
Crie uma função que recebe um array de números e retorna o segundo maior número do array.
*/

function segundoMaior(numeros) {
    // Sua lógica aqui
    let segundoMaior = numeros.sort((a,b)=>b - a)
    return segundoMaior[1]
}

// Teste
console.log(segundoMaior([10, 5, 8, 20, 15])); // Saída esperada: 15

/*
O método .sort() é uma função de array em JavaScript que ordena os elementos no próprio array e retorna a referência do array ordenado. Por padrão, ele converte os elementos em strings e os ordena com base na sequência de caracteres Unicode.
*/