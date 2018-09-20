import React from 'react';
import { shallow } from 'enzyme';

import App from '../App.js';
import Display from '../components/Display/Display';
import Panel from '../components/Panel/Panel';

import calculate from '../logic/calculate';

jest.mock('../logic/calculate.js');

describe('<App />', () => {
  	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('testing state, should be { total: "0", next: null, operation: null }', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();

		expect(instance.state.total).toEqual('0');
		expect(instance.state.next).toEqual(null);
		expect(instance.state.operation).toEqual(null);
	});

	it('renders children components when passed in', () => {
		const wrapper = shallow((
			<div>
				<Display />
				<Panel />
			</div>
		));
		expect(wrapper.contains(<Display /> && <Panel />)).toEqual(true);
	});

	it('should be the total to Display if next are null', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
		wrapper.setState({ next: null, total: '7' });

		const elements = wrapper.find({ value: instance.state.total });

		expect(elements.length).toBe(1);
	});

	it('handleClick should calls clculate exactly once passsing state and button name', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
		const stateObject = { total: '3' };
		instance.setState(stateObject);

		instance.handleClick('add');

		expect(calculate).toHaveBeenCalledTimes(1);
		expect(calculate).toHaveBeenCalledWith(instance.state, 'add');
		instance.handleClick('total');
		expect(calculate).toHaveBeenCalledWith(instance.state, 'total');
	});
});
