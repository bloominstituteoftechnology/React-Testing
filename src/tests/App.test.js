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
  it('should have state properties: total, operation and next', () => {
    const component = shallow(<App />);
    expect(component.state('total')).toBeDefined();
    expect(component.state('operation')).toBeDefined();
    expect(component.state('next')).toBeDefined();
  });
  it('should have handleClick method', () => {
    const component = shallow(<App />);
    component.instance().handleClick('1');
    component.instance().handleClick('+');
    component.instance().handleClick('2');
    expect(component.state('next')).toEqual('2');
    expect(component.state('operation')).toEqual('+');
    expect(component.state('total')).toEqual('1');
  });
  it('should render a div', () => {
    const component = shallow(<App />);
    expect(component.find('div')).toHaveLength(1);
  })
});
