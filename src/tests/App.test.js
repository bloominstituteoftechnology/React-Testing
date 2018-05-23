import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  test('wrapdiv should have classname component app', () => {
    const wrapDiv = shallow(<App />);
    expect(wrapDiv.hasClass('component-app')).toBeTruthy();
  });
  test('expect two containers as children of the wrapdiv', () =>{
    const wrapDiv = shallow(<App />);
    expect(wrapDiv.find('.component-app').children().length).toBe(2);
  });
  test('expect initial values as in state', () => {
    const wrapDiv = shallow(<App />);
    expect(wrapDiv.state().total).toBe("0");
    expect(wrapDiv.state().next).toBe(null);
    expect(wrapDiv.state().operation).toBe(null);
  });
  test('panel button value test', () => {
    const wrapDiv = shallow(<App />);
    wrapDiv.instance().handleClick('2');
    expect(wrapDiv.state().total).toBe(null);
    expect(wrapDiv.state().next).toBe('2');
    expect(wrapDiv.state().operation).toBe(null);
  });
});