// Challenge 1
// capitalize() - makes the first character of a given string uppercase.
function capitalize(str) {
    var cap = str[0].toUpperCase() + str.slice(1);
    return cap;
}
console.log(capitalize('hello world'));
// Challenge 2
// allCaps() - makes all characters uppercase. (this is the same as str.toUpperCase())
function allCaps(str) {
    return str.toUpperCase();
}
// Challenge 3
// capitalizeWords() - makes the first character of each word uppercase. Imagine that each word is separated by a space.
function capitalizeWords(str) {
    var sentence = str.split(" "); // [do],[all],[the],[things]
    var upper = sentence.map(function (word) { return capitalize(word); }); // upperWords = [Do], [All], ['The'], ['Things']
    return upper.join(" "); // Do All The Things
}
// Challenge 4
// removeExtraSpaces() - Removes all spaces from the beginning and end of a String along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space.
function removeExtraSpaces(str) {
    var trim = str.trim();
    var split = trim.split(" ");
    var filtered = split.filter(function (word) { return word !== ""; });
    return filtered.join(" ");
}
console.log(removeExtraSpaces("     hrrnngng    "));
// Challenge 5
// kebabCase() - Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
function kebabCase(str, seperator) {
    var trimmed = removeExtraSpaces(str);
    var lowered = trimmed.toLowerCase();
    var kebabed = lowered.replaceAll(" ", seperator);
    return kebabed;
}
console.log(kebabCase('Hello    world', '-'));
// Challenge 6
// snakeCase() - Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
function snakeCase(str) {
    return kebabCase(str, '_');
}
console.log(snakeCase("Hello    world"));
// Challenge 7
// camelCase() - Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
function camelCase(str) {
    str = str.toLowerCase();
    str = str.trim();
    var len = str.length;
    var newStr = '';
    for (var i = 0; i <= len; i++) {
        if (str[i] == ' ') {
            str = str.replace(str[i + 1], str[i + 1].toUpperCase());
        }
        else {
            newStr += str.substring(i, i + 1);
        }
    }
    return newStr;
}
console.log(camelCase("this is camel case yo"));
// Challenge 8
// shift() this method will take the first character of a string and move to the end of a string
function shift(str, chars) {
    var shiftAmnt = str.slice(0, chars);
    var shifted = str.slice(chars) + shiftAmnt;
    return shifted;
}
console.log(shift('foobar', 3));
// Challenge 9 
// makeHashTag(str) - This function should convert the given string to a hash tag. A hash tag begins with # and no spaces. Each word in the phrase begins with an uppercase letter.
function makeHashTag(str) {
    var arr = str.toLowerCase().split(' ');
    var hashtag = '#';
    var hashtags = arr.map(function (word) { return hashtag.concat('', word); });
    return hashtags;
}
console.log(makeHashTag("pumpkin spice latte"));
// Challenge 10
// isEmpty(str) - Returns true if the given string is empty or contains only whitespace. White space includes: spaces, line returns, and tabs. These characters can be represented with: \n (new line) \r (carrige return), \t (tab).
function isEmpty(str) {
    str = str.trim();
    if (str == '') {
        return true;
    }
    return str;
}
var str = "   \n\t\t\t\n\t\t\t";
console.log(isEmpty(str));
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
