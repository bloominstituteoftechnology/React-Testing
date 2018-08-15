import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('should render provided title', () => {
    const expected = '0'
    const props = { value: expected };
    const display = shallow(<Display {...props} />);
    const titleDiv = display.find('.component-display');
    
    expect(titleDiv.text()).toEqual(expected);
  });
});
