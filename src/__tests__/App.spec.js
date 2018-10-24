import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('should render a div with the classname: "component-app"', () => {
    const wrapper = shallow(<App/>)
    const elements = wrapper.find('div.component-app')
    expect(elements.length).toBe(1)
  });

  //Display

  it('should render a component called "Display', () => {
    const wrapper = shallow(<App/>)
    const elements = wrapper.find('Display')
    expect(elements.length).toBe(1)
  });
  it('Display should have the following props: "value', () => {
    const wrapper = shallow(<App/>)
    const props = wrapper.find("Display").props()
    expect(Object.keys(props).join(" ").trim()).toBe("value")
  });
  it('Display should passed down 0 as props value\'s value', () => {
    const wrapper = shallow(<App/>)
    const prop = wrapper.find('Display').prop('value')
    expect(prop).toBe("0")
  });

  //Panel

  it('should render a component called Panel', () => {
    const wrapper = shallow(<App/>)
    const elements = wrapper.find('Panel')
    expect(elements.length).toBe(1)
  });
  it('Display should have the following props: "clickHandler', () => {
    const wrapper = shallow(<App/>)
    const props = wrapper.find("Panel").props()
    expect(Object.keys(props).join(" ").trim()).toBe("clickHandler")
  });

  //App State

  it('should have total, next, and operation as keys in the state object', () => {
    const wrapper = shallow(<App/>)
    const instance = wrapper.instance()
    expect(Object.keys(instance.state).join(" ")).toEqual("total next operation")    
  });
  it('The key in the state object called "total" should have a value of "0"', () => {
    const wrapper = shallow(<App/>)
    const instance = wrapper.instance()
    const {total} = instance.state
    expect(typeof total).toBe('string')
    expect(total).toBe("0")
  });
  it('The key in the state object called "next" should have a value of null', () => {
    const wrapper = shallow(<App/>)
    const instance = wrapper.instance()
    const {next} = instance.state
    expect(next).toBe(null)
  });
  it('The key in the state object called "operation" should have a value of null', () => {
    const wrapper = shallow(<App/>)
    const instance = wrapper.instance()
    const {operation} = instance.state
    expect(operation).toBe(null)
  });  
  it('should have 19 buttons', () => {
    const wrapper = shallow(<App/>)
    const buttons = wrapper.find('Panel').dive().find('Button')
    expect(buttons.length).toBe(19)
  });
  it('The key of state object, total, should equal 5', () => {
    const wrapper = shallow(<App/>)
    const instance = wrapper.instance()
    const buttons = wrapper.find('Panel').dive().find('Button').at(4).dive().find('button')
    buttons.simulate('click')
    expect(instance.state.next).toBe("7")
  })


});
