import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should render the name prop', () => {
    const name = "8";
    const wrapper = shallow(<Button name={name} />);
    const button = wrapper.find('button');

    expect(button.text()).toEqual('8');
  });

  it('should perform click using name prop', () => {
    let name = 'example';
    let output;
    const clickHandler = input => output = input;
    const button = shallow(<Button name={name} clickHandler={clickHandler} />);
    const divButton = button.find('button');
    divButton.simulate('click');
    expect(output).toEqual(name);
  });

  describe('props modifying classes', () => {
    it('should add an orange class when passed as prop', () => {
      const wrapper = shallow(<Button orange />);
      const button = wrapper.find('.component-button');

      expect(button.hasClass('orange')).toBe(true);
    });

    it('should add a wide class when passed as prop', () => {
      const wrapper = shallow(<Button wide />);
      const button = wrapper.find('.component-button');

      expect(button.hasClass('wide')).toBe(true);
    });

    it('should not add extra props as a classname', () => {
      const wrapper = shallow(<Button blue />);
      const button = wrapper.find('.component-button');

      expect(button.hasClass('blue')).toBe(false);
    });
  })
});
