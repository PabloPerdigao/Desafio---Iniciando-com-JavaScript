// Desafio - Iniciando com JavaScript


// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
console.log ('Hello World!')

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const sum = function (number1, number2) {
    total = number1 + number2
    return total    
}

let number1 = 10
let number2 = 2

console.log(`O 1º número é: ${number1}`) 
console.log(`O 2º número é: ${number2}`) 
console.log(`a soma do 1º + o 2º número é: ${sum (number1, number2)}`)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

    // OBS: 💡 Para saber o tipo de dado você pode usar o operador `typeof`

        let number = 12;

            if(typeof number === 'number') {
                console.log('É um número');

            } else {
                console.log('Não é um némero');
            }

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let string = "12"

if(typeof string === 'string') {
    console.log('É uma string')
}else {
    console.log('Não é uma string')
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let boolean = false

if(typeof boolean === 'boolean') {
    console.log('É um booleano')
}else {
    console.log('Não é um booleano')
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const subtracao =  function(first, second) {
    return first - second
}

let first = 12;
let second = 7;

let resultado = subtracao(first, second);

console.log(resultado)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.


// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.


// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".


// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar". 


