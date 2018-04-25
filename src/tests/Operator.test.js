import operate from '../logic/operate';

describe('`operate`', () => {
    it('should return a string', () => {
        const test = operate(10, 10, '+');
        expect(typeof test).toBe('string');
    });
    it('should return unknown operation as default', () => {
        const operation = '*';
        //const test = operate(10, 10, operation);
        expect(() => {
            operate(1, 4, operation);
        }).toThrowError(`Unknown operation ${operation}`);
    });
    it("adds two numbers", () => {
        const result = operate(10, 10, "+");
        expect(result).toEqual("20");
    });
    it("multiplies two numbers", () => {
        const result = operate(10, 10, "x");
        expect(result).toEqual("100");
    });
    it("divides two numbers", () => {
        const result = operate(10, 10, "÷");
        expect(result).toEqual("1");
    });
    it("subtracts two numbers", () => {
        const result = operate(10, 8, "-");
        expect(result).toEqual("2");
    });
    it("returns the remainder", () => {
        const result = operate(10, 8, "%");
        expect(result).toEqual("2");
    });
});