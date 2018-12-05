import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('It should match the snapshot', () => {
		const snapshot = renderer.create(<App />).toJSON();
		expect(snapshot).toMatchSnapshot();
	})

	it('The inital display should be sting of "0" ', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();

		expect(instance.state.total).toBe('0');
	})
});
