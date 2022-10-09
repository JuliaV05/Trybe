// 
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}; 

// // crie a função sendMarsTemperature abaixo
// const sendMarsTemperature = () => {
//     const temperaturaAtual = getMarsTemperature();
//     setTimeout(() => console.log(`A temperatura de Marte é: ${temperaturaAtual} celsius`), messageDelay());
// }
// // Nessa função não foi necessário definir os milisegundos no parâmetro do setTimeout, já que 
// // a função messageDelay foi declarada para definir umm tempo aleatório de até, no máximo 5 segundos.

// sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);
 

// Definição da função sendMarsTemperature...
 const sendMarsTemperature = (onSuccess, onError) => {
    const currentTemperature = getMarsTemperature();
    const messageSuccessfullySent = Math.random() <= 0.6;
    setTimeout(() => {
    if ( messageSuccessfullySent) onSuccess(currentTemperature)
    else onError('Robot is busy');
    }, messageDelay())
}


sendMarsTemperature(temperatureInFahrenheit, handleError); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

sendMarsTemperature(greet, handleError); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo