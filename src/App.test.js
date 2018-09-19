import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import App from './App';
import Button from './components/Button/Button';
import Display from './components/Display/Display';
import Panel from './components/Panel/Panel';

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
});