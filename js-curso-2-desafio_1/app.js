let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function botaoConsole(){
    console.log('O botão foi clicado')
};

function amoAlerta(){
    alert ('Eu amo JS')
};

function promptCidade(){
    let cidade = prompt('Escreva o nome de uma cidade do brasil que voce acha linda:');
    alert (`a cidade ${cidade} realmente é muito linda`);
}

function somaNumero(){
    alert (' vamos somar numeros, escreva o primeiro numero:');
    let primeiro = parseInt(prompt('primeiro numero: '));

    alert ('agora o segundo numero');
    let segundo = parseInt(prompt('segundo numero: '));

    let resultado =  primeiro + segundo;

    alert(` o resultado da seguinte soma: ${primeiro} + ${segundo}, é igual a: ${resultado}.`);
}