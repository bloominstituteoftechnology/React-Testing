import sinon from 'sinon';
// import Enzyme, { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import operate from '../operate';

describe('<operate />', () => {
  it('should return addtion of two numbers', () => {
    const add = operate(1, 2, '+'); 
    expect(add).toBe('3');
  });
  it('should return difference of two numbers', () => {
    const subtract = operate(1, 2, '-'); 
    expect(subtract).toBe('-1');
  });
  it('should return product of two numbers', () => {
    const mult = operate(1, 2, 'x'); 
    expect(mult).toBe('2');
  });
  it('should return quotient of two numbers', () => {
    const divide = operate(6, 2, '÷'); 
    expect(divide).toBe('3');
  });
  it('should return remainder of two numbers', () => {
    const modulo = operate(3, 2, '%'); 
    expect(modulo).toBe('1');
  });
  it('should return error with unknown operator', () => {
    const unknown = () => {
      throw new TypeError();
    };
    expect(unknown).toThrow(TypeError);
    });
});