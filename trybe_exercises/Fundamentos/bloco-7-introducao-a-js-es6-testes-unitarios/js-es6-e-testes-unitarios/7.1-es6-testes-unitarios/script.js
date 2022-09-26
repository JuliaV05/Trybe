function verifyIsNumber (value1, value2) {
    if (!value1 || !value2){
        throw new Error ('Tu precisa preencher os campos para realizar a soma');
    }
    if (isNaN(value1) || isNaN(value2)) {
        throw new Error('Informe os números para a soma, mulher');
    }
}

function sum() {
  try {
      const value1 = document.getElementById('value1').value;
      const value2 = document.getElementById('value2').value;
      verifyIsNumber(value1, value2);
      const result = Number(value1) + Number(value2); 
     document.getElementById('result').innerHTML = `Resultado: ${result}`;
    } catch (e) {
    document.getElementById('result').innerHTML = `Erro: ${e.message}`;
  } finally {
    document.getElementById(value1).value = '';
    document.getElementById(value2).value = '';
  }

  
}
window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
}