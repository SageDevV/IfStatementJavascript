// 1 - Escreva uma função que receba 2 números e retorne o maior deles.
const firstValue = 6;
const secondValue = 6;

function HighValue(firstValue, secondValue) {
    if (firstValue > secondValue) {
        return firstValue;
    }
    else if (secondValue > firstValue) {
        return secondValue
    }
    else if (secondValue == firstValue) {
        const resultEqual = 'Os valores são iguais'
        return resultEqual;
    }
    else {
        const resultInvalid = 'Os valores são inválidos'
        return resultInvalid;
    }
}

function HighValueAlternate(firstValue, secondValue) {
    const result = firstValue >= secondValue ? firstValue : secondValue;
    return result;
}

const resultOperation = HighValue(firstValue, secondValue);
console.log(resultOperation);

const resultOperationAlternate = HighValueAlternate(firstValue, secondValue)
console.log(resultOperationAlternate);

//2 - Escreva uma função chamada ePaisagem que receba dois argumentos, largura e altura de uma imagem. Retorne true se a imagem estiver no modo paisagem.

const altura = 9;
const largura = 10;

function ePaisagem(altura, largura) {
    if (altura > largura) {
        return false;
    }
    else if (altura == largura) {
        return 'são proporcionais';
    }
    return true;
}

function ePaisagemAlternate(altura, largura) {
    const result = altura < largura ? true : false;
    return result;
}

const resultOperation2 = ePaisagem(altura, largura);
console.log(resultOperation2);

const resultAlternateOperation2 = ePaisagemAlternate(altura, largura);
console.log(resultAlternateOperation2);


//Escreva uma função que recebe um número e retorne o seguinte: número é divisível por 3 = Fizz.
//Número é divisível por 5 = Buzz.
//Número é divisível por 3 e 5 = FizzBuzz.
//Número não é divisível = retorna o próprio número.
//Checar se o número é realmente um número.
//Use a função com números de 0 a 100.


function calculo(valueOperation) {
    if (isNaN(valueOperation)) {
        return 'Isso não é um número'
    }
    else {
        if (valueOperation % 3 == 0 && valueOperation % 5 == 0) {
            return 'FizzBuzz';
        }
        else if (valueOperation % 5 == 0) {
            return 'Buzz';
        }
        else {
            return valueOperation;
        }
    }
}

const valueOperation = "50";

const resultOperationDiv = calculo(valueOperation);
console.log(resultOperationDiv);