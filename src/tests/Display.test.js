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

  it('should contain a wrapper div',() => {
    const display = shallow(<Display/>);
    expect(display.find('div').exists()).toBe(true);
  });

//  it('should display a value', () => {
//    const display = shallow(<Display/>);
//    const value = 'something';
//    expect(display.find('.component-display').text()).toBe({ value });
//  });

});
