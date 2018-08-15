import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import calculate from '../logic/calculate';

Enzyme.configure({ adapter: new Adapter() });

describe('calculate', () => {
  it('Should return nothing if button and next are 0', () => {
    const zeroed = calculate({
        total: null,
        next: '0',
        operation: '-'
    }, '0')

    expect(zeroed).toEqual({});
  
  });

});
