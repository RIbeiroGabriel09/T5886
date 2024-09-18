const ask = require('readline-sync')

/*
Os exercícios de hoje são divididos em interpretação e escrita de código. 
Para os de interpretação, coloque as respostas em comentários de código. 
Já, nos de escrita, lembre-se de imprimir no console os resultados.


█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██      
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████   
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██      
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 

██ ███    ██ ████████ ███████ ██████  ██████  ██████  ███████ ████████  █████   ██████  █████   ██████  
██ ████   ██    ██    ██      ██   ██ ██   ██ ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██ ██  ██    ██    █████   ██████  ██████  ██████  █████      ██    ███████ ██      ███████ ██    ██ 
██ ██  ██ ██    ██    ██      ██   ██ ██      ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██   ████    ██    ███████ ██   ██ ██      ██   ██ ███████    ██    ██   ██  ██████ ██   ██  ██████  


Tente responder os exercícios dessa seção sem executar o código. 
Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado.                                                                                                                                                                                                

█████████████████████████████████████████████████████████████████████████████████████████████████████████

*/

//1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

//O código cria uma variável cm valor 0, dps executa um loop for onde a variável i começa cm 0 e vai até 4 (menor que 5), e a cada vez q o loop "acontece", aumenta o valor em 1
//2. Leia o código abaixo:
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

    //a) O que vai ser impresso no console?
//19, 21, 23, 25, 27, 30
    //b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
//O for of n permite acessar diretamente o índice dos elementos, p isso, uma opção seria usar o entries() da array, que retorna o índice e o valor


//3.Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
    const quantidadeTotal = Number(ask.question("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
        let linha = ""
        for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
            linha += "*"
        }
        console.log(linha)
        quantidadeAtual++
    }
//*
//**
//***
//****


/*
█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████

███████ ███████  ██████ ██████  ██ ████████  █████      ██████  ███████
██      ██      ██      ██   ██ ██    ██    ██   ██     ██   ██ ██
█████   ███████ ██      ██████  ██    ██    ███████     ██   ██ █████
██           ██ ██      ██   ██ ██    ██    ██   ██     ██   ██ ██
███████ ███████  ██████ ██   ██ ██    ██    ██   ██     ██████  ███████

 ██████  ██████  ██████  ██  ██████   ██████
██      ██    ██ ██   ██ ██ ██       ██    ██
██      ██    ██ ██   ██ ██ ██   ███ ██    ██
██      ██    ██ ██   ██ ██ ██    ██ ██    ██
 ██████  ██████  ██████  ██  ██████   ██████

█████████████████████████████████████████████████████████████████████████████████████████████████████████
*/


/*
1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array    
    
    c) Por fim, imprima o array com os nomes dos bichinhos no console
*/
let quantidadePets = Number(ask.question("Quantos bichinhos de estimacao voce tem? "))

if (quantidadePets === 0) {

    console.log("Que pena! Você pode adotar um pet!")
} else {
    let nomesPets = []
    for (let i = 0; i < quantidadePets; i++) {
        let nomePet = ask.question(`Digite o nome do pet ${i + 1}: `)
        nomesPets.push(nomePet)
    }
    
    console.log("Os nomes dos seus bichinhos são:", nomesPets)
}


/*
2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
    a) Escreva um programa que **imprime** cada um dos valores do array original.
    
    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    
    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
    
    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
*/

const arrayOriginal = [24, 56, 8, 12, 90, 69, 11, 34]

function Valores(array) {
    for (let valor of array) {
        console.log(valor)
    }
}

function DivididoPor10(array) {
    for (let valor of array) {
        console.log(valor / 10)
    }
}

function NumerosPares(array) {
    const numerosPares = array.filter((numero) => numero % 2 === 0)
    console.log(numerosPares)
}

function ArrayComStrings(array) {
    const arrayComStrings = array.map((numero, indice) => `O valor do indice ${indice} é: ${numero}`)
    console.log(arrayComStrings)
}

function MaiorEMenor(array) {
    const maiorNumero = Math.max(...array)
    const menorNumero = Math.min(...array)
    console.log("Maior número:", maiorNumero)
    console.log("Menor número:", menorNumero)
}

Valores(arrayOriginal)
DivididoPor10(arrayOriginal)
NumerosPares(arrayOriginal)
ArrayComStrings(arrayOriginal)
MaiorEMenor(arrayOriginal)
function imprimirArrayComStrings(array) {
    const arrayComStrings = array.map((numero, indice) => `O elemento do índex ${indice} é: ${numero}`)
    console.log(arrayComStrings)
}

function imprimirMaiorEMenor(array) {
    const maiorNumero = Math.max(...array)
    const menorNumero = Math.min(...array)
    console.log("Maior número:", maiorNumero)
    console.log("Menor número:", menorNumero)
}

imprimirValores(arrayOriginal)
imprimirDivididoPor10(arrayOriginal)
imprimirNumerosPares(arrayOriginal)
imprimirArrayComStrings(arrayOriginal)
imprimirMaiorEMenor(arrayOriginal)

