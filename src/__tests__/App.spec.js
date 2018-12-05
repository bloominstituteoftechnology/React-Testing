import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Display from '../components/Display/Display';
import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('matches snapshot', () => {
		const snapshot = renderer.create(<App />).toJSON();
		expect(snapshot).toMatchSnapshot();
	})

	it('should default the total to 0', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
		expect(instance.state.total).toBe('0');
	})

	it('should default next to null', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
		expect(instance.state.next).toBe(null);
	})

	it('should default operation to null', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
		expect(instance.state.operation).toBe(null);
	})

});
