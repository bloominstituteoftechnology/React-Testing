import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../App';
import Display from '../components/Display/Display';
import Panel from '../components/Panel/Panel';

describe('<App />', () => {
	// should this be shallow?
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
	});

	it('renders a <Display /> component', () => {
		const wrapper = shallow(<App />);

		const elements = wrapper.find(Display);

		expect(elements.length).toBe(1);
	});

	it('renders a <Panel /> component', () => {
		const wrapper = shallow(<App />);

		const elements = wrapper.find(Panel);

		expect(elements.length).toBe(1);
	});

	it('has a state property "total" set to "0" by default', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();

		expect(instance.state.total).toBe('0');
	});

	it('has a state property "next" set to null by default', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();

		expect(instance.state.next).toBe(null);
	});

	it('has a state property "operation" set to null by default', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();

		expect(instance.state.operation).toBe(null);
	});

	// it('should update the state when', () => {});
});
