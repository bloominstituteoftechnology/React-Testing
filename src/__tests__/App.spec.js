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

	it('renders a div with a "component-app" class', () => {
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

	describe('App\'s children\'s props', () => {
		it('should pass value prop as string to Display with default 0', () => {
			const wrapper = shallow(<App />);
			expect(typeof(wrapper.find(Display).prop('value'))).toBe('string');
			expect(wrapper.find(Display).prop('value')).toBe('0');
		});

		it('should pass clickHandler function as prop to Panel', () => {
			const wrapper = shallow(<App />);
			expect(typeof(wrapper.find(Panel).props().clickHandler)).toBe('function');
		});
	});
});
