import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />);
  });
  it('should return a function', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('Button').first().prop('clickHandler')).toEqual(expect.any(Function));
  });
  it('should return the props', () => {
    const wrapper = shallow(<Panel />);
    // toBeDefined
    expect(wrapper.props().clickHandler).toBeUndefined();
  });
  it('should return class property', () => {
    const wrapper = shallow(<Panel />);
    const elements = wrapper.findWhere(n => n.name() === 'Button' && n.prop('orange') === true);
    expect(elements.length).toEqual(5);
  });
});
