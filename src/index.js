module.exports = function toReadable(number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const remains10 = number % 10;
    const remains100 = number % 100;
    const hundred = `${units[Math.floor(number / 100)]} hundred`;

    if (number < 10) return units[number]; // 0 - 9
    else if (number > 10 && number < 20) {
        return teens[(number - 10) - 1];  //  11, 12, 13, 14, 15 ...
    } else if (number < 100) {
        return remains10 === 0 ? dozens[number / 10 - 1] :  //  10, 20, 30, 40, 50 ...
            `${dozens[((number - remains10) / 10) - 1]} ${units[remains10]}`; //  21, 32, 43, 54, 65 ...
    } else if (number < 1000) {
        if (remains100 === 0) return hundred; //  100, 200, 300, 400, 500 ...
        else if (remains100 < 10) return `${hundred} ${units[remains100]}`; //  101, 202, 303, 404, 505 ...
        else if (remains100 > 10 && remains100 < 20) return `${hundred} ${teens[remains100 - 11]}`;  //  111, 212, 313, 414, 515 ...
        else if (remains10 === 0) return `${hundred} ${dozens[remains100 / 10 - 1]}`;  //  110, 220, 330, 440, 550 ...
        else return `${hundred} ${dozens[Math.floor(remains100 / 10) - 1]} ${units[remains10]}`; //  121, 232, 343, 454, 545 ...
    }
}
