// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const stringArray = str.split(' ');
  const capitalizeArray = [];

  for (let word of stringArray) {
    capitalizeArray.push(word[0].toUpperCase() + word.slice(1));
  }

  return capitalizeArray.join(' ');
}