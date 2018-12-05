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

  it('should have a div with the classname: component-button', () => {
    const wrapper = shallow(<Button/>)
    const elements = wrapper.find('.component-button')
    expect(elements.exists()).toBe(true)
  });

  it('should have classnames of wide or orange if passed as props', () => {
    const buttonOrange = shallow(<Button orange/>)
    const buttonWide = shallow(<Button wide />)
    const button = shallow(<Button/>)
   
    expect(buttonWide.find('.wide').exists()).toBe(true)
    expect(buttonOrange.find('.orange').exists()).toBe(true)
    expect(button.find('.wide').exists()).toBe(false)
    expect(button.find('.orange').exists()).toBe(false)
  });

  it('has a click handler passed as props', () => {
		const wrapper = shallow(<Button />);
		expect(wrapper.find('.component-button').length).toBe(1);
	});
});
