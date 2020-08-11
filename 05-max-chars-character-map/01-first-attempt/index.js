// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  maxChars = {};

  for (let char of str) {
    if (char in maxChars) {
      maxChars[char]++;
    } else {
      maxChars[char] = 1;
    }
  }

  maxValue = Math.max(...Object.values(maxChars));
  for (let key of Object.keys(maxChars)) {
    if (maxChars[key] === maxValue) {
      return key;
    }
  }
}
