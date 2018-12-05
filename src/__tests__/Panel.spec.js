import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});


    it('should render a div with  component panel class', ()=> {
      const wrapper = shallow(< Panel />)
      expect(wrapper.find('div.component-panel').length).toBe(1)
    })

    it('should render something???', ()=> {
      const snapshot = renderer.create(< Panel />)
       expect(snapshot).toMatchSnapshot()
    })

    it('should render 19 buttons ', ()=> {
      const snapshot = renderer.create(< Panel />)
      // const wrapper = shallow(< Panel />)
      expect(snapshot.find('button').length).toBe(1)

    })
});



