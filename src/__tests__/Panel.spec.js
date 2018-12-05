import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it('Should match snapshot', () => {
		const snapshot = renderer.create(<Panel />).toJSON();

		expect(snapshot).toMatchSnapshot();
	})

	it('Should render div with component-panel', () => {
		const wrapper = shallow(<Panel />);
		const elements = wrapper.find('div.component-panel');
		
		expect(elements.length).toBe(1);
	})

	it('should able to render all the button component', () => {
		const wrapper = shallow(<Panel />);
		const elements = wrapper.find('Button');
		
		expect(elements.length).toBe(19);
	})
});
