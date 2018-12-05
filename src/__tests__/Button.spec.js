import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});
	it('should render a div with classname component-panel', () => {
    const wrapper = shallow(<Button />);
		//returns an array with one div 
    expect(wrapper.find('div.component-button').length).toBe(1);
	});
});
