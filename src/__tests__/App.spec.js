import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('should render the Display component', () => {
		const app = shallow(<App />);
		const display = app.find('Display');
		expect(display.length).toEqual(1);

	})

	it('should render the Panel component', () => {
		const app = shallow(<App />);
		const panel = app.find('Panel');
		expect(panel.length).toEqual(1);

	})

	it('state should be zero and null by defualt', () => {
		const app = shallow(<App />);
		const instance = app.instance();
		expect(instance.state.total).toEqual('0');
		expect(instance.state.next).toEqual(null);
		expect(instance.state.operation).toEqual(null);
	})
});
