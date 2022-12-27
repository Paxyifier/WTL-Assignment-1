// Create a Currency Convertor Node.js Module with functions to convert currency from dollar to Rupees and vice versa.
const currencyConverter = require('./currency-converter')
const readlineSync = require('readline-sync');
var run = true;
while(run){
    console.log(`Currency Converter
    1. Convert Dollar to Rupee
    2. Convert Rupee to Dollar`)
    var ip;
    var choice = readlineSync.question('Enter your choice: ')
    switch (choice) {
        case '1':
            ip = readlineSync.question('Enter Amount in Dollars: ')
            console.log("Amount in Rupees : ",currencyConverter.dollarToRupee(ip));
            break;
        case '2':
            ip = readlineSync.question('Enter Amount in Rupees: ')
            console.log("Amount in Dollars : ",currencyConverter.rupeeToDollar(ip));
            break;
        default:
            break;
    }
}
