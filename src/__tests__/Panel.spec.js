import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
  it('renders without crashing', () => {
		shallow(<Panel />);
  });
  it('renders 19 <Button /> components', () => {
    const wrapper = shallow(<Panel />);
    const elements = wrapper.find('Button');
    expect(elements.length).toEqual(19);
  });
});
