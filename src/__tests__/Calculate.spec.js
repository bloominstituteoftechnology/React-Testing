import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import calculate from '../logic/calculate.js';
import { isNumber } from 'util';

Enzyme.configure({ adapter: new Adapter() });

describe('Calculate function', () => {
  test('Should return the number clicked', () => {
    const number = calculate(isNumber, "3")
    expect(number.next).toEqual("3")
  })
  test('Should return null when AC is clicked', () => {
    const nullState = {total: null, next: null, operation: null}
    const inputSate = {total: '42', next: '13', operation: '+'}
    const result = calculate(inputSate, 'AC')
    expect(result).toEqual(nullState);
  })
  test('Should return null when 0 is clicked and there was no memory', () => {
    const nullState = {total: null, next: null, operation: null}
    const inputSate = {total: '42', next: '0', operation: '+'}
    const result = calculate(inputSate, '0')
    expect(result).toEqual(nullState);
  })
  test('Should show the total when = is clicked', () => {
    const inputSate = {total: '10', next: '5', operation: '+'}
    const result = calculate(inputSate, '=');
    expect(result.total).toEqual('15');
  })
  test('Should show the operation to the operator when the operator clicked', () => {
    const inputSate = {total: '10', next: '5', operation: null}
    const result = calculate(inputSate, '*')
    expect(result.operation).toEqual('*');
  })
  test('Should . to object.next when the . is clicked', () => {
    const inputSate = {total: null, next: '13', operation: null}
    const result = calculate(inputSate, '.')
    expect(result.next).toEqual('13.');
  })
})