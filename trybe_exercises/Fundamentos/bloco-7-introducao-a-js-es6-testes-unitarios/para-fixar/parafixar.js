const verifyIsNumber = (value1, value2) => { 
 if(typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error ('Fia, os valores devem ser numéricos, pois trata-se de uma calculadora. Preste atenção!');
 }
};


const sum = (value1, value2) => {
    try {
        verifyIsNumber(value1, value2);
        return value1 + value2;
    } catch (error) {
        return error.message;
    }
};

console.log(sum(2, '3'));

/* Praticando fluxo de exceção com a palavra reservada 'throw' que serve para lançar uma exceção,
 o operador 'new' que cria um objeto personalizado e palavra 'Error' que represnta um erro.
 Também aprendemos a  ultilizar o try/catch que captura o erro. O 'try' tenta executar o código e
 o 'catch' é chamado caso ocorra um erro.*/


