import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display component', () => {
  const expected = '0';
  const props = { value: expected };

  it('renders without crashing', () => {
    shallow(<Display {...props} />);
  });

  it('renders a div', () => {
    const display = shallow(<Display {...props} />);
    const div = display.find('.component-display');
    expect(div.length).toBe(1);
  });

  it('renders provided value prop', () => {
    const display = shallow(<Display {...props} />);
    const div = display.find('.component-display');
    expect(div.text()).toEqual(expected);
  });
});
