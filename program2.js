function convertRomanToInteger(inputRoman) {
    const romanNumeralValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let integerValue = 0;

    for (let index = 0; index < inputRoman.length; index++) {
        const currentSymbolValue = romanNumeralValues[inputRoman[index]];
        const nextSymbolValue = romanNumeralValues[inputRoman[index + 1]];

        if (nextSymbolValue > currentSymbolValue) {
            integerValue += nextSymbolValue - currentSymbolValue;
            index++; // Skip the next symbol since it's already considered
        } else {
            integerValue += currentSymbolValue;
        }
    }

    return integerValue;
}
