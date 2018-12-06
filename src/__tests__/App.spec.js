import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('matches snapshot', () => {
		const snapshot = renderer.create(<App />).toJSON();
		expect(snapshot).toMatchSnapshot();
	});

	it('renders the app with a div with a component-app class', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.component-app').length).toBe(1)
	});

	it("should have total set to '0' by default", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.total).toBe('0');
	});
	
	it("should have next set to null by default", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.next).toBe(null);
	});
	
	it("should have next set to null by default", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.operation).toBe(null);
	});
});
