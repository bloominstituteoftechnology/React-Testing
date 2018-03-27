import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const component = shallow(<App />);  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('should store total, next, and operation in state', () => {
    expect(component.state('total')).toBeDefined();
    expect(component.state('next')).toBeDefined();
    expect(component.state('operation')).toBeDefined();
  });
  it('should contain a handleClick function that updates state', () => {
    component.instance().handleClick('5')
    expect(component.state('next')).toEqual('5');
    expect(component.state('total')).toBeNull();
    expect(component.state('operation')).toBeNull();
  });
  it('should render a div with class "component-app"', () => {
    expect(component.find('.component-app')).toHaveLength(1);
  });
});
