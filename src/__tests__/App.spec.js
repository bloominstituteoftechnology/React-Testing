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
});
