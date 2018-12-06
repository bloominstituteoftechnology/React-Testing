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

    it('has a prop.value of zeor', ()=> {
      const wrapper = shallow(<Display />)
      expect(wrapper.props().children.type).toEqual('div')
      // expect(wrapper.find('div.component-display').length).toBe(1)
    })
    
});
