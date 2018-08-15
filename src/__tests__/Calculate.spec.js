import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import calculate from '../logic/calculate';

Enzyme.configure({ adapter: new Adapter() });

describe('testing the outer buttons', () => {
  
  it('clicking 7 followed by a decimal point shows 7. on the display', () => {
    expect(calculate({ total: '7', next: null, operation: null }, '.')).toEqual(
      { total: '7.' }
    );
  });

  it('clicking 7 followed by plus minus shows -7 on the display', () => {
    expect(calculate({ total: null, next: '7', operation: null }, '+/-')).toEqual(
      { next: '-7' }
    );
  });

  it('adding 2 plus 5 and clicking AC shows 0 on the display', () => {
    expect(calculate({ total: '2', next: '5', operation: '+' }, 'AC')).toEqual({ total: null, next: null, operation: null });
  });

})