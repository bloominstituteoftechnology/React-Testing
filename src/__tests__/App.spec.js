import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });
let wrapper;

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should render with a class of component-app', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('.component-app')).toHaveLength(1);
  });

  it('should have `total`, `next`, and `operation` in state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('total')).toEqual("0");
    expect(wrapper.state('next')).toBeDefined();
    expect(wrapper.state('operation')).toBeDefined(); 
  });

});
