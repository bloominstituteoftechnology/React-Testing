import React from 'react';
import { shallow, mount } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

    it('should click a button', ()=>{

      const wrapper = mount(<Button />)
      const instance = wrapper.instance()


    })

    it.skip('should have a click handler prop', ()=> {
      const wrapper = shallow(<Button />)
      expect(wrapper.props().children.props.onClick).toEqual(true)
    })
});
