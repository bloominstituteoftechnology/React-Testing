import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('matches app snapshot', () => {
		const snapshot = renderer.create(<App />).toJSON();
		expect(snapshot).toMatchSnapshot();
	});

	it('check for default instance values', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();

		expect(instance.state.total).toBe('0');
		expect(instance.state.next).toBe(null);
		expect(instance.state.operation).toBe(null);
	});
});
