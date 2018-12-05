import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('renders a div', () => {
    const wrapper = shallow(<Button />);
    const elements = wrapper.find('div');

    expect(elements.length).toEqual(1);
  });
});
