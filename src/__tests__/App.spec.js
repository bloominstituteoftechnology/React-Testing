import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

    it('we are checking the wrapper', () => {
      const wrapper = shallow(<App />)

        console.log(wrapper.instance().handleClick)
    })






});

describe('The state of the app component', () => {
	it('has a total value of zero', () => {
      const wrapper = shallow(<App />)
      const instance = wrapper.instance()
      expect(instance.state.total).toBe('0')
	});

	it('has a next value of null', () => {
      const wrapper = shallow(<App />)
      const instance = wrapper.instance()
      expect(instance.state.next).toBe(null)
	});

	it('has a operation value of null', () => {
      const wrapper = shallow(<App />)
      const instance = wrapper.instance()
      expect(instance.state.operation).toBe(null)
	});
})


