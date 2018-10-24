import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('renders a button', () => {
    const wrapper = shallow(<Button />);

    const elements = wrapper.find('div.component-button');

    expect(elements.length).toBe(1);
  });

});
