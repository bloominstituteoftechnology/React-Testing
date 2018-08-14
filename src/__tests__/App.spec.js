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

  
  it('should display value of 0 on default', () => {
    const app = shallow(<App />);
    const instance = app.instance();
    expect(instance.state.total).toEqual('0')
  });

  it('should display null on default', () => {
    const app = shallow(<App/>);
    const instance = app.instance();
    expect(instance.state.next).toEqual(null)
  });
  
  it('should have the properties `total`, `next`, and `operation` in state', () => {
    const component = shallow(<App />);
    expect(component.state('total')).toEqual("0");
    expect(component.state('next')).toBeDefined();
    expect(component.state('operation')).toBeDefined(); 
  });

  it('should render a div with class `component-app`', () => {
    const component = shallow(<App />);
    expect(component.find('.component-app')).toHaveLength(1);
  });
  
  it('should render a div with class `component-app`', () => {
    const component = shallow(<App />);
    expect(component.find('.component-app')).toHaveLength(1);
  });

});
