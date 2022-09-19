// ----- Exercício 1 -----

// const testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//       console.log(elseScope);
//     }
//   //  console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

//   // alterei para 'const elseScope', pois não redefinirei ele depois.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// -----Exercício 2 (solução 1)-----

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortOddsAndEvens = (array) => {

// for (let index = 1; index < array.length; index += 1) {
//   for( let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//   if (array[index] < array[secondIndex]) {
//     let position = array[index];
//     array[index] = array[secondIndex];
//     array[secondIndex] = position;
//     }
//    }
//   }  return array;
// };
//  const sortedArray = sortOddsAndEvens();
// console.log(sortOddsAndEvens(array)); // será necessário alterar essa linha 😉
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// -----Exercício 2 (solução 2)-----

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// const sortOddsAndEvens = () => {
//   oddsAndEvens[0] = 2;
//   oddsAndEvens[1] = 3;
//   oddsAndEvens[2] = 4;
//   oddsAndEvens[3] = 7; 
//   oddsAndEvens[4] = 10;
//   oddsAndEvens[5] = 13;
//   return oddsAndEvens;
// };
// const sortedArray = sortOddsAndEvens();
// console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); // Utilizando template literals para exibir a mensagem desejada
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// -----Exercício 2 (solução 3)-----

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);