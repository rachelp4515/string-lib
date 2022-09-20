// Challenge 1
// capitalize() - makes the first character of a given string uppercase.

function capitalize(str) {
    const cap = str[0].toUpperCase() + str.slice(1);
    return cap;
  }
console.log(capitalize('hello world'))

// Challenge 2
// allCaps() - makes all characters uppercase. (this is the same as str.toUpperCase())

function allCaps(str) {
  return str.toUpperCase();
}

// Challenge 3
// capitalizeWords() - makes the first character of each word uppercase. Imagine that each word is separated by a space.

function capitalizeWords(str) {
  const sentence = str.split(" "); // [do],[all],[the],[things]
  const upper = sentence.map((word) => capitalize(word)); // upperWords = [Do], [All], ['The'], ['Things']
  return upper.join(" "); // Do All The Things
}

// Challenge 4
// removeExtraSpaces() - Removes all spaces from the beginning and end of a String along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space.

function removeExtraSpaces(str) {
  const trim = str.trim();
  const split = trim.split(" ");
  const filtered = split.filter((word) => word !== "");
  return filtered.join(" ");
}
console.log(removeExtraSpaces("     hrrnngng    "))

// Challenge 5
// kebabCase() - Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.

function kebabCase(str, seperator) {
  const trimmed = removeExtraSpaces(str);
  const lowered = trimmed.toLowerCase();
  const kebabed = lowered.replaceAll(" ", seperator);
  return kebabed;
}
console.log(kebabCase('Hello    world', '-'))
// Challenge 6

// snakeCase() - Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
function snakeCase(str) {
    return kebabCase(str, '_')
}
console.log(snakeCase("Hello    world"))

// Challenge 7
// camelCase() - Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.

console.log('Challenge 7- camelCase()');
function camelCase(str) {
  str = str.toLowerCase();
  str = str.trim();
  len = str.length;
  newStr = '';
  for (i = 0; i <= len; i++) {
    if (str[i] == ' ') {
      str = str.replace(str[i + 1], str[i + 1].toUpperCase());
    } else {
      newStr += str.substring(i, i + 1);
    }
  }
  return newStr;
}

console.log(camelCase("this is camel case yo"))

// Challenge 8
// shift() this method will take the first character of a string and move to the end of a string

function shift(str, chars) {
    const shiftAmnt = str.slice(0, chars)
    const shifted = str.slice(chars) + shiftAmnt
    return shifted
  }

  console.log(shift('foobar', 3))

// Challenge 9 
// makeHashTag(str) - This function should convert the given string to a hash tag. A hash tag begins with # and no spaces. Each word in the phrase begins with an uppercase letter.

function makeHashTag(str) {
    const arr = str.toLowerCase().split(' ')
    const hashtag = '#'
    const hashtags = arr.map((word) => hashtag.concat('', word))
    return hashtags
  }

console.log(makeHashTag("pumpkin spice latte"))

// Challenge 10
// isEmpty(str) - Returns true if the given string is empty or contains only whitespace. White space includes: spaces, line returns, and tabs. These characters can be represented with: \n (new line) \r (carrige return), \t (tab).
function isEmpty(str) {
  str = str.trim();
  if (str == '') {
    return true;
  }
  return str;
}
const str = `   
			
			`;

console.log(isEmpty(str))



module.exports.capitalize = capitalize;
module.exports.allCaps = allCaps;
module.exports.capitalizeWords = capitalizeWords;
module.exports.removeExtraSpaces = removeExtraSpaces;
module.exports.kebabCase = kebabCase;
module.exports.snakeCase = snakeCase;
module.exports.camelCase = camelCase;
module.exports.shift = shift;
module.exports.makeHashTag = makeHashTag;
module.exports.isEmpty = isEmpty;
