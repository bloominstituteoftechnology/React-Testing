import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('displays button', () => {
    const wrapper = shallow(<Button />);

    const display = wrapper.find('div.component-button');

    expect(display.length).toBe(1);
  })

  it('displays props name', () => {
    const wrapper = shallow(<Button name="blue" />)
    const button = wrapper.find('button');

    expect(button.text()).toBe('blue');
  })
});
