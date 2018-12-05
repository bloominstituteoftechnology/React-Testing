import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />)
	})
	it.skip('matches snapshot', () => {
		const snapshot = renderer.create(<App />).toJSON()
		expect(snapshot).toMatchSnapshot()
	})
	it('has correct initial state', () => {
		const instance = shallow(<App />).instance()
		expect(instance.state.total).toBe('0')
		expect(instance.state.next).toBe(null)
		expect(instance.state.operation).toBe(null)
	})
})
