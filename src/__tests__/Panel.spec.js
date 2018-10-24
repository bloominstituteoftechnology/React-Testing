import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
    it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Panel />, div);
    });
    
    it('should have 19 buttons', () => {
	const wrapper = shallow(<Panel />);
	const button = wrapper.find('Button');
	expect(button.length).toBe(19);
    });

    it('should have a div with all the buttons in it', () => {
	const wrapper = shallow(<Panel />);
	const div = wrapper.find('div.component-panel');
	expect(div.length).toBe(1);
    });

    it('should have AC', () => {
	const wrapper = shallow(<Panel />);
	const element = wrapper.find('Button.AC');
	expect(element.length).toBe(1);
    });
});
