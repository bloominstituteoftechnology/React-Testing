import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {

  it('renders without crashing', () => {
    shallow(<Button/>);
  });

  // render
  it('renders one button element', () => {
    const button = shallow(<Button/>);
    const element = button.find('button');
    expect(element.length).toBe(1);
  });
  it('renders one div element', () => {
    const button = shallow(<Button/>);
    const element = button.find('div');
    expect(element.length).toBe(1);
  });

  // regular buttons 
  it('renders AC button correctly', () => {
    const props = { name: 'AC'};
    const button = shallow(<Button {...props}/>);
    const div = button.find('div');
    expect(div.hasClass('component-button')).toBeTruthy();
  });
  it('renders +/- button correctly', () => {
    const props = { name: '+/-'};
    const button = shallow(<Button {...props}/>);
    const div = button.find('div');
    expect(div.hasClass('component-button')).toBeTruthy();
  });
  it('renders % button correctly', () => {
    const props = { name: '%'};
    const button = shallow(<Button {...props}/>);
    const div = button.find('div');
    expect(div.hasClass('component-button')).toBeTruthy();
  });
  it('renders 7 button correctly', () => {
    const props = { name: '7'};
    const button = shallow(<Button {...props}/>);
    const div = button.find('div');
    expect(div.hasClass('component-button')).toBeTruthy();
  });
  it('renders 8 button correctly', () => {
    const props = { name: '8'};
    const button = shallow(<Button {...props}/>);
    const div = button.find('div');
    expect(div.hasClass('component-button')).toBeTruthy();
  });
  it('renders 9 button correctly', () => {
    const props = { name: '9'};
    const button = shallow(<Button {...props}/>);
    const div = button.find('div');
    expect(div.hasClass('component-button')).toBeTruthy();
  });
  it('renders 4 button correctly', () => {
    const props = { name: '4'};
    const button = shallow(<Button {...props}/>);
    const div = button.find('div');
    expect(div.hasClass('component-button')).toBeTruthy();
  });
  it('renders 5 button correctly', () => {
    const props = { name: '5'};
    const button = shallow(<Button {...props}/>);
    const div = button.find('div');
    expect(div.hasClass('component-button')).toBeTruthy();
  });
  it('renders 6 button correctly', () => {
    const props = { name: '6'};
    const button = shallow(<Button {...props}/>);
    const div = button.find('div');
    expect(div.hasClass('component-button')).toBeTruthy();
  });
  it('renders 1 button correctly', () => {
    const props = { name: '1'};
    const button = shallow(<Button {...props}/>);
    const div = button.find('div');
    expect(div.hasClass('component-button')).toBeTruthy();
  });
  it('renders 2 button correctly', () => {
    const props = { name: '2'};
    const button = shallow(<Button {...props}/>);
    const div = button.find('div');
    expect(div.hasClass('component-button')).toBeTruthy();
  });
  it('renders 3 button correctly', () => {
    const props = { name: '3'};
    const button = shallow(<Button {...props}/>);
    const div = button.find('div');
    expect(div.hasClass('component-button')).toBeTruthy();
  });
  it('renders . button correctly', () => {
    const props = { name: '.'};
    const button = shallow(<Button {...props}/>);
    const div = button.find('div');
    expect(div.hasClass('component-button')).toBeTruthy();
  });

  //wide button
  it('renders 0 button correctly', () => {
    const props = { name: '0', wide: true };
    const button = shallow(<Button {...props}/>);
    const div = button.find('div');
    expect(div.hasClass('component-button  wide')).toBeTruthy();
  });

  // orange buttons
  it('renders ÷ button correctly', () => {
    const props = { name: '÷' , orange: true };
    const button = shallow(<Button {...props}/>);
    const div = button.find('div');
    expect(['component-button', 'orange'].every(c => div.hasClass(c))).toBeTruthy();
  });
  it('renders x button correctly', () => {
    const props = { name: 'x' , orange: true };
    const button = shallow(<Button {...props}/>);
    const div = button.find('div');
    expect(['component-button', 'orange'].every(c => div.hasClass(c))).toBeTruthy();
  });
  it('renders - button correctly', () => {
    const props = { name: '-' , orange: true };
    const button = shallow(<Button {...props}/>);
    const div = button.find('div');
    expect(['component-button', 'orange'].every(c => div.hasClass(c))).toBeTruthy();
  });
  it('renders + button correctly', () => {
    const props = { name: '+' , orange: true };
    const button = shallow(<Button {...props}/>);
    const div = button.find('div');
    expect(['component-button', 'orange'].every(c => div.hasClass(c))).toBeTruthy();
  });
  it('renders = button correctly', () => {
    const props = { name: '=' , orange: true };
    const button = shallow(<Button {...props}/>);
    const div = button.find('div');
    expect(['component-button', 'orange'].every(c => div.hasClass(c))).toBeTruthy();
  });

});