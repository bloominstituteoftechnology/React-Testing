import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should have the properties \'total\', \'next\', and \'operation\' in state', () => {
    const component = shallow(<App />);
    expect(component.state('total')).toEqual('0');
    expect(component.state('next')).toBeDefined();
    expect(component.state('operation')).toBeDefined();
  });

  it('should have a \'handleClick\' method that updates state', () => {
    const component = shallow(<App />);
    component.instance().handleClick("9");
    expect(component.state('next')).toEqual("9");
    expect(component.state('total')).toEqual("0");
    expect(component.state('operation')).toBeNull();
  })
});
