function buttonSubmit (event) {
   event.preventDefault();
}

window.onload = function () {
  const submitButton = document.querySelector('#submit-button');
  submitButton.addEventListener('click', buttonSubmit);
};

function resetFields (event) {
   const formElements = document.querySelectorAll('input');
   const textArea = document.querySelector('textarea');

   for(let index = 0; index < formElements.length; index +=1){
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;

   }
   textArea.value = '';
}

window.onload = function () {
  const clearFields = document.querySelector('#reset-fields');
  clearFields.addEventListener('click', resetFields);
  const submitBtn = document.querySelector('#submit-button');
  submitBtn.addEventListener('click', buttonSubmit);
};

function enableSubmit () {
  const submitBtn2 = document.querySelector('#submit-button');
  const agree = document.querySelector('#agree');
  submitBtn2.disabled = !agree.checked;
}

window.onload = function () {
  const clearFields = document.querySelector('#reset-fields');
  clearFields.addEventListener('click', resetFields);
  const submitBtn = document.querySelector('#submit-button');
  submitBtn.addEventListener('click', buttonSubmit);
  const agree = document.querySelector('#agree');
  agree.addEventListener('change', enableSubmit);
};

function textInputValidation () {
 const email = document.querySelector('#e-mail').value.length;
 const invalidEmail = email < 10 || email > 50;

 const name = document.querySelector('#e-mail').value.length;
 const invalidName = name < 10 || name > 40;

 const reason = document.querySelector('#why').value.length;
 const invalidReason = reason > 500;

 if (invalidEmail || invalidName || invalidReason) {
   return false;
 }
  else {
    return true;
  }
}
  function buttonSubmit(event) {
    event.preventDefault();
  const validation = textInputValidation();
   if (validation === false) {
    alert('Dados inválidos');
   } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
   }
   }
  