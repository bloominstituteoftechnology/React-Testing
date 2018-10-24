import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  const wrapper = shallow(<Button />);

  //Check if Button renders
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  //Check if renders a div with a className 'component-button' by default
  it('renders a div with className "component-button"', ()=>{
    const elements = wrapper.find("div.component-button");
    expect(elements.length).toBe(1);
  })
  //Check if renders a div with a className 'component-button orange' with this.props.orange
  it('renders a div with className "component-button orange" with this.props.orange', ()=>{
    const wrapper = shallow(<Button orange />)
    const elements = wrapper.find("div").hasClass("orange");
    expect(elements).toBe(true);
  })
  //Check if renders a div with a className 'component-button wide' with this.props.wide
  it('renders a div with className "component-button wide" with this.props.wide', ()=>{
    const wrapper = shallow(<Button wide />)
    const elements = wrapper.find("div").hasClass("wide");
    expect(elements).toBe(true);
  })
});
