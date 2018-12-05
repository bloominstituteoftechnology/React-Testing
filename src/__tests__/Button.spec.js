import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('renders div', () => {
		const wrapper = shallow(<Button />);
		expect(wrapper.find('div').length).toBe(1);
	});
	
	it('has class name component-button', () => {
		const wrapper = shallow(<Button />);
		expect(wrapper.find('div.component-button').length).toBe(1);
	});

	it('class props passed down', () => {
		const orange = shallow(<Button orange />);
		const wide = shallow(<Button wide />);

		expect(orange.find('.orange').exists()).toBe(true);
		expect(wide.find('.wide').exists()).toBe(true);
	});
});
