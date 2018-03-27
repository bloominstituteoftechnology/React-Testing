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
  it('has all of the states', () => {
    const stateOfApp = shallow(<App />);
    expect(stateOfApp.state('total')).toBeDefined();
    expect(stateOfApp.state('next')).toBeDefined();
    expect(stateOfApp.state('operation')).toBeDefined();
  })
  it('component app should exist', () => {
    const componentApp = shallow(<App />);
    expect(componentApp.find('.component-app')).toHaveLength(1);
  });
  it('handleClick should be functioning', () => {
    const clickFunction = shallow(<App />);
    clickFunction.instance().handleClick('3');
    expect(clickFunction.state('next')).toEqual('3');
  });
});
