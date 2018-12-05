import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});
});

it('should render a div with component-app class', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.find('div.component-app').length).toBe(1);
});
it('should start at zero', () => {
	const wrapper = shallow(<App />);
	const instance = wrapper.instance();
	expect(instance.state.total).toBe('0');
});
it('should pass 0 to Display component at instantiation', () => {
	const wrapper = shallow(<App />);
	const display = wrapper.find('Display');
	expect(display.props()).toEqual({ value: '0' });
})
it('should pass state.total', () => {
	const wrapper = shallow(<App />);
	const testTotal = 'testTotal';
	wrapper.setState({ total: testTotal });
	const display = wrapper.find('Display');
	expect(display.props()).toEqual({ value: testTotal });
});