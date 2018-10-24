import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  const wrapper = shallow(<Display />);
  const instance = wrapper.instance();

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('should return className `component-display` within a div', () => {
    expect(wrapper.find('div.component-display')).toHaveLength(1);
  });

  it('should return negative or positive value passed', () => {
    wrapper.setProps({value: '-5'});
    
    expect(wrapper.contains('-5')).toBeTruthy();
  });


});
