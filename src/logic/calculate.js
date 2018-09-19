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
            return {};
        }

        if (obj.operation) {
            if (obj.next) {
                return { next: obj.next + buttonName };
            }
            return { next: buttonName };
        }
        if (obj.next) {
            return {
                next: obj.next + buttonName,
                total: null,
            };
        }
        return {
            next: buttonName,
            total: null,
        };
    }

    if (buttonName === '.') {
        if (obj.next) {
            if (obj.next.includes('.')) {
                return {};
            }
            return { next: obj.next + '.' };
        }
        if (obj.operation) {
            return { next: '0.' };
        }
        if (obj.total) {
            if (obj.total.includes('.')) {
                return {};
            }
            return { total: obj.total + '.' };
        }
        return { total: '0.' };
    }

    if (buttonName === '=') {
        if (obj.next && obj.operation) {
            return {
                total: operate(obj.total, obj.next, obj.operation),
                next: null,
                operation: null,
            };
        } else {
            return {};
        }
    }

    if (buttonName === '+/-') {
        if (obj.next) {
            return { next: (-1 * parseFloat(obj.next)).toString() };
        }
        if (obj.total) {
            return { total: (-1 * parseFloat(obj.next)).toString() };
        }
        return {};
    }

    if (obj.operation) {
        return {
            total: operate(obj.total, obj.next, obj.operation),
            next: null,
            operation: buttonName,
        };
    }

    if (!obj.next) {
        return { operation: buttonName };
    }

    return {
        total: obj.next,
        next: null,
        operation: buttonName,
    };
}

export default calculate;
