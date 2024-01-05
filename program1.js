/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
       const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (brackets[char]) {
            stack.push(char); 
        } else {
            const topOfStack = stack.pop(); 

            if (brackets[topOfStack] !== char) {
                return false; 
            }
        }
    }

    return stack.length === 0; 
};
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a string with parentheses: ', function (inputString) {
    const result = isValid(inputString);
    console.log(`The string is${result ? '' : ' not'} valid.`);
    rl.close();
});
module.exports = { isValid };


