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
    {/* if the clear button has been pressed */}
    if (buttonName === 'AC') {
        {/*
            if the button name === 'AC', then return an object
            with all three properties of the original state, 
            total, next, and operation.
            We do that here and it makes sense.
            So why don't we do the same elsewhere?
            Like why are we returning empty objects or objects with only one key/value pair?
        */}
        return {
            total: null,
            next: null,
            operation: null,
        };
    }

    if (isNumber(buttonName)) {
        if (buttonName === '0' && obj.next === '0') {
            {/* why do we return an empty object? */}
            return {};
        }
        
        {/*
            if something exists at obj.operation...
        */}
        if (obj.operation) {
        {/* if something exists at obj.next */}
            if (obj.next) {
                {/*
                    return an object with a key/value pair
                    next: obj.next + buttonName
                    but why?
                */}
                return { next: obj.next + buttonName };
            }
            {/* otherwise, return an object with a key/value pair */}
            {/* this key/value pair is next: buttonName */}
            return { next: buttonName };
        }
        {/*
            so if nothing exists at  
        */}
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
