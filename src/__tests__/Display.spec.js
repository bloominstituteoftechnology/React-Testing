import React from 'react';
import { shallow } from 'enzyme';
import Display from '../components/Display/Display';

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />);
  });
  it('should render a div with the className "component-display"', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find('div.component-display').length).toBe(1);
  });
  // it('shoud"', () => {
  //   const wrapper = shallow(<Display v />);
  //   expect(wrapper.render().props().value).toBe(undefined);
  // });
});
