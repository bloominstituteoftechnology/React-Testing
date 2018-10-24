import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests.js';

// Components
import App from '../App';
import Display from '../components/Display/Display.js';
import Panel from '../components/Panel/Panel.js';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('renders a div with a component-app class', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('div.component-app').length).toBe(1);
	});

	it('renders a Display component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(Display).length).toBe(1);
	});

	it('renders a Panel component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(Panel).length).toBe(1);
	});

	describe('App state', () => {
		it('should have total default to 0', () => {
			const wrapper = shallow(<App />);
			const instance = wrapper.instance();
			expect(instance.state.total).toBe('0');
		});

		it('should have next default to null', () => {
			const wrapper = shallow(<App />);
			const instance = wrapper.instance();
			expect(instance.state.next).toBe(null);
		});
		it('should have operation default to null', () => {
			const wrapper = shallow(<App />);
			const instance = wrapper.instance();
			expect(instance.state.operation).toBe(null);
		});
	});
});
