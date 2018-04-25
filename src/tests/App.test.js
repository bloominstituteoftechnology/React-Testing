import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should have total, next, and operation fields in state', () => {
    const component = shallow(<App />);
    // expect(component.state('total')).toBeDefined(); // can also use
    expect(component.state().total).toBeDefined();
    expect(component.state().next).toBeDefined();
    expect(component.state().operation).toBeDefined();
    
  });

  it('should render a div class with component-app', () => {
    const component = shallow(<App />);
    console.log(component.find('.component-app').length)
    expect(component.find('.component-app')).toHaveLength(1);
  });

  it('should render class Panel', () => {
    const component = shallow(<App />);
    expect(component.find('Panel')).toHaveLength(1);
  });

  it('should render class Display', () => {
    const component = shallow(<App />);
    expect(component.find('Display')).toHaveLength(1);
  });
});
