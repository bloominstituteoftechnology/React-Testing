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

  it('should render display correctly', () => {
    const component = shallow(<App />);
    expect(component.find('Display').length).toBe(1);
  });

  it('should render panel correctly', () => {
    const component = shallow(<App />);
    expect(component.find('Panel').length).toBe(1);
  });

  it('should display values correctly', () => {
    const component = shallow(<App />);
    expect(component.state('next')).toBe(null);
    expect(component.state('total')).toBe(null);
    expect(component.state('operation')).toBe(null);
  });

  it('should set values when clicked', () => {
    const component = shallow(<App />);
    // const goSpy = sinon.spy(component.instance().handleClick('6'));
    // component.simulate('click');
    component.instance().handleClick('6');
    expect(component.state('next')).toEqual('6');
    expect(component.state('total')).toBeNull();
    expect(component.state('operation')).toBeNull();
  });
});
