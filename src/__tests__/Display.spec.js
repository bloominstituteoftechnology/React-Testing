import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('should render with a class of component-display', () => {
    wrapper = shallow(<Display />);
    expect(wrapper.find('.component-display')).toHaveLength(1);
  });

  it('should render expected prop value', () => {
    const value = '5';
    const wrapper = shallow(<Display value={value} />);
    const div = wrapper.find('.component-display');
    expect(div.text()).toEqual('5');
  })

});
