import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Operate from '../logic/operate.js';
import operate from '../logic/operate.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Operate function', () => {
  test('Returns a string', () => {
    const result = operate(199, 20, '+');
    expect(typeof(result)).toEqual('string');
  })
  test('Throws an error on default', () => {
    const operation = '/';
    expect(() => {
      operate(58, 23, operation)
    }).toThrowError(`Unknown operation ${operation}`)
    })
})