import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
    const one = Big(numberOne);
    const two = Big(numberTwo);

    if (
        typeof(numberOne) !== 'string' ||
        typeof(numberTwo) !== 'string'
    ) throw Error('Values must be strings');

    switch(operation) {
        case '+':
            return one.plus(two).toString();
        case '-':
            return one.minus(two).toString();
        case 'x':
            return one.times(two).toString();
        case '÷':
            if (numberTwo === '0') throw Error('Cannot divide by 0');
            return one.div(two).toString();
        case '%':
            if (numberTwo === '0') throw Error('Cannot divide by 0');
            return one.mod(two).toString();
        default:
            throw Error(`Unknown operation ${operation}`);
    }
}

export default operate;