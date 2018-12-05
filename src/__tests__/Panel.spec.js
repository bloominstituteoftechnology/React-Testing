import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('should have a div with the classname component-panel, () => {
    const wrapper = shallow(<Panel/>)
    const elements = wrapper.find('div.component-panel')
    expect(elements.exists()).toBe(true)
  });

  it('should have 19 buttons', () => {
    const wrapper = shallow(<Panel/>)
    const elements = wrapper.find('Button')
    expect(elements.length).toBe(19)
  });

  it('should return true if all buttons have correct props', () => {
    const wrapper = shallow(<Panel/>)
    const buttons = wrapper.find('Button')
    buttons.forEach(node => {
      expect(Object.keys(node.props()).join(' ').trim().includes('name clickHandler')).toBe(true)
    })
  });
});
