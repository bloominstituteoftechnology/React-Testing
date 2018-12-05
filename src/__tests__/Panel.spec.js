import React from 'react';
import { shallow } from 'enzyme';
import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});
	it('handleClick function is present', () => {
		const wrapper = shallow(<Panel />);
		const instance = wrapper.instance().handleClick;
		expect(instance).toBeInstanceOf(Function);
	});
	it.skip('matches snapshot', () => {
		const snapshot = renderer.create(<Panel />).toJSON();
		expect(snapshot).toMatchSnapshot();
	});
	it('check for component-panel class', () => {
		const wrapper = shallow(<Panel />);
		const componentPanel = wrapper.find('div.component-panel');
		expect(componentPanel.length).toBe(1);	
	});
	it('renders all 19 Button components for the calculator', () => {
		const wrapper = shallow(<Panel />);
		expect(wrapper.find('Button').length).toBe(19);

	});
});
