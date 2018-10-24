import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button.js';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  const wrapper = shallow(<Panel />);
  //Check if Panel renders
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  //Check if renders a component-panel class
  it('renders a "component-panel" class', ()=>{
    const elements = wrapper.find("div.component-panel");
    expect(elements.length).toBe(1);
  })
  //Check if renders 19 Button components
  it('renders 19 "Button" components', ()=>{
    const elements = wrapper.find(Button);
    expect(elements.length).toBe(19);
  })
  //Check if renders a Button name AC
  it('renders a "Button" name "AC"', ()=>{
    const elements = wrapper.containsMatchingElement(<Button name="AC" />);
    expect(elements).toBe(true);
  })
});
