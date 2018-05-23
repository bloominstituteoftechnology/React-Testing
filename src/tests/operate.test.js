import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import operate from '../logic/operate';

Enzyme.configure({ adapter: new Adapter() });

describe('operate', () => {
  it('does some math', () => {
    const plus = operate(2, 3, '+');
    const minus = operate(100, 40, '-');
    const divide = operate(6, 2, '÷');
    const multiply = operate(4, 4, 'x');
    const modulo = operate(5, 4, '%');

    expect(plus).toEqual('5');
    expect(minus).toEqual('60');
    expect(divide).toEqual('3');
    expect(multiply).toEqual('16');
    expect(modulo).toEqual('1');
  })

});