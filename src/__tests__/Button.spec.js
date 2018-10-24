import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('should display button', () => {
    const wrapper = shallow(<Button />);

    const display = wrapper.find('div.component-button');

    expect(display.length).toBe(1);
  })



  it('should display props name', () => {
    const wrapper = shallow(<Button name="blue" />)
    const button = wrapper.find('button');

    expect(button.text()).toBe('blue');
  })
});
