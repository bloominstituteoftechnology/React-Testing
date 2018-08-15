import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    shallow(<App />, div);
  });
});


it('should update state total, next, and operations; also testing addition', () => {
  const app = shallow(<App />);
  
  app.instance().handleClick('1');
  expect(app.state('next')).toEqual('1');
  
  app.instance().handleClick('+');
  expect(app.state('operation')).toEqual('+');
  
  app.instance().handleClick('2');
  expect(app.state('next')).toEqual('2');
  
  app.instance().handleClick('=')
  expect(app.state('total')).toEqual('3');
});

it('should subtract and display result', () => {
  const app = shallow(<App />);

  app.instance().handleClick('5');
  app.instance().handleClick('5');
  expect(app.state('next')).toEqual('55');
  
  app.instance().handleClick('-');
  expect(app.state('operation')).toEqual('-');
  
  app.instance().handleClick('3');
  app.instance().handleClick('6');
  expect(app.state('next')).toEqual('36');
  
  app.instance().handleClick('=')
  expect(app.state('total')).toEqual('19');
});

it('should multiply and display result', () => {
  const app = shallow(<App />);

  app.instance().handleClick('3');
  expect(app.state('next')).toEqual('3');
  
  app.instance().handleClick('x');
  expect(app.state('operation')).toEqual('x');
  
  app.instance().handleClick('4');
  expect(app.state('next')).toEqual('4');
  
  app.instance().handleClick('=')
  expect(app.state('total')).toEqual('12');
});

it('should divide and display result', () => {
  const app = shallow(<App />);

  app.instance().handleClick('8');
  app.instance().handleClick('7');
  app.instance().handleClick('9');
  expect(app.state('next')).toEqual('879');
  
  app.instance().handleClick('÷');
  expect(app.state('operation')).toEqual('÷');
  
  app.instance().handleClick('3');
  expect(app.state('next')).toEqual('3');
  
  app.instance().handleClick('=')
  expect(app.state('total')).toEqual('293');
});


it('should render the Display and Panel components', () => {
  const app = shallow(<App />);

  const display = app.find('Display');
  const panel = app.find('Panel');

  expect(display.length).toBe(1);
  expect(panel.length).toBe(1);
});
