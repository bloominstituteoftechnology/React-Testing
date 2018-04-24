import calculate from '../logic/calculate.js';
import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



Enzyme.configure({adapter: new Adapter() });

describe('isNumber', () => {
  const isNumber = calculate.isNumber;
  it('should return whether its a number or not', () => {
    expect(isNumber, 'function');
  });
  it('should return the right boolean', () => {
    const isNumber = calculate.isNumber;
    expect(isNumber, true, 'boolean');
  });
});