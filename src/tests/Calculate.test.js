import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import calculate from '../logic/calculate';

describe('`Calculate`', () => {
    it('should include all properties for the state', () => {
        const state = calculate({total:1, next:1, operation:'+'}, 'button');
        expect(state.total).toBeDefined();
        expect(state.next).toBeDefined();
        expect(state.operation).toBeDefined();
    });
})
function isNumber(x) {
    return !!x.match(/[0-9]+/);
}
describe('`isNumber`', () => {
    it ('should be a function', () => {
      expect(typeof isNumber).toBe('function');
    });
  
    it ('should return a boolean', () => {
      expect(typeof isNumber('banana')).toBe('boolean');
      expect(typeof isNumber('6')).toBe('boolean');
    });
});