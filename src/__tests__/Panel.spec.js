import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests.js';

// Components
import Panel from '../components/Panel/Panel.js';
import Button from '../components/Button/Button.js';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it('renders a div with a "component-panel" class', () => {
		const wrapper = shallow(<Panel />);
		expect(wrapper.find('div.component-panel').length).toBe(1);
	});

	it('renders 5 secondary divs within the "component-panel" class div', () => {
		const wrapper = shallow(<Panel />);
		expect(wrapper.find('div.component-panel>div').length).toBe(5);
	});

	it('should render 19 total Button components inside the secondary divs', () => {
		const wrapper = shallow(<Panel />);
		// are they all Button components?
		wrapper.find('div.component-panel>div').forEach(div => {
			div.children().forEach(button => {
				expect(button.name()).toBe('Button');
			})
		});
		// are there 19 of them?
		expect(wrapper.find('div.component-panel>div').children().length).toBe(19);
	});

	it('gives Button components a name and clickHandler prop', () => {
		const wrapper = shallow(<Panel />);
		wrapper.find(Button).forEach(btn => {
			expect(typeof(btn.props().name)).toBe('string');
			expect(typeof(btn.props().clickHandler)).toBe('function');
		});
	});
});
