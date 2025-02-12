/*
Soma dos Elementos Ímpares ao Quadrado
Dado um array de números, retorne a soma de todos os números ímpares elevados ao quadrado.
*/

function somaImparesAoQuadrado(numeros) {
    // Sua lógica aqui
    let impares = numeros.filter(num => num % 2 !== 0)
    let soma = impares.map(num => num ** 2)
    let somaDosQuadrados = soma.reduce((a,b)=> a + b)
    return somaDosQuadrados

    /*
    filter(callback) → Filtra elementos do array com base em uma condição.
    map(callback) → Transforma cada elemento do array e retorna um novo array.
    reduce(callback, valorInicial) → Reduz o array a um único valor (como soma ou multiplicação).
    */

}

// Teste
console.log(somaImparesAoQuadrado([1,2,3,4,5])); // Saída esperada: 35 (1² + 3² + 5²)
