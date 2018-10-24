import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests.js';

// Components
import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('renders a div with "component-button" class', () => {
		const wrapper = shallow(<Button />);
		expect(wrapper.find('div').length).toBe(1);
		expect(wrapper.find('div').hasClass('component-button')).toBe(true);
	});

	it('renders a button inside the "component-button" class div', () => {
		const wrapper = shallow(<Button />);
		expect(wrapper.find('div>button').length).toBe(1);
	});

	it('gives the button inside the "component-button" class div an onClick function as a prop', () => {
		const wrapper = shallow(<Button />);
		expect(typeof(wrapper.find('div>button').prop('onClick'))).toBe('function');
	});

	it('should render the name prop inside the button', () => {
		const wrapper = shallow(<Button name = 'testName' />);
		expect(wrapper.find('div>button').text()).toBe('testName');
	});
});
