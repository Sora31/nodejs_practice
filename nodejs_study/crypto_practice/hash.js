const crypto = require('crypto');

console.log(crypto.createHash('sha512').update('asdffdsa').digest('base64'));
console.log(crypto.createHash('sha512').update('asdffdsa').digest('hex'));
console.log(crypto.createHash('sha512').update('fdsaasdf').digest('base64'));
