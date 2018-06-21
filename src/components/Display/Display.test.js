import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display component', () => {
  const expected = {};

  beforeAll(() => {
    expected.value = '0';
    expected.props = {
      value: expected.value
    };
  });

  it('renders without crashing', () => {
    shallow(<Display {...expected.props} />);
  });

  it('renders a div container', () => {
    const display = shallow(<Display {...expected.props} />);
    const div = display.find('.component-display');
    expect(div.length).toBe(1);
  });

  it('renders provided value prop', () => {
    const display = shallow(<Display {...expected.props} />);
    const div = display.find('.component-display');
    expect(div.text()).toEqual(expected.value);
  });
});
