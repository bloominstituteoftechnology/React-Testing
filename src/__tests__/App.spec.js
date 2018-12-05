import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('matches snapshot', () => {
		const snapshot = renderer.create(<App/>).toJSON();
		expect(snapshot).toMatchSnapshot();
	})

	it('the value of "total" that is in the state should be 0 by default', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
		expect(instance.state.total).toBe('0');
	})
	it('the value of "next" that is in the state should be null by default', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
		expect(instance.state.next).toBe(null);
	})
	it('the value of "operation" that is in the state should be null by default', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
		expect(instance.state.operation).toBe(null);
	})

	it('should render a div with a class of "component-app" ', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('div.component-app').length).toBe(1);
	})

	
});
