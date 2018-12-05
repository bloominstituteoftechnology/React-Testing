import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

    it('has a div called component-display', ()=> {
      const wrapper = shallow(<Display />)
      expect(wrapper.find('div.component-display').length).toBe(1)
    })
});
