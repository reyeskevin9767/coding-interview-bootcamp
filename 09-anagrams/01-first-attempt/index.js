// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const firstString = {};
  const secondString = {};

  const newStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  const newStringB = stringB.replace(/[^\w]/g, '').toLowerCase();

  for (let ltr of newStringA) {
    if (ltr in firstString) {
      firstString[ltr]++;
    } else {
      firstString[ltr] = 1;
    }
  }

  for (let ltr of newStringB) {
    if (ltr in secondString) {
      secondString[ltr]++;
    } else {
      secondString[ltr] = 1;
    }
  }

  if (newStringA.length !== newStringB.length) {
    return false;
  }

  for (let key in firstString) {
    if (key in secondString) {
      if (firstString[key] !== secondString[key]) {
        return false;
      }
    }
  }

  return true;
}