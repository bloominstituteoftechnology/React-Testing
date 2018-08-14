import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('should render expected value', () => {
    const value = '5';
    const wrapper = shallow(<Display value={value} />);
    const div = wrapper.find('.component-display').childAt(0).childAt(0);
    expect(div.text()).toEqual('5');
  })

});
