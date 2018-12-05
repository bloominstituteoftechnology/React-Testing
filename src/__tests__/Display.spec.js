import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});
	it('should render a div with class component-isplay', () => {
    const wrapper = shallow(<Display />);

    expect(wrapper.find('div.component-display').length).toBe(1);
	});
	it('should display the value passed to component', () => {
    const wrapper = shallow(<Display value='6' />);

    let display = wrapper.find('.component-display div');
    expect(display.text()).toBe('6');
  });
});
