import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../App';
import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('matches snapshot', () => {
		const snapshot = renderer.create(<Display />).toJSON();

		expect(snapshot).toMatchSnapshot();
	});

	it('should render div within div.component-display', () => {
		const wrapper = shallow(<Display />);
		expect(wrapper.find('div').length).toBe(2);
		expect(wrapper.find('div.component-display').length).toBe(1);
		expect(wrapper.find('div.component-display div').length).toBe(1);
	});

	it('initial display should be 0', () => {
		const wrapper = mount(<App />);
		expect(wrapper.find(Display).find('.component-display div').text()).toBe('0');
		wrapper.unmount();
	});

	it('displayed value should change when props are received', () => {
		const wrapper = shallow(<Display value="value" />);
		expect(wrapper.text()).toBe('value');
		wrapper.setProps({ value: 'new value' });
		expect(wrapper.text()).toBe('new value');
	})
});
