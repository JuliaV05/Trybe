function handleSubmit(event) {
  event.preventDefault();
}

function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements.length[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
}
window.onload = function () {
  const clearButton = document.querySelector('#clear-button');
  clearButton.addEventListener('click', clearFields);
  const submitButton = document.querySelector('#submit-button');
  submitButton.addEventListener('click', handleSubmit);
};