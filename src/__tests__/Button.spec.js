import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

    it('should click a button', ()=>{
      const wrapper = shallow(<Button />)
      const instance = wrapper.instance()


    })
});
