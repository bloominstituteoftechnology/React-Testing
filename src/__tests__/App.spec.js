import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('matches snapshot', () => {
		const snapshot = renderer.create(<App />).toJSON();

		expect(snapshot).toMatchSnapshot();
	});

	it('should render Display and Panel components', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Display').length).toBe(1);
		expect(wrapper.find('Panel').length).toBe(1);
	});

	it('should pass {value: "0"} to Display as props on mount', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Display').prop('value')).toBe('0');
	});

	it('should pass correct values to Display on state change', () => {
		const wrapper = shallow(<App />);
		wrapper.setState({ next: '3' });
		expect(wrapper.find('Display').prop('value')).toBe('3');
		wrapper.setState({ total: '9', next: null });
		expect(wrapper.find('Display').prop('value')).toBe('9');
	})
});
