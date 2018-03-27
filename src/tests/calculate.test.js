import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import calculate from "../logic/calculate.js";

Enzyme.configure({ adapter: new Adapter() });

describe('calculate', () => {
  it('should reset everything on `AC` press', () => {
    const test = calculate({}, 'AC');
    expect(test).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  it('should return empty object if buttonName and next are zero', () => {
    const test = calculate({total: null, next: '0', operation: '-'}, '0');
    expect(test).toEqual({});
  });
});