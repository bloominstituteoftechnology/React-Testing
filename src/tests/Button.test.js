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

  it('renders a html button', () => {
    const wrapper = shallow(<Button />);
    const htmlButton = wrapper.find('.component-button').children()
    expect(htmlButton.html()).toEqual('<button></button>');
  });

  it('renders a html button with correct color class name', () => {
    const orangeButton = shallow(<Button orange/>);
    const wideButton = shallow(<Button wide/>);

    expect(orangeButton.find('.component-button').hasClass('orange')).toEqual(true);
    expect(wideButton.find('.component-button').hasClass('wide')).toEqual(true);
  });
});
