import operate from './operate';

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:String      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */

function isNumber(x) {
    return !!x.match(/[0-9]+/);
}

function calculate(obj, buttonName) {
    if (buttonName === 'AC') {
        return {
            total: null,
            next: null,
            operation: null,
        };
    }

    if (isNumber(buttonName)) {
        if (buttonName === '0' && obj.next === '0') {
            return {
                total: null,
                next: null,
                operation: null,
            };
        }

        if (obj.operation) {
            if (obj.next) {
                return { next: obj.next + buttonName };
            }
            return {
                total: null, 
                next: buttonName,
                operation: null,
            };
        }
        if (obj.next) {
            return {
                total: null,
                next: obj.next + buttonName,
                operation: null,
            };
        }
        return {
            total: null,
            next: buttonName,
            operation: null,
        };
    }

    if (buttonName === '.') {
        if (obj.next) {
            if (obj.next.includes('.')) {
                return {
                    total: null,
                    next: null,
                    operation: null,
                };
            }
            return {
                total: null,
                next: obj.next + '.',
                operation: null,
            };
        }
        if (obj.operation) {
            return { 
                total: null,
                next: '0.',
                operation: null,
            };
        }
        if (obj.total) {
            if (obj.total.includes('.')) {
                return {
                    total: null,
                    next: null,
                    operation: null,
                };
            }
            return { 
                total: obj.total + '.',
                next: null,
                operation: null,
            };
        }
        return { 
            total: '0.',
            next: null,
            operation: null,
        };
    }

    if (buttonName === '=') {
        if (obj.next && obj.operation) {
            return {
                total: operate(obj.total, obj.next, obj.operation),
                next: null,
                operation: null,
            };
        } else {
            return {
                total: null,
                next: null,
                operation: null,
            };
        }
    }

    if (buttonName === '+/-') {
        if (obj.next) {
            return { 
                total: null,
                next: (-1 * parseFloat(obj.next)).toString(),
                operation: null,
            };
        }
        if (obj.total) {
            return { 
                total: (-1 * parseFloat(obj.next)).toString(),
                next: null,
                operation: null,
            };
        }
        return {
            total: null,
            next: null,
            operation: null,
        };
    }

    if (obj.operation) {
        return {
            total: operate(obj.total, obj.next, obj.operation),
            next: null,
            operation: buttonName,
        };
    }

    if (!obj.next) {
        return {
            total: null,
            next: null,
            operation: buttonName,
        };
    }

    return {
        total: obj.next,
        next: null,
        operation: buttonName,
    };
}

export default calculate;
