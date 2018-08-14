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
  it('renders component-display', () => {
    const wrapper = shallow(<Display />);
    const componentDisplay = wrapper.find('.component-display');
    expect(componentDisplay).toBeDefined();
  });
  it('displays value prop', () => {
    const wrapper = shallow(<Display value='test' />);
    const componentDisplayValue = wrapper.find('.component-display > div');
    expect(componentDisplayValue.text()).toEqual('test');
  });
});

