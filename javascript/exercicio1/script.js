/*
Ordenação e Filtros
Crie uma função que recebe um array de números e retorna um novo array com:

Apenas os números pares.
Ordenados de forma crescente.
*/

function filtrarEParesOrdenados(numeros) {
    // Sua lógica aqui
    let pares = numeros.filter(num => num % 2 === 0)
    let ordenados = pares.sort((a, b) => a - b)
    return ordenados;

    //ou
    // return numeros.filter(num => num % 2 === 0).sort((a, b) => a - b)
}

// Teste
console.log(filtrarEParesOrdenados([10, 3, 5, 8, 2, 7, 12, 14])); 
// Saída esperada: [2, 8, 10, 12, 14]

