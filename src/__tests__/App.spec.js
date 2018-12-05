import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});
	it('should render div with className component-app', () => {
		const wrapper = shallow(<App />)
		const display = wrapper.find('div.component-app')
		expect(display.length).toBe(1)
	});
	it('should match snapshot', () => {
		const snapshot = renderer.create(<App />).toJSON()
		expect(snapshot).toMatchSnapshot()
	})
	it('state total should be string 0 by default', () => {
		const wrapper = shallow(<App />)
		const instance = wrapper.instance()
		expect(instance.state.total).toBe('0')
	})

});
