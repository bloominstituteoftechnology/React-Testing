import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import calculate from '../logic/calculate';

describe('`Calculate`', () => {
    it('should include all properties for the state', () => {
        const state = calculate.calculate({total:1, next:1, operation:'+'}, 'button');
        expect(state.total).toBeDefined();
        expect(state.next).toBeDefined();
        expect(state.operation).toBeDefined();
    });
})

describe('`isNumber`', () => {
    it ('should be a function', () => {
      expect(typeof calculate.isNumber).toBe('function');
    });
  
    it ('should return a boolean', () => {
      expect(typeof calculate.isNumber('banana')).toBe('boolean');
      expect(typeof calculate.isNumber('6')).toBe('boolean');
    });
});