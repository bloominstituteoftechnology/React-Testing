import React from 'react';
import { shallow, mount } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	const props = {
		value: '200'
	}
	const display = mount(<Display {...props}/>);

	it('value passed is a a string', () => {
		expect(display.props().value).toEqual('200')
	});

	it('value passed in should be displayed as inner divs text', () => {
		expect(display.childAt(0).text()).toBe(props.value)
	});

});
