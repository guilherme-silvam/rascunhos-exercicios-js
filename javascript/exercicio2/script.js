/*
2. Contagem de Caracteres
Escreva uma função que recebe uma string e retorna um objeto onde as chaves são os caracteres da string e os valores são o número de vezes que aparecem.
*/

function contarCaracteres(texto) {
    // Sua lógica aqui
    const resultado = {}

    for (const letra of texto){
        if (resultado[letra]) {
            resultado[letra] += 1
        }else{
            resultado[letra] = 1
        }
    }
    return resultado
}

// Teste
console.log(contarCaracteres("Guilherme")); 
// Exemplo de saída: { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
