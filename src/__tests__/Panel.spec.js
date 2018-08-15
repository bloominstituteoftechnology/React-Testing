import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('should render 19 Button components to the screen', () => {
    const wrapper = shallow(<Panel />);
    const buttons = wrapper.find('Button');

    expect(buttons).toHaveLength(19);
  })

  it('should have a method called handleClick', () => {
    const wrapper = shallow(<Panel />);
    const instance = wrapper.instance();

    expect(instance.handleClick).toBeDefined();
  })


});

