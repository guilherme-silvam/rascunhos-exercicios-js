function gerarSenha(tamanho) {
    // Sua lógica aqui
    const caracteres ='QWERTYUIOPASDFGHJKLÇZXCVBNMqwertyuiopasdfghjklçzxcvbnm1234567890!@#$%&*'
    let senha = ''

    for (let i = 0; i < tamanho; i++){
        const indiceAleatorio = Math.floor(Math.random()* caracteres.length)
        senha += caracteres[indiceAleatorio]
    }
    return senha
}

// Teste
console.log(gerarSenha(10)); // Exemplo de saída: "A8xP3wZ7Yt"


/*
Math.random()

Gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo).
Exemplo de valores possíveis: 0.123, 0.876, 0.9999, etc.
Multiplicação por caracteres.length

caracteres.length representa o total de caracteres disponíveis na string que definimos.
Se a string tiver, por exemplo, 70 caracteres, a multiplicação garante que o número gerado esteja entre 0 e 70 (não incluindo 70).
Exemplo de possíveis resultados antes do Math.floor():
0.123 * 70 = 8.61
0.876 * 70 = 61.32
0.9999 * 70 = 69.99
Math.floor()

Arredonda o número para baixo, transformando-o em um número inteiro válido como índice da string.
Exemplo de resultados finais:
Math.floor(8.61) → 8
Math.floor(61.32) → 61
Math.floor(69.99) → 69
Resumo
Gera um número aleatório entre 0 e 1.
Multiplica pelo total de caracteres disponíveis (caracteres.length).
Usa Math.floor() para arredondar para um número inteiro entre 0 e o último índice válido.
*/

/*
.length é usado para saber o tamanho da string (quantidade de caracteres), permitindo calcular um índice válido ao escolher caracteres aleatórios.
*/

/*
caracteres[indiceAleatorio] pega um caractere aleatório da string.
senha += ... adiciona esse caractere à variável senha, formando a senha final ao longo do loop.
*/