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