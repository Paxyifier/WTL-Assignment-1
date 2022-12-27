const rupeeToDollarRate = 82.40;
const rupeeToDollar = (x) => x/rupeeToDollarRate;
const dollarToRupee = (x) => x*rupeeToDollarRate;

module.exports = {
    dollarToRupee,
    rupeeToDollar,
}