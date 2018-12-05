import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

  it('snapshot test', () => {
    const snapshot = renderer.create(<App />).toJSON()
  })
        it('default state', () => {
          const wrapper = shallow(<App />);
          const instance = wrapper.instance();

          expect(instance.state.total).toBe('0')
          
        })
});
