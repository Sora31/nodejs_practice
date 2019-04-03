const {odd, even} = require('./var');

const checkNum = (num) => {
    if(num % 2 == 0) return even;
    else return odd;
}

module.exports = checkNum;