import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('should display 0 when no state.next or state.total', () => {
    const wrapper = shallow(<Display value = "0" />);
    const display = wrapper.find(".component-display"); 
    expect(display.text()).toBe("0"); 
  }); 

  it('should display 0 when no state.next or state.total', () => {
    const wrapper = shallow(<Display value = "90000000000000" />);
    const display = wrapper.find(".component-display"); 
    expect(display.text()).toBe("90000000000000"); 
  }); 

});


