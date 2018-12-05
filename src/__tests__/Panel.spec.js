import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});
	it('should render a div with classname component-panel', () => {
    const wrapper = shallow(<Panel />);
		//returns an array with one div 
    expect(wrapper.find('div.component-panel').length).toBe(1);
	});
	it('should render 19 button components with different functionality', () => {
    const wrapper = shallow(<Panel />);
		//returns an array with the 19 buttons of the calculator app
    expect(wrapper.find('Button').length).toBe(19);
	});
});
