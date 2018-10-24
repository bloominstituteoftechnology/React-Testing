import Big from 'big.js';

//Errors
import {
    nonStringTypeError,
    dividingByZeroError,
} from '../errors/index.js';

function operate(numberOne, numberTwo, operation) {
    if (
        typeof(numberOne) !== 'string' ||
        typeof(numberTwo) !== 'string' ||
        typeof(operation) !== 'string'
    ) throw Error(nonStringTypeError);

    const one = Big(numberOne);
    const two = Big(numberTwo);

    switch(operation) {
        case '+':
            return one.plus(two).toString();
        case '-':
            return one.minus(two).toString();
        case 'x':
            return one.times(two).toString();
        case '÷':
            if (numberTwo === '0') throw Error(dividingByZeroError);
            return one.div(two).toString();
        case '%':
            if (numberTwo === '0') throw Error(dividingByZeroError);
            return one.mod(two).toString();
        default:
            throw Error(`Unknown operation ${operation}`);
    }
}

export default operate;