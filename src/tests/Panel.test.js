import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe.only('<Panel />', () => {

  it('renders without crashing', () => {
    shallow(<Panel/>);
  });
  //renders
  it('renders one div with classname "component-panel"', () => {
    const panel = shallow(<Panel/>);
    const div = panel.find('.component-panel');
    expect(div.hasClass('component-panel')).toBeTruthy();
  });
  it('renders 5 div containers for buttons', () => {
    const panel = shallow(<Panel/>);
    const div = panel.find('div > div');
    expect(div.length).toBe(5);
  });
  it('renders 19 Button components', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button');
    expect(component.length).toBe(19);
  });

  //button attributes
  it('renders one Button component with AC name & clickHandler', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button[name="AC"][clickHandler]');
    expect(component.length).toBe(1);
  });
  it('renders one Button component with +/- name & clickHandler', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button[name="+/-"][clickHandler]');
    expect(component.length).toBe(1);
  });
  it('renders one Button component with % name & clickHandler', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button[name="%"][clickHandler]');
    expect(component.length).toBe(1);
  });
  it('renders one Button component with ÷ name & clickHandler', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button[name="÷"][clickHandler]');
    expect(component.length).toBe(1);
  });
  it('renders one Button component with 7 name & clickHandler', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button[name="7"][clickHandler]');
    expect(component.length).toBe(1);
  });
  it('renders one Button component with 8 name & clickHandler', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button[name="8"][clickHandler]');
    expect(component.length).toBe(1);
  });
  it('renders one Button component with 9 name & clickHandler', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button[name="9"][clickHandler]');
    expect(component.length).toBe(1);
  });
  it('renders one Button component with x name & clickHandler', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button[name="x"][clickHandler]');
    expect(component.length).toBe(1);
  });
  it('renders one Button component with 4 name & clickHandler', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button[name="4"][clickHandler]');
    expect(component.length).toBe(1);
  });
  it('renders one Button component with 5 name & clickHandler', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button[name="5"][clickHandler]');
    expect(component.length).toBe(1);
  });
  it('renders one Button component with 6 name & clickHandler', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button[name="6"][clickHandler]');
    expect(component.length).toBe(1);
  });
  it('renders one Button component with - name & clickHandler', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button[name="-"][clickHandler]');
    expect(component.length).toBe(1);
  });
  it('renders one Button component with 1 name & clickHandler', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button[name="1"][clickHandler]');
    expect(component.length).toBe(1);
  });
  it('renders one Button component with 2 name & clickHandler', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button[name="2"][clickHandler]');
    expect(component.length).toBe(1);
  });
  it('renders one Button component with 3 name & clickHandler', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button[name="3"][clickHandler]');
    expect(component.length).toBe(1);
  });
  it('renders one Button component with + name & clickHandler', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button[name="+"][clickHandler]');
    expect(component.length).toBe(1);
  });
  it('renders one Button component with 0 name & clickHandler', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button[name="0"][clickHandler]');
    expect(component.length).toBe(1);
  });
  it('renders one Button component with . name & clickHandler', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button[name="."][clickHandler]');
    expect(component.length).toBe(1);
  });
  it('renders one Button component with = name & clickHandler', () => {
    const panel = shallow(<Panel/>);
    const component = panel.find('Button[name="="][clickHandler]');
    expect(component.length).toBe(1);
  });
});