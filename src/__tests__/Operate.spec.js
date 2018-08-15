import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import operate from '../logic/operate';

Enzyme.configure({ adapter: new Adapter() });

describe('plus, minus, mutliply, divde... MODULO', () => {
    it("adds two numbers together", () => {
      expect(operate(6, 3, '+')).toBe('9')
    })
    it("subtracts one number from another", () => {
      expect(operate(6, 3, '-')).toBe('3')
    })
    it("multiplies two numbers", () => {
      expect(operate(6, 3, 'x')).toBe('18')
    })
    it("divides one number by another", () => {
      expect(operate(6, 3, '÷')).toBe('2')
    })
    it("returns the remainder of two numbers divided", () => {
      expect(operate(6, 3, '%')).toBe('0')
    })
  }) 