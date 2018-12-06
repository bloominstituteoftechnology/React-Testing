import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	const app = shallow(<App />);
	const instance = app.instance();

	it('both Display component render', () => {
		const display = app.find('Display')
		expect(display).toBeTruthy()
	});

	it('both Panel component render', () => {
		const panel = app.find('Panel')
		expect(panel).toBeTruthy()
	});

	it('handleClick function can be called', () => {
		const clickFunc = jest.spyOn(instance, 'handleClick')

		instance.handleClick("1");
		expect(clickFunc).toBeCalled();
	});

	it('handleClick can add two two digit numbers', () => {
		expect(instance.state.next).toEqual("1");
		
		instance.handleClick("2");
		expect(instance.state.next).toEqual("12");
		
		instance.handleClick("+");
		expect(instance.state.total).toEqual("12");
		expect(instance.state.next).toEqual(null);
		expect(instance.state.operation).toEqual("+");

		instance.handleClick("1");
		expect(instance.state.total).toEqual("12");
		expect(instance.state.next).toEqual("1");
		expect(instance.state.operation).toEqual("+");

		instance.handleClick("2");
		expect(instance.state.total).toEqual("12");
		expect(instance.state.next).toEqual("12");
		expect(instance.state.operation).toEqual("+");

		instance.handleClick("=");
		console.log(instance.state);
		expect(instance.state.total).toEqual("24");
		expect(instance.state.next).toEqual(null);
		expect(instance.state.operation).toEqual(null);


	});
});
