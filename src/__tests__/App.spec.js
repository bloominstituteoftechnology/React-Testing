import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
    it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
    });
    
    it('should have 1', () => {
	const wrapper = shallow(<App />);
	const display = wrapper.find('div.component-app');
	expect(display.length).toBe(1);
    });

    it('should have 1', () => {
	const wrapper = shallow(<App />);
	const display = wrapper.find('Panel.myPanel');
	expect(display.length).toBe(1);
    });

    it('should have 1', () => {
	const wrapper = shallow(<App />);
	const display = wrapper.find('Display');
	expect(display.length).toBe(1);
    });
});
