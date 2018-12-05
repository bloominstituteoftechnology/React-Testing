import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it('should render 1 overall div with classname : component-panel', () => {
		const wrapper = shallow(<Panel />)
		expect(wrapper.find('div.component-panel').length).toBe(1)

	});

	it('should render 19 button components', () => {
		const wrapper = shallow(<Panel />)
		const buttons = wrapper.find('Button');
		expect(buttons.length).toBe(19)

	});
});
/* 
TESTS
-renders one overall class: component-panel
-should render 19 button components
*/