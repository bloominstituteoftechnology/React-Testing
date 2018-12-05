import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it('matches snapshot', () => {
		const snapshot = renderer.create(<Panel />).toJSON();

		expect(snapshot).toMatchSnapshot();
	});

	it('should render correct number of buttons for each classname', () => {
		const wrapper = mount(<Panel />); // full rendering
		expect(wrapper.find('.component-button').length).toBe(19);
		expect(wrapper.find('.component-button.orange').length).toBe(5);
		expect(wrapper.find('.component-button.wide').length).toBe(1);
	});
});
