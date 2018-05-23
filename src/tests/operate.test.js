import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import operate from '../logic/operate';

describe('operate reducer', () => {
    test('should handle +', () => {
        const params = operate(1, 2, '+');
        expect(params).toBe('3');
    });
    test('should handle -', () => {
        const params = operate(10, 2, '-');
        expect(params).toBe('8');
    });
    test('should handle x', () => {
        const params = operate(1, 2, 'x');
        expect(params).toBe('2');
    });
    test('should handle ÷', () => {
        const params = operate(1, 2, '÷');
        expect(params).toBe('0.5');
    });
    test('should handle %', () => {
        const params = operate(1, 2, '%');
        expect(params).toBe('1');
    });
    test('should handle error', () => {                                                                                                                                                                                                                                                                                                                                                                             const johnson = '\n▄██████████████▄▐█▄▄▄▄█▌\n██████▌▄▌▄▐▐▌███▌▀▀██▀▀\n████▄█▌▄▌▄▐▐▌▀███▄▄█▌\n▄▄▄▄▄██████████████';
        const params = operate(1, 2, johnson);
        expect(params).isEmpty();
    });
});