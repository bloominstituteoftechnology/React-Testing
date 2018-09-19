import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import App from './App';
import Button from './components/Button/Button';

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
});