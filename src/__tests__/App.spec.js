import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should return component with class: "component-app"', () => {
    const component = shallow(<App name = "app"/>);
    console.log(component);
    expect(component).toHaveLength(1);
  })

  it('should have a "total" property', () => {
    const component = shallow(<App />);
    expect(component.state('total')).toEqual("0");
  })

  it('should have a "next" property', () => {
    const component = shallow(<App />);
    expect(component.state('next')).toExist;
  })

//still need to test handler method  

});
