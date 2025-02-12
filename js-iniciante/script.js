/*
Crie um array com os números de 1 a 5. Depois, faça as seguintes operações:

1.Adicione o número 6 ao final do array.
2.Remova o primeiro elemento do array.
3.Inverta a ordem dos elementos.
*/

//1
let numeros = [1,2,3,4,5]
numeros.push(6)
console.log(numeros)

//2
numeros.shift()
console.log(numeros)

//3
numeros.reverse()
console.log(numeros)

/*
Dado o array let nomes = ["Ana", "Carlos", "Maria", "João", "Pedro"];, escreva uma função que verifique se um nome existe no array e retorne true ou false.
*/

let nome = function qualSeuNome(){
   let resposta = prompt("Qual o seu nome ?")
   return resposta
} 

function verificandoArray(){
    let nomes = ["Ana", "Carlos", "Maria", "João", "Pedro"]
    let nomeUsuario = nome()
    if(nomes.includes(nomeUsuario)){
        console.log(true)
    }else{
        console.log(false)
    }

}

verificandoArray()

/*
a) Criando um Objeto
Crie um objeto chamado pessoa com as seguintes propriedades:

nome (string)
idade (número)
profissao (string)
Exiba todas as propriedades do objeto no console.

b) Manipulando Objetos
Adicione uma nova propriedade chamada hobbies (array de strings) ao objeto pessoa. Depois, remova a propriedade profissao e exiba o objeto atualizado.
*/

//a

let pessoa = {
    nome:'Guilherme',
    idade: 21,
    profissao:'Dev'
}

console.log(pessoa.nome)
console.log(pessoa.idade)
//console.log(pessoa.profissao) Comentei para executar o B

//b

pessoa.hobbies = "Academia"
delete pessoa.profissao

console.log(pessoa)

