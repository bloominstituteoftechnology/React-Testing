import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';
import Operate from "../logic/operate.js";

Enzyme.configure({ adapter: new Adapter() });

describe("operate", () => {
    it("'+' should add two values together", () => {
        const operateTest = Operate(1, 2, '+');
        expect(operateTest).toBe('3');
    });
    it("'-' should subtract one value from another", () => {
        const operateTest = Operate(4, 2, '-');
        expect(operateTest).toBe('2');
    });
    it("'x' should multiply two values", () => {
        const operateTest = Operate(1, 2, 'x');
        expect(operateTest).toBe('2');
    });
    it("'÷' should divide one value from another", () => {
        const operateTest = Operate(4, 2, '÷');
        expect(operateTest).toBe('2');
    });
    it("'%' should return the modulo of two values", () => {
        const operateTest = Operate(4, 2, '%');
        expect(operateTest).toBe('0');
    });
    it("'asdf' should return an error", () => {
        const operation = 'asdf';
        expect(() => {
            Operate(4, 2, 'asdf');
        }).toThrowError(`Unknown operation ${operation}`)
    });
});