import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
    const one = Big(numberOne);
    const two = Big(numberTwo);

    switch(operation) {
        case '+':
            return one.plus(two).toString();
        case '-':
            return one.minus(two).toString();
        case 'x':
        case '*':
            return one.times(two).toString();
        case '÷':
        case '/':
            return one.div(two).toString();
        case '%':
        case 'mod':
            return one.mod(two).toString();
        default:
            throw Error(`Unknown operation ${operation}`);
    }
}

export default operate;