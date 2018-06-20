import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

// Write test here

describe('<Button />', () => {
  it('Renders without crashing.', () => {
    shallow(<Button />);  
  });

  it('Renders a button.', () => {
    const wrapper = shallow(<Button />);
    const button = wrapper.find('.component-button').children()
    expect(button.html()).toEqual('<button></button>');
  });

  it('Renders a button with correct color or type.', () => {
    const orangeButton = shallow(<Button orange/>);
    const wideButton = shallow(<Button wide/>);
    expect(orangeButton.find('.component-button').hasClass('orange')).toEqual(true);
    expect(wideButton.find('.component-button').hasClass('wide')).toEqual(true);    
  });
});