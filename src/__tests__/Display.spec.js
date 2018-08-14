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


  it('should return a least and most of 1', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper).toHaveLength(1);
  });

  it('should have a prop named `value` that displays to the screen', () => {
  	const wrapper = shallow(<Display value={'1'} />);
  	const value = wrapper.find('.component-display');
   	expect(value.text()).toEqual('1');
});
});
