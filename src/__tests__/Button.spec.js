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

  it('renders -name- from props', () => {
    const name = '8';
    const wrapper = shallow(<Button name={name} />);
    const button = wrapper.find('button');

    expect(button.text()).toEqual('8');
  });

  it('clicks using -name- from props', () => {
    let name='test';
    let output;

    const clickHandler = input => output = input;
    const button = shallow(<Button name={name} clickHandler={clickHandler} />);
    const testButton = button.find('button');

    testButton.simulate('click');

    expect(output).toEqual(name);
  });

  describe('class modification with props', () => {
    it('adds an -orange- class when passed with props', () => {
      const wrapper = shallow(<Button orange />);
      const button = wrapper.find('.component-button');

      expect(button.hasClass('orange')).toBe(true);
    });
  });
});
