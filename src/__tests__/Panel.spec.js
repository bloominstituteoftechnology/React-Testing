import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe.skip('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('renders a div with class component-panel', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('div.component-panel').length).toBe(1);
  })

  it('renders all children of div with class component-panel', () => {
    const wrapper = shallow(<Panel />);
    const div = wrapper.find('div.component-panel');
    expect(div.children().length).toBe(5);
  })

  it('renders all 19 Button components for the calculator', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('Button').length).toBe(18);
  })

  // it('renders only one Button with every digit', () => {
  //   const wrapper = shallow(<Panel />);
  //   expect(wrapper.find('Button'))
  // })

  it.only('shows me some  PANEL props', () => {
    const wrapper = shallow(<Panel />);
    console.log(wrapper.props());
    console.log(wrapper.instance().props);
  });


});
