import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });
});

describe('should render the correct value', () => {
  it('should render 0', () => {
    const wrapper = shallow(<Display value={'0'}/>);
    const display = wrapper.find('.component-display')
  
    expect(display.text()).toEqual('0');
  });
  
  it('should render 1000', () => {
    const wrapper = shallow(<Display value={'1000'}/>);
    const display = wrapper.find('.component-display')
  
    expect(display.text()).toEqual('1000');
  });
})
