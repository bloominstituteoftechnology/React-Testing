import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {

	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it("should render a button", () => {
		const wrapper = shallow(<Button />);
		const display = wrapper.find("button");
		expect(display.length).toBe(1);
	});

	it("receives props correctly", () => {
		const oButton = shallow(<Button orange wide />);
		const instance = oButton.instance();
		expect(instance.props.orange).toBe(true);
		expect(instance.props.wide).toBe(true);
	});

});