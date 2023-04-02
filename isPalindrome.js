// Write your code below
function palindromeCheck(word) {
    return word === word.split('').reverse().join('');
}
console.log(palindromeCheck('daddad'))
