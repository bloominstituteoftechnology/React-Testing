import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button/Button';
import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />)
	})
	it('renders the component panel', () => {
		expect(shallow(<Panel />).find('div.component-panel').length).toBe(1)
	})
	it('renders 19 button components', () => {
		expect(shallow(<Panel />).find(Button).length).toBe(19)
	})
})
